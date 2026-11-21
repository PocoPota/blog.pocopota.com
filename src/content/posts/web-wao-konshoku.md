---
title: "和欧混植の基本"
date: 2026-10-27T12:00:00+09:00
description: "混植とは何か、和文フォントと欧文フォントの作りの違いを紹介します。"
series:
  id: web-font
  group: 和欧混植
  order: 1
---

日本語の文章に欧文フォントを組み合わせると、そのままでは欧文が小さく見えたり、和文との境目が詰まって見えたりします。
この記事では、Web で和欧混植をする前に知っておきたい基本を紹介します。

## 混植とは

フォントにおける混植とは、複数の異なるフォントを組み合わせて使うことです。

日本語の文字組みでは、和文フォントをベースに、アルファベットは別の欧文フォントを使うことが多々あります。これを和欧混植と呼びます。

和欧混植の記事では、和文フォントに Noto Sans JP、欧文フォントに Outfit を使った例で説明します。

![Noto Sans JP と Outfit のサンプル](/images/posts/web-wao-konshoku/fonts.png)

Adobe 製品では、「合成フォント」という機能で混植を設定できます。[^hiragino]

## 和文と欧文の作りの違い

和文フォントは仮想ボディと呼ばれる正方形の枠を基準に作られています。
漢字やかなはこの枠に収まるように作られ、どの文字も同じ全角の幅を持ちます。

一方、欧文フォントはベースラインを基準に作られています。
文字ごとに幅が異なり（プロポーショナル）、大文字と小文字で高さもまちまちです。

![和文は同じ大きさの仮想ボディを並べ、欧文は文字ごとの幅でベースラインにそろえることを示した図](/images/posts/web-wao-konshoku/structure.png)

この作りの違いが、[欧文の大きさや上下位置](/web-wao-konshoku-size/)、[詰め方や和欧間のアキ](/web-wao-konshoku-spacing/)など、和欧混植で気をつける点のもとになります。

## 参考文献

- [Webフォント実践ガイド](https://gihyo.jp/book/2025/978-4-297-15056-3)
- [ふつうのデザイナーのためのタイポグラフィが上手くなる本](https://www.shoeisha.co.jp/book/detail/9784798179094)
- [デザインの｢混植｣って何？ 知っているようで知らない｢混植｣の話と基本的な使い方を解説 ｜デザインを深掘り MdN](https://www.mdn.co.jp/design/BasicMethod/7314)
- [日本語の中でアルファベットを組む！ 和欧混植のポイント｜モリサワ　note編集部](https://note.morisawa.co.jp/n/na6e9f79316a8)
- [オプティカル？メトリクス？Adobeソフトの文字詰め機能を解説！](https://note.morisawa.co.jp/n/nb96702245df1)
- [日本語組版処理の要件（JLreq）｜W3C](https://www.w3.org/TR/jlreq/?lang=ja)
- [レタースペーシング タイポグラフィにおける文字間調整の考え方](https://letter-spacing.mimiguri.co.jp/)
- [「約物」のアキと調整｜モリサワ note編集部](https://note.morisawa.co.jp/n/nff5591a07714)

[^hiragino]: [【和欧混植徹底解説！後編】「合成フォント」設定で違和感なく和文と欧文を組み合わせる方法と設定サンプル集｜ヒラギノフォント公式note](https://note.screen-hiragino.jp/n/nd6b6a95a1842)
