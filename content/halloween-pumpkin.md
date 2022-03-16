+++
title = "ハロウィンなのでHTMLとCSSでパンプキンを作ろう！"
draft = false
date = "2021-10-29T23:36:20+09:00"
tags = ["cssアート","css","html","ネタ"]
thumbnail = "/images/content/20211029233500.png"
+++

<p>ハロウィンですね。</p><p>毎年ハロウィンがありますが、特にハロウィンらしいことをした覚えが過去にありません。<br />
（というか何するの？）</p><p>ということで今年はHTMLとCSSでハロウィンによく現れるパンプキンのおばけ（？）を作りたいと思います。</p>

<div class="section">
    <h2>完成形</h2>
    <p><iframe src="https://pocopota.github.io/halloween/pumpkin/" width="100%" height="200px"></iframe><br />
<a href="https://pocopota.github.io/halloween/pumpkin/">https://pocopota.github.io/halloween/pumpkin/</a></p><p></p>

</div>
<div class="section">
    <h2>HTML</h2>
    <p>まずはHTMLです。<br />
ヘタの部分、かぼちゃ本体の部分、顔の部分でdiv分けをしました。</p>

```html
<div id="pumpkin">
    <div id="pumpkin-top"></div>
    <div id="pumpkin-main">
        <div id="pumpkin-base">
            <div id="pumpkin-main-left"></div>
            <div id="pumpkin-main-center"></div>
            <div id="pumpkin-main-right"></div>
        </div>
        <div id="pumpkin-face">
            <div id="eye"></div>
            <div id="nose"></div>
            <div id="mouth"></div>
        </div>
    </div>
</div>
```

</div>
<div class="section">
    <h2>CSS</h2>
    <p>CSSはscssを使っていろいろしました。<br />
多少無理矢理感あふれる部分がありますが...</p>

```scss
#pumpkin {
    width: 290px;
    #pumpkin-top {
        width: 20px;
        height: 35px;
        margin: 0 auto;
        margin-bottom: -5px;
        border-radius: 4px 4px 0 0;
        transform: rotate(10deg);
        background-color: #027d3e;
    }
    #pumpkin-main {
        width: 100%;
        height: 150px;
        #pumpkin-base {
            display: flex;
            flex-direction: row;
            justify-content: center;
            #pumpkin-main-center {
                height: 150px;
                background-color: #f28d01;
                width: calc(290px / 3 - 5px);
                height: 150px;
                border-radius: 25px / 40%;
                position: relative;
                z-index: 150;
            }
            #pumpkin-main-right {
                height: 150px;
                margin-left: -18px;
                position: relative;
                z-index: 100;
                background-color: #ec6c01;
                width: calc(290px / 3 - 5px);
                border-radius: 10% 70% 50% 20% / 60% 20% 60% 40%;
            }
            #pumpkin-main-left {
                height: 150px;
                background-color: #ec6c01;
                width: calc(290px / 3 - 5px);
                border-radius: 70% 10% 20% 50% / 20% 60% 40% 60%;
                margin-right: -18px;
                position: relative;
                z-index: 100;
            }
        }
        #pumpkin-face{
            margin-top: -113px;
            #eye{
                width: 100px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                position: relative;
                z-index: 200;
                margin: 0 auto;
                &:before{
                    content: '';
                    display: block;
                    background-color: black;
                    width: 30px;
                    height: 25px;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    transform: rotate(5deg);
                }
                &:after{
                    content: '';
                    display: block;
                    background-color: black;
                    width: 30px;
                    height: 25px;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    transform: rotate(-5deg);
                }
            }
            #nose{
                background-color: black;
                width: 17px;
                height: 15px;
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                margin: 0 auto;
                margin-top: 3px;
                position: relative;
                z-index: 200;
            }
            #mouth{
                width: 150px;
                height: 70px;
                border-bottom: solid 20px black;
                border-radius: 50%;
                margin: 0 auto;
                margin-top: -48px;
                position: relative;
                z-index: 190;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 27px;
                &:before{
                    content: '';
                    display: flex;
                    width: 15px;
                    height: 15px;
                    background-color: #f28d01;
                    position: relative;
                    z-index: 200;
                    margin-top: 60px;
                }
                &:after{
                    content: '';
                    display: flex;
                    width: 15px;
                    height: 15px;
                    background-color: #f28d01;
                    position: relative;
                    z-index: 200;
                    margin-top: 60px;
                }
            }
        }
    }
}
```

<p>全部説明するとか無理なので理解してください！</p><p>今回、borderとborder-radiusがとても仕事をしてくれました！<br />
みんなborderとborder-radiusを使おう！！！！</p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fcoliss.com%2Farticles%2Fbuild-websites%2Foperation%2Fcss%2Fcss-border-radius-can-do-that.html" title="CSSのborder-radiusは実はすごかった！あまり知られていない機能を使用して、かっこいいレイアウトを作る方法" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://coliss.com/articles/build-websites/operation/css/css-border-radius-can-do-that.html">coliss.com</a></cite></p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Ftks-kan.com%2F2016%2F08%2F31%2F184%2F" title="cssで丸を描くついでに色々やってみた" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://tks-kan.com/2016/08/31/184/">tks-kan.com</a></cite></p><p>あと目とか鼻の部分の三角形の作り方は以下のサイトを参考にさせていただきました。<br />
ありがとうございます！<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fzenn.dev%2Fseya%2Farticles%2Ff642acf1c47358" title="新時代のCSS三角の作り方 clip-path 〜 さらば、すべての border 〜" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://zenn.dev/seya/articles/f642acf1c47358">zenn.dev</a></cite><br />
</p>

</div>
<div class="section">
    <h2>完成！</h2>
    <p>このコードで完成です！<br />
ちなみにdivとかの構成を可視化（？）してみると以下のような感じです。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20211029231818.png" alt="f:id:pocopota:20211029231818p:plain" width="301" height="190" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
無理矢理感あふれる口の丸さ()<br />
まぁ完成したので良かったです。</p><p>全体のコード、CSSとかはgithubに上がってまーす<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2FPocoPota%2Fhalloween%2Ftree%2Fmain%2Fpumpkin" title="halloween/pumpkin at main · PocoPota/halloween" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/PocoPota/halloween/tree/main/pumpkin">github.com</a></cite></p>

</div>