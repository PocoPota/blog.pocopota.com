---
title: "Web で和文フォントと欧文フォントを組み合わせる"
date: 2026-10-27T12:01:00+09:00
description: "font-family と @font-face、unicode-range で、和文フォントと欧文フォントを組み合わせる方法を紹介します。"
series:
  id: web-font
  group: 和欧混植
  order: 2
---

CSS で和欧混植をする最初の段階として、和文フォントと欧文フォントを組み合わせる方法を紹介します。
混植とは何かや和文と欧文の作りの違いは「[和欧混植の基本](/web-wao-konshoku/)」で紹介しています。

## font-family で並べる

CSS で混植をするいちばん簡単な方法は、`font-family` に欧文フォント、和文フォントの順で並べることです。

```css
body {
  font-family: "Outfit", "Noto Sans JP", sans-serif;
}
```

ブラウザは文字ごとに、そのグリフを持つフォントをリストの先頭から探します。
Outfit には日本語のグリフがないので、日本語は次の Noto Sans JP にフォールバックして表示されます。

ただし、この方法では欧文フォントにある文字はすべて欧文フォントで表示されます。
欧文フォントが持っている引用符や記号も、和文の中で欧文フォントのグリフになります。

## unicode-range で範囲を決める

どの文字をどちらのフォントで表示するかを決めたいときは、[`@font-face`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face) で1つのフォントファミリーを定義し、欧文フォントの範囲を [`unicode-range`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/unicode-range) で指定します。

```css
@font-face {
  font-family: "Mix";
  src: url("/fonts/NotoSansJP.woff2") format("woff2");
}

@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit.woff2") format("woff2");
  unicode-range: U+0021-007E; /* 基本ラテン文字（スペースを除く ASCII の印字可能文字） */
}

body {
  font-family: "Mix", sans-serif;
}
```

同じファミリーの中で範囲が重なる場合は、あとに定義した `@font-face` が優先されます。
この例では、ASCII の範囲は Outfit で、それ以外は Noto Sans JP で表示されます。

<aside>

**コラム　スペースを範囲から外す理由**

上の例では、Outfit の範囲を U+0020（スペース）ではなく U+0021 から始めています。

CSS では、`font-family` のうち、`unicode-range` で U+0020 を除外していない最初のフォントを [first available font](https://drafts.csswg.org/css-fonts-4/#first-available-font) と呼びます。
このフォントは、`line-height` の計算や `ex`・`ch` などの単位、行の中のベースラインの位置の基準に使われます。

Outfit の範囲を `U+0020-007E` にすると、スペースを表示するのは Outfit になり、Outfit が first available font になります。
日本語が中心の文章でも、行の高さや縦の位置が Outfit の値で決まってしまいます。

一方、スペースを外すと、欧文の単語の間のスペースは Noto Sans JP のスペースになります。
Outfit と幅が違えば語間の見え方は少し変わりますが、行の基準を Noto Sans JP にしておくほうを優先しています。

</aside>

## Google Fonts を使う場合

Google Fonts の CSS を読み込むと、`@font-face` は Google Fonts 側で定義されます。
自分で書いた記述子は足せないので、「[Web の和欧混植で欧文の大きさ・位置・太さを合わせる](/web-wao-konshoku-size/)」で紹介する `size-adjust` などの調整はできません。

調整したいフォントは、ファイルを自分で配信して `@font-face` を書きます。
欧文フォントだけを自分で配信し、`font-family` で Google Fonts の和文フォントと並べることもできます。

```css
@font-face {
  font-family: "Outfit Adjusted";
  src: url("/fonts/Outfit.woff2") format("woff2");
  unicode-range: U+0021-007E;
  size-adjust: 110%;
}

body {
  font-family: "Outfit Adjusted", "Noto Sans JP", sans-serif;
}
```

和文フォントも自分で配信する場合は、ファイルが大きいので、サブセット化や `unicode-range` での分割も自分で行う必要があります。
