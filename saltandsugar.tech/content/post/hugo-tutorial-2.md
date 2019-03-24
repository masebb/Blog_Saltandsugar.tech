+++
date = "2019-03-13T17:00:00+09:00"
title = "Hugoの基礎工事！"
thumbnail = "images/Hugo-Tutorial-Thumbnail.png"
toc = true 
categories = [ "hugo" ]
tags = [ "hugo", "PC", "ブログ"]
series = ["Hugo-Tutorial"]
description = "Hugoでブログを建てる方法シリーズ"
+++
## 自分のパソコンの中にブログを作る
Hugoは静的サイトジェネレータです。静的な.htmlファイルを吐き出すためにまずPC内で土台を作らないといけません。

家の基礎工事と同じですね。では！
## Hugoのインストール
**注意:これ、結構バージョンとかが変わったりすると結構変わったりするので、もしエラーなどが出て泣きそうな時はそっとコメントして下さい。回答します。** 

## Mac
 **HomeBrew**を使います。
 {{% img src="images/homebrew-social-card.png" caption="[brew.sh](https://brew.sh/)より"%}}
 
# HomeBrewを知っている方
 
多分インストールされているはず。もしされていなかったら後々エラーが出ます。その時は下の方を見てね。
# な　ん　だ　そ　れ
 
インストールしましょう。
#  HomeBrewのインストール方法

1.ターミナルを開く。
{{% img src="images/Hugo-tarminal.png" caption="これ" %}}

2.インストール!!!!!!!!!
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
    
```
を実行！！！

{{% img src="images/hugo-brew-install.png" caption="こうする。" %}}
```
brew help
```
をして出力が来たら終わり。

# Hugoのインストール方法
**MacOS Mojave 10.14にて検証済み。**

1.ターミナルを開く
{{% img src="images/Hugo-tarminal.png" caption="これ" %}}

2.インストール!!!!!!!!!!!!!!!
```
brew install hugo
```
{{% img src="images/hugo-hugo-install.png" caption="こうする。" %}}
(安定の完了した画像が無い)

```
hugo version
```
で
{{% img src="images/hugo-version.png" caption="こうなるはず" %}}
こんな感じの出力が出たらOK!

## Windows
**WindowsでのHugoのインストールについては筆者がWindowsマシンを所有していないので、動作が保証できません()誰か検証して()**

Chocolateyと言うパッケージマネージャー(?)を使うらしい
    
**Chocolateyの[インストール方法のページ](https://chocolatey.org/install)を熟読したのですが全く理解できませんでした()**

*助けて..*

## linux
**未検証！！！！**やる気になったら検証します

# Goを入れた覚えがある方
多分インストールされているはず。もしされていなかったら後々エラーが出ます。その時は下の方を見てね。

# な　ん　だ　そ　れ
インストールしましょう!!!!!


1.ターミナルを開く！！！
2.(インストールする場所へ)移動！！！
```
cd /usr/local/src
```
3.ダウンロード！！！！！！！！
```
sudo wget https://storage.googleapis.com/golang/go1.12.1.linux-amd64.tar.gz
```
(パスワードを要求されます。入力してください。)

3.解凍！！！！！！！！！！！
```
tar -C /usr/local -xzf ~/go1.8.3.linux-amd64.tar.gz
```

Goのインストール完了！！！

# Hugoのインストール！！

1.ターミナルを開く！！！！

2.ファイルを作成！！！！
```
mkdir Test
```

3.移動！！！
```
cd Test/
```

3.クローン(複製)
```
git clone https://github.com/gohugoio/hugo.git
```
4.移動！！！
```
cd hugo
```
5.インストール！！！
```
go install --tags extended
```

Hugoのインストール完了！！！


## ブログを動かす！
全OS共通のはず。

### サイトを作る！
1.フォルダを作る。
(作成したいところの上で)
```
mkdir 作成したいフォルダのお名前
```
ブログのドメインとかの名前とかにすると覚えやすい。
2.サイトを作る。
```
hugo new site ここに名前！
```
を実行！！！
これでブログの作成が完了できました！！！
{{% img src="images/hugo-Tutorial-2-cui1.png" caption="こんな感じ." %}}

次はテーマの適用とかします。
## 補足
HomeBrew= MacOS用パッケージマネージャー

Chocolatey= Windows用パッケージマネージャ(?)

パッケージマネージャー= ソフトの導入、削除、アップデートなどを管理してくれるもの。例:AppStore,GooglePlay,Homebrew etc...

## 参考
https://tisnote.com/golang-development-environment/

https://gohugo.io/getting-started/installing/

https://brew.sh/index_ja

