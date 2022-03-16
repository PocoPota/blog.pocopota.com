+++
title = "【はてなカスタマイズ】スクロールしてもサイドバーの要素を動かさない方法"
draft = false
date = "2021-02-09T19:14:30+09:00"
tags = ["はてなブログカスタマイズ","css","ブログ運営","プログラミング"]
thumbnail = "/images/content/20210209191409.png"
+++


<div class="section">
    <h2>サイドバーの固定</h2>
    <p>サイドバーの固定とはブログを読みすすめてスクロールしていくと、パソコンの場合、サイドバーの最後の要素がずっと固定されたままになっていることです。これは当ブログでも行っています。(今は変わっています)<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210209180114.png" alt="f:id:pocopota:20210209180114p:plain" title="" class="hatena-fotolife" itemprop="image"></span><br />
こんな感じですね。ずっとスクロールしても最後の要素だけは、ずっと固定されています。この画像の場合は「人気記事」が固定されていますね。<br />
今回はコレを行う方法を解説していきます。</p>

</div>
<div class="section">
    <h2>固定方法</h2>
    
<div class="section">
    <h3>固定する要素の設置</h3>
    <p>まずは固定するものがなければ始まりません。デザインの設定からサイドバーに要素を追加しておいてください。一番最後のものが固定されますので、固定したいものは一番最後に持ってきておいてください。<br />
最新記事や人気記事などを固定するとそこからユーザーがその記事を見てくれるかもしれません。</p>

</div>
<div class="section">
    <h3>コード</h3>

```css
#box2 {
  display: flex;
}
.hatena-module:last-of-type {
  position: -webkit-sticky;/*safari対応*/
  position: sticky;
  top: 10px;/*上からの距離を調整*/
}
```

<p>このコードをデザインCSSに貼り付けてください。<br />
それだけです。</p><p>もしかすると、はてなブログのテーマによっては製作者様の作成の方法により上記の方法が効かない場合があります。その場合は下のコードをデザインCSSに貼り付けてみてください。</p>

```css
/* サイドバー最後の要素固定表示 */
#content-inner {
  display: flex;
  justify-content:space-between;
}
#box2 {
  display: flex;
}
.hatena-module:last-of-type {
  position: -webkit-sticky;/*safari対応*/
  position: sticky;
  top: 10px;/*上からの距離を調整*/
}
```

<p>これでほとんどのテーマで適用ができると思います。もし効かなかった場合は教えて下さい！調べてみたいと思います。</p>

</div>
<div class="section">
    <h3>調整</h3>
    <p>「上からの距離を調整」の部分で画面の上からの距離を調整できます。数値を変えてみてください。</p>

</div>
</div>
<div class="section">
    <h2>完成</h2>
    <p>コレで完成となります。これを行うことでブログの回遊率が上がったり、アフィリエイトをしている人はタップ率が上がるかもしれません。<br />
是非いいブログライフを！</p>

</div>