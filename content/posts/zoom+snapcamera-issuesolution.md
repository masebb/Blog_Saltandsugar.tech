+++
draft = true
thumbnail = "images/zoom+snapcamera-issuesolution/thumbnail.png"
tags = ["zoom","リモートワーク","snap camera"]
date = "2020-04-29T16:18:03+09:00"
lastmod = "2020-04-29T16:18:03+09:00"
title = "Mac版ZoomがSnap Camera(などの仮想カメラ/バーチャルカメラ/キャプチャーデバイス)を認識してくれないのを無理して解決する"
description = ""
toc = false
+++
こんにちは、[@mira_tech](https://twitter.com/mira_tech)です。

今話題のSnapCamera+Zoomをしようとしたら全然認識しない(今までしてたのに)からどうしたもんだと思い調べてみたら、**Mac版Zoom側のアップデートをきっかけに使えなく**なったみたいです。
## 環境
- macOSCatalina: 10.15.3
- Zoom: 4.6.10 (20041.0408)

(今後のバージョンアップで下記の解決方法が動作しなくなくなる可能性もありますし、解決する場合もあります。)
## なんでやねん
[調べたところ](https://www.reddit.com/r/VIDEOENGINEERING/comments/fy7xi3/fyi_zoom_v4610_breaks_blackmagic_capture_devices/)によると「Zoom側もしくはApple側の[脆弱性](https://www.csoonline.com/article/3535789/weakness-in-zoom-for-macos-allows-local-attackers-to-hijack-camera-and-microphone.html)の修正によって仮想カメラ入力アプリケーション(SnapCamera,CamTwist,OBS-VirtualCam,などなど)をZoomが利用できなくなった」らしいです(脆弱性などの詳細については省きます。)

{{% adsense %}}
## 解決方法 (** 非 公 式 **) 
**ここから提示する解決方法は非公式かつ修正された脆弱性を復活させる恐れがある(不明)とても危ない行為です。くれぐれも自己責任で実行してください(特に会社のPCとかでは絶対やるな！！！)**
1. ターミナルを開きます。

{{< img src="images/zoom+snapcamera-issuesolution/open-terminal.png" >}}

2. 以下に提示するコマンドをターミナル上で実行します(実行の仕方などについては省きます。)
```bash
# Command Line Toolsをインストール
$ xcode-select --install
# (Zoomを終了した状態で実行してください)Zoomにあるデジタル署名を削除
$ codesign --remove-signature /Applications/zoom.us.app/
```
{{< img src="images/zoom+snapcamera-issuesolution/terminal-result.png" caption="初期のターミナルとは全然違うけど基本は同じ(見た目をおしゃれにしてるだけ)" >}}

すると...!

{{< img src="images/zoom+snapcamera-issuesolution/complete.png" caption="\ｺﾝﾆﾁﾊ/" >}}

## 参考、参照
- 「FYI Zoom v4.6.10 breaks Blackmagic capture devices as a source」 https://www.reddit.com/r/VIDEOENGINEERING/comments/fy7xi3/fyi_zoom_v4610_breaks_blackmagic_capture_devices/
    - この問題についての情報が満載です。もし上記の解決方法で解決しない場合は見てみるといいかも
- 「Weakness in Zoom for macOS allows local attackers to hijack camera and microphone」 https://www.csoonline.com/article/3535789/weakness-in-zoom-for-macos-allows-local-attackers-to-hijack-camera-and-microphone.html

