+++
draft = true
toc = true
thumbnail = "images/Hugo-Tutorial-Thumbnail.jpg"
tags = ["hugo", "PC", "ブログ"]
categories = ["hugo"]
series = ["Hugo-Tutorial"]
date = "2019-03-27T21:14:46+09:00"
lastmod = "2019-03-27T21:14:46+09:00"
title = "Hugoでローカル内ブログをする。"
description = "Hugoの各種設定や、カスタム(Google analytics、Google Adsense、Diqusとか)したりする方法をそれなりに解説します！"
+++

もうすぐ3月が終わってしまいますね....
悲しい😢
## テーマの適用
もう早速行きます。

前回でサイトを作成してそのファイルの下に色々なファイルが出来たはずです。

{{% img src="images/hugo-tutorial-3/hugo-tutorial-file.png" %}}
```
.
├── archetypes
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
```


こんな感じなはず。でテーマを突っ込みます。

### 1.テーマを入れる。

**テーマを探します。**

[ここ](https://themes.gohugo.io/)に色々なテーマがあります。今回はブログを作るのが目的なので**ブログ用のものを選択**しましょう。

今回は[これ](https://themes.gohugo.io/hugo-theme-m10c/)がおしゃれだったのでこれ使います。

{{% img src="images/hugo-tutorial-3/hugo-tutorial-theme.png" %}}

### 2.テーマを突っ込むファイルに移動して貼っつけ
```
cd themes/
```
で移動します。

でさっき見つけた奴のDownloadを押します。するとgithubのページが出ます。

でテンプレートのファイルを[テーマのリポジトリ(m10cの場合)](https://github.com/vaga/hugo-theme-m10c)から**クローン(複製)します**。

{{% img src="images/hugo-tutorial-3/hugo-tutorial-giturl.png" caption="clone or download押したら出てくるURLをはっつけ" %}}

```
git clone [ここにはっつける]
```
{{% img src="images/hugo-tutorial-3/hugo-tutorial-gitclone.png" caption="出来た人の図" %}}
(ここで```git```と言うコマンドツールの**インストール**が必要になります。

[Windowsはここで](https://qiita.com/toshi-click/items/dcf3dd48fdc74c91b409)

[Macはここで](https://tracpath.com/bootcamp/git-install-to-mac.html) 

[Linuxはここで](https://ctips.slackhack.net/git/811/)参照してインストールしましょう。)

実行したらthemesファイルに色々出来ます

{{% img src="images/hugo-tutorial-3/hugo-tutorial-gitcmp.png" caption="出来た人の図" %}}

## config.tomlごにょごにょ
ごにょごにょします。
./config.tomlをエディタとか何でも良いので開きます。

テーマに付属している物
このテーマには
{{% img src="images/hugo-tutorial-3/hugo-tutorial-themedoc.png" caption="レポジトリより"%}}
こんな事が書いてありました。
なので

```
baseURL = "https://hogehoge.com"
title = "すごいブログ"#タイトル
theme = "hugo-theme-m10c"#テーマの名前
#ページ数(よくわからん)
paginate = 5

[params]
  author = "イケメン"#名前
  description = "すごいブログです(語彙力)"#説明文
  [[params.social]]
    name = "github"#名前
    url = "https://github.com/mira-gfx"#URL
  [[params.social]]
    name = "twitter"
    url = "https://twitter.com/mira_gfx"
#色 #ブラウン
  [params.style]
    darkestColor = "#463625"
    darkColor = "#2a3738"
    primaryColor = "#eeee6a"
    lightColor = "#96a879"
    lightestColor = "#ffffff"

  # グリーンっぽい奴
  #[params.style]
  #  darkestColor = "#315659"
  #  darkColor = "#253031"
  #  primaryColor = "#dad865"
  #  lightColor = "#96a879"
  #  lightestColor = "#fff"

  # 赤とブラックっぽい奴
  #[params.style]
  #  darkestColor = "#d35050"
  #  darkColor = "#212121"
  #  primaryColor = "#ffffff"
  #  lightColor = "#a2a2a2"
#  lightestColor = "#d3d3d3"
```
とりあえずこんな感じにした。　

## とりあえず動かす。
最低限の状態で動かします。

```
hugo new post/[ファイル名].md
```
で記事が作成できます。

{{% img src="images/hugo-tutorial-3/hugo-tutorial-craft.png" caption="こんな感じ" %}}
{{% img src="images/hugo-tutorial-3/hugo-tutorial-postcraft.png" caption="こんな感じ" %}}
{{% img src="images/hugo-tutorial-3/hugo-tutorial-ikemen.png" caption="こんな感じ" %}}

で```title="イケメン"```とかに変えたり色々しましょう。さみしいので本文も。

(**Markdown記法で書きます**。詳しくは[こちら](https://ja.wikipedia.org/wiki/Markdown))

{{% img src="images/hugo-tutorial-3/hugo-tutorial-konnnakannzi.png" caption="CotEditor最高です！！！(Macしか無いけど)" %}}

じゃあ動かしてみましょう。
```
hugo server -D
```
でローカル内で動かせます。

{{% img src="images/hugo-tutorial-3/hugo-tutorial-cli.png" caption="出来た" %}}

通常は[localhost:1313](http://localhost:1313)で動いてます。ブラウザの画面に```http://localhost:1313```と打ち込みましょう。

(この画面だとこのブログ(saltandsugar.techのやつ)がlocalhost:1313で動いちゃっているのでlocalhost:53360で動いちゃってます。)

{{% img src="images/hugo-tutorial-3/hugo-tutorial-complate.png" caption="や　っ　た　ぜ"%}}


お疲れ様でした。**次はテーマのカスタムします。**

