+++
draft = true
thumbnail = "images/jsoup/thumbnail.png"
toc = true
tags = ["Eclipse", "Java", "Jsoup"]
categories = ["Java"]
date = "2019-05-26"
lastmod = "2020-11-27"
title = "JavaでHTMLバースしてみる。(Jsoupの使い方)"
description = "JavaでHTMLバース欲があるのでバースしてコケる。"
+++
# ご挨拶
こんにちは。[@mira_tech](https://twitter.com/mira_tech)です。
なんか最近HTMLバースしたいのでhtmlバースします。そう、**Jsoup**で。

## チュートリアル！
依存関係を追加
### Maven
```xml
<!-- https://mvnrepository.com/artifact/org.jsoup/jsoup -->
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.12.1</version>
</dependency>
```
### Gradle
```
// jsoup HTML parser library @ https://jsoup.org/
compile 'org.jsoup:jsoup:1.12.1'
```


そしたらメインクラスに下のコードをコピペして見てください。
```java

package jsoup.mira_tech;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Main {

	public static void main(String[] args) {
		Document document;
		try {
			//接続！！
			document = Jsoup.connect(“https://www.gizmodo.jp/“).get();
			//出力！！！！
			System.out.println(document.html());
		} catch (IOException e) {
			System.err.println(“エラーーーーーーーーーー”);
			e.printStackTrace();
		}
	}

}
```


そして実行すると、

{{< img src="images/jsoup/gizmode-html.png" >}}

こんな感じで[Gizmodo](https://gizmodo.jp)の生のHTMLが出てきます。

{{% adsense %}}
## タグとかクラスとか指定する。
まずどこに求めている情報があるかチェックします。

### Firefox:
そのページで左クリック！

{{< img src="images/jsoup/Firefox-Devtool.png" >}}

要素を調査をクリック。
そして、左上にあるこれをクリック。

{{< img src="images/jsoup/Firefox-Devtool-2.png" >}}

そして、求めている情報の上にマウスを動かします。

{{< img src="images/jsoup/Firefox-Devtool-3.png" >}}

こうなります。で、クリックするとそれが選択されます。

{{< img src="images/jsoup/Firefox-Devtool-4.png" >}}

この記事タイトルに属しているクラス名は```p-cardHead-cardTitle```です

まずタグを丸ごとごと取得するところまで

h2にあるクラス ```p-cardHead-cardTitle```を取得したいのでクラスを指定して出すようなコード出します。
```java
package jsoup.mira_tech;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Main {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		Document document;
		try {
			//接続！！
			document = Jsoup.connect("https://www.gizmodo.jp/").get();
			//出力！！！！
			Elements topnewsElements = document.select(".p-cardHead-cardTitle");
			
			System.out.println(topnewsElements);
			//System.out.println(document.html());
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			//エラーです。残念。
			System.err.println("エラーーーーーーーーーー");
			e.printStackTrace();
		}
	}

}
```
実行！！！！

ダメです！(プログラム的には正しい動作。結果が求めているものと違ったって事)

1つだけ取得したいのに2つも出てきました

{{< img src="images/jsoup/cmp.png" >}}

これは困った。本来ならばこれで終わるはずやったのに。

残念ながらclass名``` .p-cardHead-cardTitle```のHTMLタグのついた要素が2つあって衝突(?)してるみたいです。
と言う訳で頑張る。

## 頑張る！！！！！！

```java
package jsoup.mira_tech;

import java.io.IOException;
import java.util.Arrays;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class Main {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		Document document;
		try {
			//接続！！
			document = Jsoup.connect("https://www.gizmodo.jp/").get();
			//なんのクラスの中の何のタグを参照するか決める
			Elements topnewsElements = document.select(".p-cardHead-cardTitle").select("a");
			//大元。余計なheafタグとかが消えるように.text()でやる
		            System.out.println("元:" + topnewsElements.text());
		    //2つ出てきてしまったので、splitを使って*空白*を基準に分割
		            String[] split = topnewsElements.text().toString().split(" ");
		    //,で別れているのが出力される
		            System.out.println("解析:" + Arrays.toString(split));
		    //spritに引数付けて[0]、つまり文章の頭から次の空白あるところまでを対象にして出力
		            System.out.println("もっと解析:" + split[0]);
		            
			//System.out.println(document.html());
		} catch (IOException e) {
			// TODO 自動生成された catch ブロック
			System.err.println("エラーーーーーーーーーー");
			e.printStackTrace();
		}
	}

}

```

(コード解説はしません)

ちなみにGizmodoの最初に出てくる一番でかい上にあるやつ(見出し記事？)のタイトルを出してます。ちなみに一つ目の記事のタイトルに空白が入ると空白基準にしてるので『別の記事だ！！！』と勘違いされて終わります。

とか書いてたらタイトルに空白入って早速死にました

{{< img src="images/jsoup/Die.png" caption="な ぜ な の か" >}}

