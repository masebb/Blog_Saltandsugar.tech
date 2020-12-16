+++
draft = true
thumbnail = "images/Java-ZeroPadding/thumbnail.png"
tags = []
date = "2020-12-15T22:26:24+09:00"
lastmod = "2020-12-15T22:26:24+09:00"
title = "Javaで日付に「0埋め」"
description = ""
toc = false
+++

どうも。[@masetaiyo](https://twitter.com/masetaiyo)です。JavaのLocalDateTimeを使って日付を生成して「月」を取得するために`getMonth.getValue()`をすると0埋めされてない状態で帰ってきます。いろいろ不都合があったのでググったらとてもスマートな(`length()`とかを使ってif文を組む必要がない)0埋めの方法を見つけたので書いていきます

## LocalDateTimeでの0埋め
下のサンプルコードは日付のうちの「月」をゼロ埋めします
```java
LocalDateTime localDateTime;

//2020年10月1日0時0分0秒を指定(ゼロ埋めの必要なし)
localDateTime = LocalDateTime.of(2020,10,1,0,0,0);

System.out.println("ゼロ埋めなし: "+localDateTime.getYear()+"/"+localDateTime.getMonth().getValue()+"/"+localDateTime.getDayOfMonth());
//result: ゼロ埋めなし: 2020/10/1
System.out.println("ゼロ埋めあり: "+localDateTime.getYear()+"/"+String.format("%02d", localDateTime.getMonth().getValue())+"/"+localDateTime.getDayOfMonth());
//result: ゼロ埋めあり: 2020/10/1

//2020年10月1日0時0分0秒を指定(ゼロ埋めの必要あり)
localDateTime = LocalDateTime.of(2020,1,1,0,0,0);

System.out.println("ゼロ埋めなし: "+localDateTime.getYear()+"/"+localDateTime.getMonth().getValue()+"/"+localDateTime.getDayOfMonth());
//result: ゼロ埋めなし: 2020/1/1
System.out.println("ゼロ埋めあり: "+localDateTime.getYear()+"/"+String.format("%02d", localDateTime.getMonth().getValue())+"/"+localDateTime.getDayOfMonth());
//result: ゼロ埋めあり: 2020/01/1

```
いい感じに2桁の場合は0は埋めずに、1桁になった時に0を埋めてくれました

0埋めする桁数を上げたい場合は`2`の値をもっと上げればいい
```java
System.out.println("ゼロ埋めあり: "+localDateTime.getYear()+"/"+String.format("%06d", localDateTime.getMonth().getValue())+"/"+localDateTime.getDayOfMonth());
//result: ゼロ埋めあり: 2020/000001/1
```

### 解説
`%02d`ってなんやねんという~~私~~あなたのために解説を用意しました！

まず`%`で書式の指定を開始しますよという合図。で、%dで十進数(要はわれわれがいつも使っている例の数字)に変換、その前に`02`がついている。`2`で最小フィールド幅を決定して`0`で最小フィールド幅以上のものがきた時に0で埋めてね(指定しないと半角スペースで埋められる)ということを指定している。

## 参考
[Java：ゼロ埋め、半角スペース埋めする方法](http://write-remember.com/program/java/format/)

[Java書式付き出力](https://www.ne.jp/asahi/hishidama/home/tech/java/formatter.html) : めちゃくちゃ詳しく書いてある