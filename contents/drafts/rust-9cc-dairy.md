---
slug: rust-9cc-dairy
date: 2020-04-22T00:00:23.467Z
title: rust-9cc-dairy
tags:
  - rust
  - compiler
cover:
---

### 2020/05/01

息抜きにコンパイラを書くことにした。

題材はrui ueyamaさんの9cc。個人的な好みでRustで実装することとする。

PascalのサブセットのコンパイラをLLVMベースで実装したことはある(言語はC)が、ちゃんとネイティブを吐くコンパイラを作ったことがなかったのでちょうどいい機会だと思う。

今日はあまり時間がなかったので適当にcargo-makeで実行するタスクを整えたりdockerで開発など出来る環境を整えた。