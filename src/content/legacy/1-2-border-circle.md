+++
title = "CSSでborderのみの半円をつくる"
draft = false
date = "2021-09-03T23:33:00+09:00"
tags = ["css","html","開発記"]
thumbnail = "/images/content/20210903233223.png"
+++


<div class="section">
    <h2>borderのみの半円を作りたい！</h2>
    <p>完成形がこんな感じ↓の枠線だけがついた半円を作りたい！<br />
あと、一つのdivだけで作りたい！<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210903224911.png" alt="f:id:pocopota:20210903224911p:plain" width="318" height="160" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p>

</div>
<div class="section">
    <h2>早速完成品</h2>
    <p><style>
    .circle{
        width: 200px;
        height: 100px;
        overflow: hidden;
    }
    .circle:before{
        content: '';
        display: block;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 15px solid black;
    }
</style><br />
<div class="circle"></div></p><br />
<p>条件通りdivは一つでいきたいと思います。</p>

```html 
<div class="circle"></div>
```

```css
.circle{
    width: 200px;
    height: 100px;
    overflow: hidden;
}
.circle:before{
    content: '';
    display: block;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 15px solid black;
}
```

<p>とってもシンプルなコードでできました</p>

</div>
<div class="section">
    <h2>仕組み</h2>
    <p>:beforeで枠線をつけた円を普通に作ります。<br />
そして親要素のdivを:beforeの半分のサイズにします。<br />
そして親要素にoverflow:hidden;をつけて、その要素からはみでた子要素は非表示にしています。</p><p>親要素のサイズは:before自体のサイズにborderのサイズが足されたものなのでご注意を。</p>

</div>
<div class="section">
    <h2>1/4のサイズ</h2>
    <p>これと同じような仕組みで1/4のものも作れるでしょう。<br />
htmlは先程のものと変わりません。<br />
親要素のwidthを半分にしただけです。<div class="circle1"></div><style>
    .circle1{
        width: 100px;
        height: 100px;
        overflow: hidden;
    }
    .circle1:before{
        content: '';
        display: block;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 15px solid black;
    }
</style></p>

```css
    .circle{
        width: 100px;
        height: 100px;
        overflow: hidden;
    }
    .circle:before{
        content: '';
        display: block;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 15px solid black;
    }
```


</div>
<div class="section">
    <h2>まとめ</h2>
    <p>overflowって便利だね</p>

</div>