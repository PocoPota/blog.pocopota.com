---
title: "Web の和欧混植で字間を整える"
date: 2026-11-22T12:03:00+09:00
description: "palt や text-spacing-trim、text-autospace などで、和文の詰めや和欧間のアキを整える方法を紹介します。"
series:
  id: web-font
  group: 和欧混植
  order: 4
---

和文と欧文では、字間の考え方が違います。
この記事では、和文の詰め、約物のアキ、ペアカーニング、トラッキング、和欧間のアキについて、考え方と CSS での指定方法を紹介します。

混植とは何かや和文と欧文の作りの違いは「[和欧混植の基本](/web-wao-konshoku/)」で紹介しています。

## 和文の詰め

文字詰めとは文字と文字の間隔を調整することです。
和文は仮想ボディ同士をすき間なく並べるベタ組みが基本ですが、かなや約物は字面が小さいものが多く、間が空いて見えます。

そこで、フォントに入っている1文字ごとの幅の情報を使って詰めます。
これをプロポーショナルメトリクスと呼び、主に和文で使います。

![ベタ組みと詰め組みの比較。枠は各文字が占める幅](/images/posts/web-wao-konshoku-spacing/beta.png)

CSS では、[`font-feature-settings`](https://developer.mozilla.org/ja/docs/Web/CSS/font-feature-settings) で OpenType の [`palt`](https://learn.microsoft.com/en-us/typography/opentype/spec/features_pt#tag-palt) フィーチャーを指定します。
`palt` は、全角の幅で作られた文字（かな、漢字、約物、全角英数字）を、1文字ずつの幅に詰めるフィーチャーです。

```css
body {
  font-feature-settings: "palt";
}
```

フォントに `palt` のデータが入っていなければ、指定しても詰まりません。

## 約物のアキ

約物は字面が半角ほどの幅で、前後のアキを含めて全角の幅で組むのが基本です。[^yakumono]
約物が続く所やキャプションのような狭い所では、このアキを詰めます。

CSS では、次の OpenType フィーチャーでアキを詰められます。

- [`halt`](https://learn.microsoft.com/en-us/typography/opentype/spec/features_fj#tag-halt): 約物を半角幅にする。`palt` とは同時に使わない
- [`chws`](https://learn.microsoft.com/en-us/typography/opentype/spec/features_ae#tag-chws): 約物が続く所のアキを詰める。`palt` とは同時に使わない

約物のアキを詰めるプロパティとして、[`text-spacing-trim`](https://developer.mozilla.org/ja/docs/Web/CSS/text-spacing-trim) もあります。
初期値の `normal` では、約物が続く所のアキを詰めます。
行頭の始め括弧を半角にする `trim-start` や、すべての約物を全角で組む `space-all` などの値もあります。

2026年10月時点で、`text-spacing-trim` に対応しているのは Chrome 123 以降などの Chromium 系のブラウザだけで、Firefox と Safari は対応していません。
また、フォントに `halt` か `chws` が入っていないと効きません。

## ペアカーニング

欧文でも「AV」「WA」のような組み合わせは間が空いて見えるため、組み合わせごとの詰めの量がフォントに設定されています。
これをペアカーニングと呼び、和文フォントにも入っているものがあります。[^ap-otf]

![Outfit でのペアカーニングなし・ありの比較](/images/posts/web-wao-konshoku-spacing/kern.png)

CSS では、[`font-kerning`](https://developer.mozilla.org/ja/docs/Web/CSS/font-kerning) でペアカーニングを使うかを指定します。
ペアカーニングの情報は OpenType の GPOS テーブルにある [`kern`](https://learn.microsoft.com/en-us/typography/opentype/spec/features_ko#tag-kern) フィーチャーに入っています。

初期値の `auto` では、カーニングを使うかどうかをブラウザが決めます。
必ず使いたいときは `normal` を指定します。

```css
body {
  font-kerning: normal;
}
```

`palt` で幅を詰めた和文にも、「アノ」のような組み合わせごとの詰めを持つフォントがあります。
モリサワの A P-OTF は、この詰めを `kern` に入れているので、`palt` と一緒に `font-kerning: normal` を指定すると使われます。

OpenType の仕様では、この詰めを `kern` ではなく [`apkn`](https://learn.microsoft.com/en-us/typography/opentype/spec/features_ae#tag-apkn) フィーチャーに入れることが勧められています。
`apkn` に対応したフォントはまだ少ないですが、使うときは `palt` と一緒に `font-feature-settings` で指定します。

```css
body {
  font-feature-settings: "palt", "apkn";
}
```

## トラッキング

選んだ範囲を一律に詰めたり広げたりする調整をトラッキングと呼びます。

<!-- p90-95, p145-147 -->

CSS では [`letter-spacing`](https://developer.mozilla.org/ja/docs/Web/CSS/letter-spacing) で、すべての文字の間隔を一律に変えます。
`@font-face` には書けないので、和文と欧文で別の値にしたいときは要素を分けます。

## 和欧間のアキ

和文は余白を持たせた字面を敷き並べて組むので、字間にゆとりがあります。
一方、欧文は文字を詰めて組むので、和文より字間が狭く感じられます。

この2つが隣り合うと境目が詰まって見えるので、和文と欧文の間にはアキを入れます。
[JLreq](https://www.w3.org/TR/jlreq/?lang=ja#handling_of_western_text_in_japanese_text_using_proportional_western_fonts) ではアキの量を四分（全角の4分の1）としています。

![和欧間のアキなし・四分アキの比較](/images/posts/web-wao-konshoku-spacing/aki.png)

<!-- ツメ・グリフ単位の上下位置 -->

CSS では、[`text-autospace`](https://developer.mozilla.org/ja/docs/Web/CSS/text-autospace) で和文と欧文・数字の間にアキを入れます。
Chrome 140、Firefox 145、Safari 18.4 で対応した新しいプロパティです。

```css
body {
  text-autospace: normal;
}
```

仕様では初期値が `normal` で、何も指定しなくてもアキが入ることになっています。
しかし Chrome・Firefox・Safari はどれも `no-autospace` を初期値として実装しているので、アキを入れるには明示的に指定します。
初期値をどうするかは [w3c/csswg-drafts#12386](https://github.com/w3c/csswg-drafts/issues/12386) で議論されています。

入るアキの量は仕様で全角の8分の1（`0.125ic`）と決まっていて、変えられません。
JLreq の四分（全角の4分の1）より狭い値です。

## CSS では実現できないこと

`palt` や `text-spacing-trim` は、フォントに入っている幅の情報を使って詰めます。
「：」「；」の位置を変えるといった、特定の文字だけの調整はできません。

見出しなどの目立つ部分では、括弧や句読点、拗促音を小さくするといった細かな調整をすることもあります。
これも CSS のプロパティにはないので、1文字ずつ要素で囲んで `font-size` を変える必要があります。

こうした調整を要素で囲まずに行うには、調整を済ませたフォントを用意することになります。

## 参考文献

- [Webフォント実践ガイド](https://gihyo.jp/book/2025/978-4-297-15056-3)
- [ふつうのデザイナーのためのタイポグラフィが上手くなる本](https://www.shoeisha.co.jp/book/detail/9784798179094)
- [日本語の中でアルファベットを組む！ 和欧混植のポイント｜モリサワ　note編集部](https://note.morisawa.co.jp/n/na6e9f79316a8)
- [オプティカル？メトリクス？Adobeソフトの文字詰め機能を解説！](https://note.morisawa.co.jp/n/nb96702245df1)
- [日本語組版処理の要件（JLreq）｜W3C](https://www.w3.org/TR/jlreq/?lang=ja)
- [レタースペーシング タイポグラフィにおける文字間調整の考え方](https://letter-spacing.mimiguri.co.jp/)
- [「約物」のアキと調整｜モリサワ note編集部](https://note.morisawa.co.jp/n/nff5591a07714)
- [CSS Text Module Level 4｜W3C](https://drafts.csswg.org/css-text-4/)
- [Registered features (OpenType 1.9.1)｜Microsoft Learn](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist)

[^yakumono]: [「約物」のアキと調整｜モリサワ note編集部](https://note.morisawa.co.jp/n/nff5591a07714)

[^ap-otf]: [自動の文字詰めがより便利に！「A P-OTF」フォント｜モリサワ公式note](https://note.morisawa.co.jp/n/n77f356ee2ec9)
