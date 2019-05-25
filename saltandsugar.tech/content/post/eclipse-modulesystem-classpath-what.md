+++
draft = true
thumbnail = "images/eclipse-modulesystem-classpath-what/thumbnail.png"
toc = true
tags = ["eclipse", "Java"]
categories = ["Java"]
date = "2019-05-11T22:03:11+09:00"
title = "eclipseのモジュールパスとクラスパスってなんだコレ。案の定エラー"
description = "Eclipseでjarを突っ込もうとしたら事件は起きた。今まではなかったモジュールパスとクラスパスの表示が！？？！！？？なんだこれ状態。一体何なんだよこれを解説する所。それがここ。"
+++

# eclipseのモジュールパスとクラスパスってなんなん

{{% img src="images/eclipse-modulesystem-classpath-what/namaemendoi.png" caption="な　ん　だ　こ　れ" %}}

なんだこれ。
で案の定モジュールパスに突っ込んだらエラー出た。
[@mira_tech](twitter.com/mira_gfx)です。

MacクリーンインストールしてEclipse再インストールする時に今まで[Oxygen使ってたのをEclipse 2019-03に変えたんです。]([Eclipse 日本語化 | MergeDoc Project]http://mergedoc.osdn.jp/)そして[Jsoup](https://jsoup.org)を使おうとしたその時事件は起きました。

**なんか増えてる🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔**

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">殺伐としたTLにお好み焼きが！！！！！<br>🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣🍣 <a href="https://t.co/9CpVAgIGju">pic.twitter.com/9CpVAgIGju</a></p>&mdash; 🍣🍣🍣mira_sushi🍣🍣🍣 (@mira_gfx) <a href="https://twitter.com/mira_gfx/status/1127144118126145536?ref_src=twsrc%5Etfw">May 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 結論
多分これを求めている人がほとんど。
**クラスバスに入れれば動く。**
以上です。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">悲報:五月病で現場猫も仕事を放棄 <a href="https://t.co/9tvWvm0SFA">pic.twitter.com/9tvWvm0SFA</a></p>&mdash; はち (@9NZ7hagej) <a href="https://twitter.com/9NZ7hagej/status/1125611961524187142?ref_src=twsrc%5Etfw">May 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

ヨシ！！！！！！！！

## なにこれ！？！？！？！？！？？！
### Module System…?(未確定)
{{% img src="images/eclipse-modulesystem-classpath-what/google.png" caption="うーん？" %}}

(モジュールシステム？？　**モジュールパスはどこ行った？？？**　よくわからん。モジュールシステムでいいのか？　教えてください)

~~Java SE 9 からの機能っぽい。(なんだかんだJava SE 9触るの初めて。)~~

~~なんかよくわからんけど~~
~~・Publicなクラスはどっからでも呼び出せちゃうから変なjarファイルが居る(importされている)と気付かず、コンパイルも通っちゃう(エラーが起きない)から気付かないでそのままエラーが起きて(実行中に)初めて気付く。~~

~~・あるjarファイルがまたとあるjarファイルを参照(import)していて、もしjarファイルが足りなくてもエラーが出ずそのまま通っちゃって(以下略)~~

~~Javaのポリシー的には**コンパイルする時にチェックされるべき**らしいので、これはJava(Oracle?)が『イケテナイ』と思って追加された機能がこれ。~~

嘘っぽいからとりあえず取り消し線 

参考元:[java 9のmodule機能を試してみる - Qiita](https://qiita.com/nmatsui/items/73ad642838631bcdc92e) 
(サンプルコードもあってわかりやすぅい！！) 

## classpath(クラスバス)
ググったらいっぱい出てきました。みんな知ってるかも？
けど僕は知りません。初心者だもの。

と思ったけどそのまんまでした。
今までと同じ通りにjarファイルを追加してる時にclasspathは指定されています。

つまりjarファイルの位置ってことですね多分。

参考元:[【Java入門】classpathを指定して実行する方法(確認の方法も解説) | 侍エンジニア塾ブログ（Samurai Blog） - プログラミング入門者向けサイト](https://www.sejuku.net/blog/62990)

~~(侍エンジニアブログのURL貼ると叩かれそう)~~


## THE END
僕もよくわからないけど
ﾁｮｯﾄﾃﾞｷﾙ。


モジュールシステムってどうなんだ？モジュールパス？？と何か関係でも？
全然ググっても出てこん()
🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔 