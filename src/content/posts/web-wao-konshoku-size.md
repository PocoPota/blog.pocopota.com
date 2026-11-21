---
title: "Web の和欧混植で欧文の大きさ・位置・太さを合わせる"
date: 2026-10-27T12:02:00+09:00
description: "size-adjust や font-weight、font-variation-settings などで、欧文の大きさ・位置・太さを和文に合わせる方法を紹介します。"
series:
  id: web-font
  group: 和欧混植
  order: 3
---

和文と欧文を同じ文字サイズで並べると、欧文が小さく見えます。
この記事では、欧文の大きさ・上下の位置・太さを和文に合わせる考え方と、CSS での調整方法を紹介します。

コードは「[Web で和文フォントと欧文フォントを組み合わせる](/web-wao-konshoku-fonts/)」で作った `Mix` ファミリーの `@font-face` をもとにしています。
混植とは何かや和文と欧文の作りの違いは「[和欧混植の基本](/web-wao-konshoku/)」で紹介しています。

## 大きさ

![欧文に Afacad を使い、同じ文字サイズのままの混植と、欧文を 115% に拡大した混植の比較](/images/posts/web-wao-konshoku-size/adjust.png)

欧文の大きさの印象は小文字の高さ（エックスハイト）でおおむね決まります。
和文の字面は欧文の大文字に近い高さなので、小文字の多い欧文は和文より小さく見えます。

![Afacad と Noto Sans JP を同じ文字サイズで並べ、漢字の字面の上端・キャップハイト・エックスハイト・ベースラインに線を引いた図](/images/posts/web-wao-konshoku-size/size.png)

ただし、大文字はカウンター（ふところ）が広いので、大きくしすぎると今度は大文字が目立ちます。
そのため、欧文は少しだけ大きくして釣り合いをとります。

ちなみに、和文フォントに入っている欧文（従属欧文）は、和文と組み合わせる前提で大きさや位置が調整されています。

CSS では、欧文フォントの `@font-face` に [`size-adjust`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/size-adjust) を書きます。
`size-adjust` は、グリフの大きさを倍率で変える記述子です。

```css
@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit.woff2") format("woff2");
  unicode-range: U+0021-007E;
  size-adjust: 110%;
}
```

要素の `font-size` を変えずに、欧文だけを大きくできます。

## 上下の位置

欧文の小文字は上側が空くので、ベースラインを和文の字面の下端にそろえると欧文が下がって見えます。
そこで、欧文のベースラインは字面の下端より少し高い位置に置きます。

CSS の `@font-face` では欧文の上下の位置を変えられないので、欧文を要素で囲み、その要素を動かします。

```html
<p>公式<span class="latin">Web</span>サイト</p>
```

動かし方は、実装に合わせて次の2つから選べます。

```css
/* transform で動かす */
.latin {
  display: inline-block;
  transform: translateY(-0.05em);
}

/* 相対配置で動かす */
.latin {
  position: relative;
  top: -0.05em;
}
```

`transform` はインライン要素には効かないので、`display: inline-block` と組み合わせます。
`inline-block` にした要素の中では改行されないので、長い欧文を囲むと行の折り返しが不自然になります。
相対配置なら、インライン要素のまま動かせます。

どちらの方法でも、欧文が出てくるたびにマークアップを分ける必要があります。
同じ要素に `font-size` を指定すれば、`size-adjust` の代わりに大きさも調整できます。

`@font-face` には [`ascent-override`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/ascent-override) と `descent-override` という、フォントのアセンダーとディセンダーの値を上書きする記述子もあります。
しかし、変わるのは行の高さの計算に使う値で、グリフを描く位置ではありません。
同じ行のグリフはどのフォントのものでも共通のベースラインに並ぶので、これらの記述子では欧文のベースラインだけを上げることはできません。

## 太さ

欧文は大きくした分だけ線も太く見えるので、和文と並べながら欧文のウェイトを調整します。

`@font-face` の `font-weight` は、そのフォントをどのウェイトとして扱うかを宣言する記述子です。
ウェイトごとにファイルが分かれたフォントなら、宣言するウェイトに別のウェイトのファイルを割り当てます。

```css
/* 本文（400）の欧文には Outfit の Light を使う */
@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit-Light.woff2") format("woff2");
  font-weight: 400;
  unicode-range: U+0021-007E;
}

/* 太字（700）の欧文には Outfit の SemiBold を使う */
@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit-SemiBold.woff2") format("woff2");
  font-weight: 700;
  unicode-range: U+0021-007E;
}
```

和文フォントの `@font-face` にも、同じウェイトを宣言しておきます。
ブラウザはまずウェイトで `@font-face` を絞り込むので、ウェイトが合わない和文フォントは組み合わせに入らず、和文が別のフォントで表示されてしまいます。

バリアブルフォントは1つのファイルにすべてのウェイトが入っていて、要素の `font-weight` の値がそのままウェイト軸（`wght`）の値になります。
そのため、ファイルを割り当て直す方法は使えません。

代わりに、`@font-face` の [`font-variation-settings`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/font-variation-settings) 記述子で `wght` の値を指定します。
この記述子は `font-weight` より優先されるので、宣言したウェイトとは違う太さで表示できます。

```css
@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit[wght].woff2") format("woff2");
  font-weight: 400;
  font-variation-settings: "wght" 350;
  unicode-range: U+0021-007E;
}

@font-face {
  font-family: "Mix";
  src: url("/fonts/Outfit[wght].woff2") format("woff2");
  font-weight: 700;
  font-variation-settings: "wght" 650;
  unicode-range: U+0021-007E;
}
```

記述子で `wght` の値を固定するので、使うウェイトごとに `@font-face` を書きます。
この記述子に対応しているのは Chrome 140 以降と Firefox 62 以降で、2026年10月時点で Safari は対応していません。
Safari では、欧文が `font-weight` どおりの太さ（この例では 400 と 700）で表示されます。
