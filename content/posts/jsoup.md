+++
draft = true
thumbnail = "images/jsoup/thumbnail.png"
toc = true
tags = ["Eclipse", "Java", "Jsoup"]
categories = ["Java"]
date = "2019-05-26"
title = "JavaでHTMLバースしてみる。(Jsoupの使い方)"
description = "JavaでHTMLバース欲があるのでバースしてコケる。"
+++
# ご挨拶
こんにちは。[@mira_tech](https://twitter.com/mira_tech)です。
なんか最近HTMLバースしたいのでhtmlバースします。そう、**Jsoup**で。

## チュートリアル！

{{< img src="images/jsoup/Eclipse-project-create.png" >}}
プロジェクト作成！！！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">さっき気付いたんだけどめちゃくちゃ便利これ。<br>最高すぎる <a href="https://t.co/HDd7HJdrzq">pic.twitter.com/HDd7HJdrzq</a></p>&mdash; 🛰🍣🍣🍣mira_sushi🍣🍣🍣🛰 (@mira_tech) <a href="https://twitter.com/mira_tech/status/1132084783641530368?ref_src=twsrc%5Etfw">May 25, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

便利。マジで。

そしてライブラリーとなる[Jsoupをダウンロード](https://jsoup.org/download)

{{< img src="images/jsoup/jsoup-download.png" >}}

で、プロジェクトを右クリックしてプロパティをクリック。

{{< img src="images/jsoup/Eclipse-Property.png" >}}

んで、”Javaのビルド・パス”を選択⇨”ライブラリ”を選択(選択済みの場合は次)⇨”クラスパス”をクリック⇨”外部JARの追加”でダウンロードしたやつを選択。それで”適用して閉じる”すれば適用されます。

{{< img src="images/jsoup/Eclipse-JavaBuildpath.png" >}}

そしたらメインクラスに下のコードをコピペして見てください。
```java

package jsoup.mira_tech;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Main {

	public static void main(String[] args) {
		// *TODO* 自動生成されたメソッド・スタブ
		Document document;
		try {
			//接続！！
			document = Jsoup.connect(“https://www.gizmodo.jp/“).get();
			//出力！！！！
			System.out.println(document.html());
		} catch (IOException e) {
			// *TODO* 自動生成された catch ブロック
			//エラーです。残念。
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

残念ながらclass名``` .p-cardHead-cardTitle```のHTMLタグのついた要素が2つあって衝突してるみたいです。
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

詳しくはコード見て。

ちなみにGizmodoの最初に出てくる一番でかい上にあるやつ(見出し記事？)のタイトルを出してます。ちなみに一つ目の記事のタイトルに空白が入ると空白基準にしてるので『別の記事だ！！！』と勘違いされて終わります。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">くそグラフシリーズ、これが一番すき <a href="https://t.co/9WgOzrHMRW">pic.twitter.com/9WgOzrHMRW</a></p>&mdash; じゃがりきん (@jagarikin) <a href="https://twitter.com/jagarikin/status/1131943542329266176?ref_src=twsrc%5Etfw">May 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

とか書いてたら空白入って早速死にました

{{< img src="images/jsoup/Die.png" caption="な ぜ な の か" >}}

