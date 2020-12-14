+++
draft = true
thumbnail = "images/I-often-use-GitCommand/thumbnail.png"
date = "2020-12-14T17:02:49+09:00"
lastmod = "2020-12-14T17:02:49+09:00"
title = "【随時更新】あたくせがよく使うGitのコマンド"
description = ""
toc = true
+++

どうも。[@masetaiyo](https://twitter.com/masetaiyo)です。ここには自分がよく使うのによく忘れるGitのコマンドをつらつらとメモります。検索で引っかかるように見出しの記述は冗長にします。検索からやってきた人は上に見出しリストがあるからそこから目的のものを探そう！(なかったらブラウザのページ内検索機能とかつかってもろて)

### 全てのファイル(未トラック/未追跡のファイル)をstash(退避)させる
```bash
#どちらでも可
$ git stash --include-untracked
$ git stash -u
```
作業中だけど別のブランチに切り替える必要が出てきたときに便利
## 参考
- [gitで未追跡（untracked)なファイルもまとめて退避(stash)する](https://qiita.com/muran001/items/f5746c518bf663f86a79)