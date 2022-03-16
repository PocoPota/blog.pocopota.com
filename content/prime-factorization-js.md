+++
title = "【JavaScript】if文とfor文だけで素因数分解"
draft = false
date = "2021-10-23T22:49:20+09:00"
tags = ["プログラミング","数学","javascript"]
thumbnail = "/images/content/20211023224829.png"
+++

<p>唐突に「素因数分解」がしたいと思ったのでプログラムで作ってみようと思います。<br />
少しググってみると何やらいろんな関数が使われていて難しそうでした。<br />
ですが今回はif文とfor文だけで素因数分解をしていこうと思います。（良いか悪いかは別として）</p>

<div class="section">
    <h2>早速コード</h2>
    <p>今回のコードは以下のような感じです。<br />
javascriptしか示してないので実際に使うときはHTMLに読み込むなどしなければいけません。</p>

```javascript
var num = 1000; //素因数分解する元の数

for (var i = 2; i < i + 1; i++) {

    if (num % i == 0) {
        for (var n = 1; n < n + 1; n++) {
            if (num % i == 0) {
                console.log(i);
                var num = num / i;
            } else {
                break;
            }
        }
    }

    if (num == 1) {
        break;
    }
}
```

</div>
<div class="section">
    <h2>プログラムの簡単な説明</h2>
    
<div class="section">
    <h3>大まかな仕組み</h3>
    <p>まずfor文で2からの無限ループを作ります。<br />
それでif文で最初に定義した数字をiで割り切れる（割り算のあまりが0）ならiで割り切れなくなるまで何度も割り続けます。<br />
そして割り切れなくなったらiが次の値に変更し、同じ動作を繰り返します。<br />
無限リープは割っていった数字が1になるまで繰り返します。</p>

</div>
<div class="section">
    <h3>素因数分解の特徴</h3>
    <p>素数や素因数分解についてちょっとだけ詳しい？知識が必要です</p>

<div class="section">
    <h4>素数は無限</h4>
    <p>素数は無限にあります。（証明とかは調べてください）<br />
なのでfor文を回すときに有限であってはいけません。<br />
for文に限りがあれば完全に素因数分解できない可能性があります。<br />
なので無限ループにしましょう。<br />
ですが重要なことはbreakをつけて条件に当てはまると無限ループは終わる形にすることです。</p>

</div>
<div class="section">
    <h4>１は素数ではない</h4>
    <p>1は素数ではないし、1で対象の数字を割ると、ずっと割り続けてしまいます。<br />
なのでfor文は2から始めています。</p>

</div>
</div>
</div>
<div class="section">
    <h2>終わり</h2>
    <p>これを実行するとconsoleに結果が出ると思います。<br />
プログラムの説明って難しいですね。</p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2FPocoPota%2Fmath%2Ftree%2Fmain%2Fprime-factorization" title="math/prime-factorization at main · PocoPota/math" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/PocoPota/math/tree/main/prime-factorization">github.com</a></cite></p>

</div>