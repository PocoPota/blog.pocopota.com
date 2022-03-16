+++
title = "particles.jsで背景アニメーションを　雪、幾何学模様、泡【JSライブラリシリーズ1】"
draft = false
date = "2021-07-24T22:27:20+09:00"
tags = ["JSライブラリシリーズ","javascript","html","css","プログラミング"]
thumbnail = "/images/content/20210724222310.png"
+++

<p>今回はparticles.jsというJavaScriptライブラリの紹介をしていきたいと思います。</p><p>このようなJavaScriptライブラリを紹介するシリーズを数回やっていこうと思うので気になる人は待っておいてください！</p><p>今回のparticles.jsはページの背景に雪を降らせたり、幾何学模様を動かしたりとアニメーションをつけることができるライブラリです。</p>
<p>particles.jsは使い方がものすごく簡単です。公式サイトのジェネレーターを使うことでコードはあまり書かなくて済みます。<br />
ではやっていきましょう。<br />
公式サイト：<a href="https://vincentgarreau.com/particles.js/">https://vincentgarreau.com/particles.js/</a><br />
</p>

<div class="section">
    <h2 id="事前準備">事前準備</h2>
    <p>まずはparticles.jsに必要なファイルをダウンロードします。<br />
<a href="https://vincentgarreau.com/particles.js/">&#x516C;&#x5F0F;&#x30B5;&#x30A4;&#x30C8;</a>にアクセスしてダウンロードボタンを押すとダウンロードが始まります。<br />
ダウンロードしたファイルを展開します。必要なファイルは「particles.js」か「particles.min.js」のどちらかのファイルです。どっちでも良いです。<br />
今回はparticles.min.jsの方を使おうと思います。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210724185550.png" alt="f:id:pocopota:20210724185550p:plain" width="610" height="195" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
今回のファイル構成はこんな感じ↓です。jsフォルダのなかに取り出したファイルを入れておいてください。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210724185854.png" alt="f:id:pocopota:20210724185854p:plain" width="156" height="157" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p>

</div>
<div class="section">
    <h2 id="背景をカスタマイズ">背景をカスタマイズ</h2>
    <p>準備が出来たら<a href="https://vincentgarreau.com/particles.js/">&#x516C;&#x5F0F;&#x30B5;&#x30A4;&#x30C8;</a>でカスタマイズしていきます。<br />
サイトの右上に様々なカスタマイズ項目があると思うので好きなように弄ってください。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210724203650.png" alt="f:id:pocopota:20210724203650p:plain" width="347" height="899" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
表示する要素の色、サイズ、量、動き方、クリックしたときの動作など沢山の項目があります。<br />
（これで遊ぶだけでも楽しい）<br />
カスタマイズが終わったら右上のCodePenを押しましょう。</p>

</div>
<div class="section">
    <h2 id="実装">実装</h2>
    <p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210724194737.png" alt="f:id:pocopota:20210724194737p:plain" width="1200" height="266" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
CodePenを押すと上のような画面になると思うのでcssをstyle.cssに、JSをscript.jsに貼り付けてください。<br />
htmlはid="particles-js"の付いた要素、divやsection、bodyなどを設置してください。</p><p>そうしたらhtmlファイルのbodyの最後にparticles.min.js、script.jsの順に読み込みます。</p><p>そうして出来たhtmlがこちら（cssとjsはコピペだからここには書かない）<br />
必要最小限しか書いてません。</p>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="css/style.css">
  <title>幾何学的</title>
</head>


<body>
<div id="particles-js"></div>
<script src="js/particles.min.js"></script>
<script src="js/script.js"></script>
</body>


</html>
```

<p>これで完成です。</p>

</div>
<div class="section">
    <h2 id="作例">作例</h2>
    <p>particles.jsを使って作ったアニメーションを少しだけ紹介したいと思います。<br />
なぜか埋め込むと動きが変になってしまうのでリンクから正常なものを見るときちんと表示されます。</p>

<div class="section">
    <h3 id="幾何学的">幾何学的</h3>
    <p>クリックすると要素が増えます<br />
<iframe src="https://pocopota.github.io/geometric/" width="100%" height="500px"></iframe><br />
リンク：<a href="https://pocopota.github.io/geometric/">https://pocopota.github.io/geometric/</a><br />
<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9">ソースコード</a>：<a href="https://github.com/PocoPota/geometric">https://github.com/PocoPota/geometric</a><br />
</p>

</div>
<div class="section">
    <h3 id="蜂の巣">蜂の巣</h3>
    <p><iframe src="https://pocopota.github.io/hati/" width="100%" height="500px" width="100%" height="500px" width="100%" height="500px" width="100%" height="500px"></iframe><br />
リンク：<a href="https://pocopota.github.io/hati/">https://pocopota.github.io/hati/</a><br />
<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9">ソースコード</a>：<a href="https://github.com/PocoPota/hati">https://github.com/PocoPota/hati</a><br />
</p>

</div>
<div class="section">
    <h3 id="炭酸水的な何か">炭酸水的な何か</h3>
    <p>クリックすると要素が離れます<br />
<iframe src="https://pocopota.github.io/carbonated/" width="100%" height="500px" width="100%" height="500px" width="100%" height="500px"></iframe><br />
リンク：<a href="https://pocopota.github.io/carbonated/">https://pocopota.github.io/carbonated/</a><br />
<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9">ソースコード</a>：<a href="https://github.com/PocoPota/carbonated">https://github.com/PocoPota/carbonated</a><br />
</p>

</div>
<div class="section">
    <h3 id="宇宙">宇宙</h3>
    <p>クリックすると要素が離れます<br />
ホバーすると要素が薄くなります<br />
<iframe src="https://pocopota.github.io/space/" width="100%" height="500px" width="100%" height="500px"></iframe><br />
リンク：<a href="https://pocopota.github.io/space/">https://pocopota.github.io/space/</a><br />
<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9">ソースコード</a>：<a href="https://github.com/PocoPota/space">https://github.com/PocoPota/space</a><br />
</p>

</div>
<div class="section">
    <h3 id="Nyanyanyanyanyanyanya">Nyanyanyanyanyanyanya!</h3>
    <p>標準の機能でこんなことも出来ました<br />
クリックで要素が離れます<br />
<iframe src="https://pocopota.github.io/Nyanyanyanyanyanyanya/" width="100%" height="500px"></iframe><br />
リンク：<a href="https://pocopota.github.io/Nyanyanyanyanyanyanya/">https://pocopota.github.io/Nyanyanyanyanyanyanya/</a><br />
<a class="keyword" href="http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9">ソースコード</a>：<a href="https://github.com/PocoPota/Nyanyanyanyanyanyanya">https://github.com/PocoPota/Nyanyanyanyanyanyanya</a></p><br />
<p>どうだったでしょうか？なかなか色々なアニメーションが作れそうです。<br />
幾何学模様のアニメーションはたまに見かけたりしますね。<br />
ぜひ使ってみてください！</p>

</div>
</div>