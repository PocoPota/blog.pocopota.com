---
title: "Web の和欧混植で欧文の大きさ・位置・太さを合わせる"
date: 2026-11-22T12:02:00+09:00
description: "size-adjust や position、font-weight などで、欧文の大きさ・位置・太さを和文に合わせる方法を紹介します。"
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

たとえば相対配置（[`position: relative`](https://developer.mozilla.org/ja/docs/Web/CSS/position)）なら、次のように書きます。

```css
.latin {
  position: relative;
  top: -0.05em;
}
```

相対配置は、要素を元の位置から表示の上だけずらし、周りのレイアウトには影響しません。
インライン要素のまま動かせるので、行の折り返しも変わりません。

ただし、欧文が出てくるたびにマークアップを分ける必要があります。
同じ要素に `font-size` を指定すれば、`size-adjust` の代わりに大きさも調整できます。

なお、`@font-face` の [`ascent-override`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/ascent-override) と [`descent-override`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/descent-override) は、フォントのアセンダーとディセンダーの値を上書きする記述子です。
変わるのは行の高さの計算に使う値で、グリフを描く位置ではありません。
同じ要素の中の文字は、和文フォントでも欧文フォントでも、その要素の [`dominant-baseline`](https://developer.mozilla.org/ja/docs/Web/CSS/dominant-baseline) で決まる同じベースラインにそろえて並ぶので、これらの記述子で欧文だけを上げることはできません。

## 太さ

欧文は大きくした分だけ線も太く見えるので、和文と並べながら欧文のウェイトを調整します。

`@font-face` の [`font-weight`](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/font-weight) は、そのフォントをどのウェイトとして扱うかを宣言する記述子です。
ウェイトごとにファイルが分かれたフォントなら、宣言するウェイトに別のウェイトのファイルを割り当てます。

このとき、和文フォントの `@font-face` にも、使うウェイトを宣言しておきます。
宣言しないと、太字の部分の和文が別のフォントで表示されます。

```css
/* 和文フォント。欧文の @font-face が優先されるよう、欧文より先に書く */
@font-face {
  font-family: "Mix";
  src: url("/fonts/NotoSansJP-Regular.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Mix";
  src: url("/fonts/NotoSansJP-Bold.woff2") format("woff2");
  font-weight: 700;
}

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

<aside>

**太字の和文が別のフォントになる理由**

ブラウザは、`font-weight` を書かない `@font-face` を、ウェイト 400 のフォントとして扱います。
Outfit の `@font-face` を上のように書き、和文フォントの `@font-face` に `font-weight` を書かないと、ブラウザは欧文と和文を次の `@font-face` で表示します。

| 文字 | 通常（要素の `font-weight: 400`） | 太字（要素の `font-weight: 700`）         |
| ---- | --------------------------------- | ----------------------------------------- |
| 欧文 | Outfit Light                      | Outfit SemiBold                           |
| 和文 | Noto Sans JP                      | なし（`font-family` の次の `sans-serif`） |

ブラウザは、要素の `font-weight` に合う `@font-face` があれば、ウェイトの合わない `@font-face` を、その要素の文字に使う候補から外します。
太字の部分には 700 の Outfit SemiBold の `@font-face` があるので、ブラウザは 400 の Noto Sans JP の `@font-face` を太字の文字に使いません。
Outfit SemiBold には和文のグリフがないので、ブラウザは太字の和文を `font-family` の次に書いた `sans-serif` で表示します。

</aside>

## 参考文献

- [Webフォント実践ガイド](https://gihyo.jp/book/2025/978-4-297-15056-3)
- [ふつうのデザイナーのためのタイポグラフィが上手くなる本](https://www.shoeisha.co.jp/book/detail/9784798179094)
- [デザインの｢混植｣って何？ 知っているようで知らない｢混植｣の話と基本的な使い方を解説 ｜デザインを深掘り MdN](https://www.mdn.co.jp/design/BasicMethod/7314)
- [日本語の中でアルファベットを組む！ 和欧混植のポイント｜モリサワ　note編集部](https://note.morisawa.co.jp/n/na6e9f79316a8)
- [CSS Fonts Module Level 4｜W3C](https://drafts.csswg.org/css-fonts-4/)
