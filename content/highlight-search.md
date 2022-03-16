+++
title = "【はてなカスタマイズ】検索したときのハイライトをカスタマイズする方法"
draft = false
date = "2021-01-11T10:59:50+09:00"
tags = ["はてなブログカスタマイズ","css","プログラミング"]
thumbnail = "/images/content/20210111104024.png"
+++

<div class="section">
    <h2 id="検索したときのハイライトのカスタマイズ">検索したときのハイライトのカスタマイズ</h2>
    
<div class="section">
    <h3 id="ハイライトって">ハイライトって？</h3>
    <p>はてなブログ内で記事を検索したときに、表示された記事内に含まれている検索ワードに蛍光ペンのようにハイライトで印を付けてくれます。そのハイライトの色などが使用しているテーマによってはダサかったりします。<br />
「ダサいなら自分で変えちゃおう！」ということで今回は検索したときのハイライトの色などをカスタマイズする方法を書いていきます！<br />
※ダサいかどうかは関係なく、自分の好きな色にするためにね。<br />
<br />
</p>
</div>
<div class="section">
    <h3 id="今のハイライトは好きじゃない">今のハイライトは好きじゃない！</h3>
    <p>このブログのテーマカラーは青とか藍色なのですが、初期のハイライトの色はピンク系統でまとまっています。これもこれで目立つから良いのかもしれませんが、個人的にはあまり好きではありません。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210111083412.png" alt="f:id:pocopota:20210111083412p:plain" title="" class="hatena-fotolife" itemprop="image"></span></p>

</div>
<div class="section">
    <h3 id="カスタマイズ用コード">カスタマイズ用コード</h3>
    <p>ではカスタマイズするためのコードを。</p>

```css
.page-archive span.highlight{
    background-color: royalblue;
    color: white;
    border: solid 1px blue;
    border-radius: 5px;
    margin: 0;
    padding: 0;
}
```

<p>これを「デザイン→カスタマイズ」から一番下の「デザインCSS」というところに張り付けてください。</p>

</div>
</div>
<div class="section">
    <h2 id="コードのカスタマイズ方法">コードのカスタマイズ方法</h2>
    <p>ではこのコードを自分の思い通りに変更するための説明をしていきます。説明をされなくても分かる場合は、これで終わりです！さよなら～</p>

<div class="section">
    <h3 id="背景色のカスタマイズ">背景色のカスタマイズ</h3>
    <p>背景色の指定は先程のコードの2行目、「background-color」で行っています。現在は「royalblue」というカラーで指定されています。<br />
なので「royalblue」の部分に自分が背景色に指定したい色を書き込んでください。</p>

<div class="section">
    <h4 id="色の指定方法">色の指定方法</h4>
    <p>CSSで色を指定する方法は主に3種類あります。</p>

<ul>
<li>色の名前で指定する方法</li>
<li>カラーコードで指定する方法</li>
<li>色のRGB情報で指定する方法</li>
</ul><p>3種類ありますが、どれを使っても構いません。</p><p>色の名前は「red」や「blue」、「black」などです。これは簡単ですね。</p><p>カラーコードとは「#ffffff」（※ffffffは色によって変わります）などです。なんのことかわからない人もいるかも知れませんが、色によって固有のコードがあるのです。それを調べるのには「<a href="https://www.colordic.org/">&#x539F;&#x8272;&#x5927;&#x8F9E;&#x5178;</a>」というサイトがおすすめです。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210111085856.png" alt="f:id:pocopota:20210111085856p:plain" title="" class="hatena-fotolife" itemprop="image"></span><br />
このサイトでは沢山の色の名前、カラーコード、RGB情報まで載っていますのでおすすめです。</p><p>RGBとはRed、Green、Blueの色の量で決まるものです。CSSなどでの表記方法は「rgb(147, 147, 241)」などです。（※数値はカラーによって異なります。）まぁRGBを使わなくてもカラーコードなどで表せるものがほとんどです。</p><p>結局簡単なのは、<a href="https://www.colordic.org/">&#x539F;&#x8272;&#x5927;&#x8F9E;&#x5178;</a>で使いたい色を探して、色の名前、又はカラーコードをコピーして、コード内に張り付けてください。</p>

</div>
</div>
<div class="section">
    <h3 id="文字色のカスタマイズ">文字色のカスタマイズ</h3>
    <p>文字色の指定は、3行目の「color」で行われています。現在は「white」になっています。<br />
これも「white」の部分を先程の「色の指定方法」を参考にして背景色の色の指定と同じように行ってください。</p>

</div>
<div class="section">
    <h3 id="枠線のカスタマイズ">枠線のカスタマイズ</h3>
    <p>枠線は4行目の「border」部分で指定されています。枠線が必要ない場合は「solid 1px blue」を消して、「none」と入力しておいてください。</p>

<div class="section">
    <h4 id="枠線の種類">枠線の種類</h4>
    <p>下の中から、好きなものを選んで「solid」の部分と入れ替えてください。</p>

<table>
    <tr>
    <th>種類</th>
    <th>表示</th>
    </tr>
    <tr>
    <td>solid</td>
    <td>実践</td>
    </tr>
    <tr>
    <td>dotted</td>
    <td>点線</td>
    </tr>
    <tr>
    <td>dashed</td>
    <td>破線</td>
    </tr>
    <tr>
    <td>double</td>
    <td>二重線</td>
    </tr>
    <tr>
    <td>groove</td>
    <td>谷型</td>
    </tr>
    <tr>
    <td>ridge</td>
    <td>山型</td>
    </tr>
    <tr>
    <td>inset</td>
    <td>左と上が濃い</td>
    </tr>
    <tr>
    <td>outset</td>
    <td>右と下が濃い</td>
    </tr>
    <tr>
    <td>hidden</td>
    <td>非表示</td>
    </tr>
    <tr>
    <td>none</td>
    <td>なし</td>
    </tr>
</table>
</div>
<div class="section">
    <h4 id="枠線のサイズ">枠線のサイズ</h4>
    <p>現在は「1px」になっていますが、太くしたいなら1よりも大きい数字を、細くしたいなら1よりも小さな数字を入れてください。</p>

</div>
<div class="section">
    <h4 id="枠線の色">枠線の色</h4>
    <p>もう色の説明はいらないでしょう。「blue」の部分に好きな色の値を入れておいてください。</p>

</div>
</div>
<div class="section">
    <h3 id="角丸のカスタマイズ">角丸のカスタマイズ</h3>
    <p>角の丸は「border-radius」で「5px」に指定されています。丸みが不必要な場合は「5px」を「0」に変えておきましょう。<br />
これも好きなサイズ感になるように数値をイジって

ください。</p>

</div>
<div class="section">
    <h3 id="空白の調整">空白の調整</h3>
    <p>枠線のサイズをどのくらいにしたか、などによって空白がもっと必要になってくる場合があるかもしれません。その場合はmarginとpaddingで調節してください。</p>

</div>
</div>
<div class="section">
    <h2 id="完成">完成！</h2>
    <p>一応サイトに反映させました。でもこのデザインも微妙、、、<br />
まだ納得はしていませんが、このまま行きます。気が向いたら変えるかも。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210111104450.png" alt="f:id:pocopota:20210111104450p:plain" title="" class="hatena-fotolife" itemprop="image"></span></p><p>さて皆さんは思うようなデザインに仕上がったでしょうか？<br />
よりよいデザインのブログになるように願っています！ではまた。</p>

</div>