+++
title = "CSSだけでロード中のぐるぐるを作る"
draft = false
date = "2021-10-24T09:02:30+09:00"
tags = ["css","開発記"]
thumbnail = "/images/content/20211024085700.png"
+++
<p>今回はロードなどをしているときに出てくるあのぐるぐる（伝われ）を作っていこうと思います。</p>

<div class="section">
    <h2>早速完成品</h2>
    <p><div id="circle1"></div>
    <style>
#circle1{
            width: 18px;
            height: 18px;
            overflow: hidden;
            animation: circleAni 1.3s linear infinite;
            transform-origin: 100% 100%;
        }
        #circle1:before{
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: solid #4a90e2 6px;
        }
        @keyframes circleAni {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
</style>
  
こんな感じのものを作ります。</p>

</div>
<div class="section">
    <h2>作り方</h2>
    <p>1/4のborderの付いた円をつくり、それを回転させることでロード中のぐるぐるを作っています。<br />
1/4のborder付きの円の作り方は以前の記事を参考にしてください。</p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fpocopota-blog.hatenablog.com%2Fentry%2F1-2-border-circle" title="CSSでborderのみの半円をつくる - PocoPotaの隠れ家" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://pocopota-blog.hatenablog.com/entry/1-2-border-circle">pocopota-blog.hatenablog.com</a></cite><br />
</p>

<div class="section">
    <h3>コード解説</h3>
    
```html
<div id="circle"></div>
```
    
```css
#circle {
    width: 18px;
    height: 18px;
    overflow: hidden;
    animation: circleAni 1.3s linear infinite;
    transform-origin: 100% 100%;
}
#circle:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: solid #4a90e2 6px;
}
@keyframes circleAni {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
```

<p>こんな感じです。前回の記事に回転させるアニメーションのcssが追加されています。<br />
以下のコードが追加された部分です。</p>

```css
#circle{
            animation: circleAni 1.3s linear infinite;
            transform-origin: 100% 100%;
        }
@keyframes circleAni {
            0% {
                transform: rotate(0deg);
            }
    
            100% {
                transform: rotate(360deg);
            }
        }
```

<p>いたって普通の回転のcssですが一つ気をつけないといけないところがあります。<br />
普通に回転させると下のようになります。</p>
<div id="circle2"></div>
<style>
        #circle2{
            width: 18px;
            height: 18px;
            overflow: hidden;
            animation: circleAni2 1.3s linear infinite;
        }
        #circle2:before{
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: solid #4a90e2 6px;
        }
        @keyframes circleAni2 {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
</style><p>そのままの回転だと回転の中心がずれています。<br />
なのでtransform-origin: 100% 100%;を追加して右下を中心として回転させています。</p>

</div>
</div>
<div class="section">
    <h2>終わり！</h2>
    <p>これでロード中のぐるぐるは完成しました。</p><p>ちなみにこのコードはMy reCAPTCHAという筆者の開発したサービスに使われていますのでそちらも是非見てみてください。<br />
My reCAPTCHAは自分の好きな画像でGoogleのreCAPTCHA風なものが作れます。実際にサイトで使うこともできます。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210906071333.png" alt="f:id:pocopota:20210906071333p:plain" width="350" height="492" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2FPocoPota%2Fmy-recaptcha" title="GitHub - PocoPota/my-recaptcha: 自分の好きな画像でreCAPTCHA的なものを作れるやつです" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/PocoPota/my-recaptcha">github.com</a></cite></p>

</div>