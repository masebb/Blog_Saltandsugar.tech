+++
date = "2019-03-09T17:00:00+09:00"
title = "Hugoとは?AWSとは？"
thumbnail = "images/Hugo-Tutorial-Thumbnail.png"
toc = true 
categories = [ "hugo" ]
tags = [ "hugo", "PC", "ブログ"]
series = ["Hugo-Tutorial"]
description = "Hugoでブログを建てる方法シリーズ"
+++

## HugoとAWSでブログを構築するチュートリアル
{{% img src="images/hugo-logo-wide.svg" w="700" h="500" caption="gohugo.ioより." href="https://gohugo.io" %}}

このシリーズで**Hugo**と**AWS**でブログをはじめる方法を解説します。はい。
## Hugoとは
[公式によると](https://gohugo.io)
{{% inyou site="https://gohugo.io" writer="Gohugo.io" %}}
The world’s fastest framework for building websites

Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.
{{% /inyou %}}
(訳)
すげー早くWebサイトを構築できるぜ！<br>
Hugoは最も人気のあるオープンソースの静的サイトジェネレータの1つやで。
もうWebが構築するのが楽しくなっちゃうぜ！！

まあ要約すると爆速ってことです。
静的サイトジェネレータって色々ありますけど、多分Hugoが一番早い(らしい)

[比較](http://tamura.goga.co.jp/article/429818193.html)によるとHugoが一番爆速っぽいですね

ちなみにこのサイトもHugoで構築されています。(詳しくは[ここを参照](https://www.saltandsugar.tech/about/what/#%E3%81%93%E3%81%AE%E3%83%96%E3%83%AD%E3%82%B0%E3%81%AF%E3%81%A9%E3%81%86%E3%82%84%E3%81%A3%E3%81%A6%E5%8B%95%E3%81%84%E3%81%A6%E3%82%8B%E3%81%AE))

### 良い所
**・サーバが要らない**。
Hugoにはサーバが要りません(Htmlを吐き出す)なので環境がシンプルになります。

あと、ここが静的ジェネレータの強みなんですが、ログイン画面などが全くありませんので、ハッキングされてサイトが壊れたり、踏み台などにされることがありません。
これ何気に便利



**・ロマンがある**

### 悪い所
**・GUIで操作出来ない**
操作は全てCUIです。

WordPressとかだとWeb上で操作出来たりますがHugoだと全てCUIでの操作になります
{{% img src="images/screen-themes.png" w="500" h="300" caption="WordPressを操作する人の図." %}}
{{% img src="images/hugo-Tutorial-cui.png" w="450" h="300" caption="Hugoを操作する人の図." %}}

**・基本的にテーマをいじらなければいけない**
Hugoはプラグインと言う概念がないのでいじりましょう。私は結構いじってます(Robustを)
この為、HtmlとかCssのちょっとした知識が必要です。頑張りましょう。

ハイ次

## AWSとは
{{% img src="images/aws_logo_smile_1200x630.png" w="700" h="440" caption="AWS公式より" %}}
{{% inyou site="https://ja.wikipedia.org/wiki/Amazon_Web_Services" writer="Wikipedia" %}}
Amazon Web Services（アマゾン ウェブ サービス、AWS）とは、Amazon.comにより提供されているクラウドコンピューティングサービス（ウェブサービス）である。クラウドのタイプとしてはIaaSに分類される。これらのサービスは全世界で18の地域に提供されている（2018年現在）。AWSの有名なサービスにAmazon Elastic Compute Cloud (EC2) とAmazon Simple Storage Service (S3) がある。各組織が独自に保有し、仕様変更には長時間の物理的な作業を必要とするサーバファームと比較して、AWSは需要に応じた計算能力を、設定変更のみで速やかに提供出来ることが強みである。クラウドの分野でのAWSの世界的シェアは33％前後で世界1位である[1]。世界的シェア13%前後で世界2位のMicrosoft Azureを大きく引き離している。 
{{% /inyou %}}

要約すると凄いやつです。

### 何が凄いの？
**・使った分だけのお支払い！**
従来課金制ってやつですね。
これ何気凄くて今までのサーバ、ストレージの月払いの概念をぶっ壊したのです。
構築中は最低の料金。アクセス数やファイル数が増えていくとそれに応じてスペックアップ、料金アップとなるので無駄がない。
これが最高。

**・圧倒的信頼**
セキュリティも最高ですし16年以上Amazonを運営してきて大きなトラブルがないという実績がある(らしい)。

このAWSには上記の通り色々なサービスがあるのですが、今回のブログ構築では **S3**、**Route53**、**CloudFront**
を使っていきます。
用途は

・S3 --> htmlや画像ファイルの保存

・Route53 --> ドメインのDNS

・CloudFront --> 外部への公開、サイトの独自ドメイン化　SSL化など

として使っていきます。

## 補足
Html= 正式名称は**HyperText Markup Language** Webサイトを構築する為に出来た(プログラミング)言語

静的= HTMLファイルがベース。ブログの更新などは全てローカル(PC内)に作ったものからHTMLファイルが吐き出される。

動的= ファイルの種類はサイトによって様々。Htmlファイルがベースのタイプが多い(のか？)ブログの更新などは全てサーバ上で行う。

CUI= 正式名称は**Character User Interface** 文字のやつ
{{% img src="images/hugo-Tutorial-cui.png" w="450" h="300" caption="Hugoを操作する人の図." %}}

GUI= 正式名称は**Graphical User Interface**MacとはWindows(語彙力)


## まとめ
環境をシンプルにしたい。ロマンを求める方はぜひHugo沼へ


シリーズとしてちょくちょく更新するので、ぜひ！

お　わ　り

#### 参考にしたもの
https://gohugo.io -The world’s fastest framework for building websites
http://tamura.goga.co.jp/article/429818193.html-
静的サイトジェネレータの生成時間比較
https://www.sejuku.net/blog/10281　-
AWSとは？Amazon Web Servicesの概要を基礎からわかりやすく解説

