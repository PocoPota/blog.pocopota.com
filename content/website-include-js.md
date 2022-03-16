+++
title = "JavaScriptでサイトの共通化（インクルード化）をしよう！"
draft = false
date = "2021-12-12T11:04:30+09:00"
tags = ["javascript","html","プログラミング"]
thumbnail = "/images/content/20211212105750.png"
+++
<p>今回はサイトの共通化をしていこうと思います。共通化はインクルードと言ったりもしますね。</p>
<div class="section">
    <h2 id="サイトの共通化とは">サイトの共通化とは？</h2>
    <p>サイトのヘッダーやフッターなどの部分を変更しようとするとき、複数ページがあると同じ変更する作業をページ数分するのって面倒くさいですよね？<br />
そこでサイトの共通化の登場です。</p><p>具体的には共通化用のファイルを全ページに読み込ませてその共通化用ファイルに共通部分のコードを読み込ませるプログラムを書いておくものです。<br />
文章でぐだぐだ言っても分からないので早速やり方を見ていきましょう。</p>

</div>
<div class="section">
    <h2 id="innerHTMLとinsertAdjacentHTML">innerHTMLとinsertAdjacentHTML</h2>
    <p>今回の方法はJavaScriptファイルを各ページに読み込ませてJavaScriptで各ページにヘッダーやフッターなどのHTMLを追加する方法です。<br />
そのJavaScriptで新しいHTMLを追加する方法がinnerHTMLとinsertAdjacentHTMLです。<br />
一つづつ説明していきましょう。</p>

<div class="section">
    <h3 id="innerHTML">innerHTML</h3>
    <p>innerHTMLは指定した要素内に新しいHTMLを追加するものです。</p><p>実際のコードを見ていきましょう。</p>

```html
<div id="inner-div"></div>
```

```javascript
var innerDiv = document.getElementById('inner-div');
innerDiv.innerHTML = '<p>innerHTMLを使って共通化しよう！</p>';
```

<p>最初はdivの中に何もありませんでしたが上のJavaScriptを読み込むことでdivの中に＜p＞innerHTMLを使って共通化しよう！＜/p＞が入りました。<br />
(HTMLとして読み込まれないように全角の＜＞になってます)</p><p>構文としてはこのような感じです。</p>

```javascript
element.innerHTML = html;
```

<p>またinnerHTMLは元々あったHTMLを上書きする方式なので、以下のように元々なにかあっても消えてしまいます。</p>

```html
<div id="inner-div"><p>サイトの共通化の更新面倒くさい...</p></div>
```

<p>これ↑がこんな風↓になります。</p>

```html
<div id="inner-div"><p>innerHTMLを使って共通化しよう！</p></div>
```

<p>もし要素内の全てを変えたくない場合は次に紹介する.insertAdjacentHTMLを使いましょう。</p>

</div>
<div class="section">
    <h3 id="insertAdjacentHTML">insertAdjacentHTML</h3>
    <p>insertAdjacentHTMLは指定した要素の前や後ろなどにHTMLを追加します。<br />
元々あったHTMLは消さない形ですね。</p><p>まずは構文を。</p>

```javascript
element.insertAdjacentHTML(position, html);
```

<p><br />
positionの部分にHTMLを追加する場所を指定するのですが、insertAdjacentHTMLは指定した要素を基準に4種類の場所にHTMLを追加することができます。</p>

<table>
    <tr>
    <td>'beforebegin'</td>
    <td>elementの直前に挿入</td>
    </tr>
    <tr>
    <td>'afterbegin'</td>
    <td>element内部の、最初の子要素の前に挿入</td>
    </tr>
    <tr>
    <td>'beforeend'</td>
    <td>element内部の、最後の子要素の後に挿入</td>
    </tr>
    <tr>
    <td>'afterend'</td>
    <td>elementの直後に挿入</td>
    </tr>
</table><p>場所を可視化させると以下のような感じです。</p>

```html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

<p>では実際にコードを見ていきましょう。</p>

```html
<div id="insert-div">
    <p>JavaScriptを使って共通化！</p>
</div>
```

```javascript
var insertDiv = document.getElementById('insert-div');
insertDiv.insertAdjacentHTML('beforeend','<p>insertAdjacentHTMLで共通化！</p>');
```

<p>こうすると以下のようになります。</p>

```html
<div id="insert-div">
    <p>JavaScriptを使って共通化！</p>
    <p>insertAdjacentHTMLで共通化！</p>
</div>
```

<p>このように元々あった要素は維持しつつ新しい要素を追加できます。</p><p>次は具体的な実践的なコードを紹介していきます。</p>

</div>
</div>
<div class="section">
    <h2 id="実践編---実際に使うコード">実践編 - 実際に使うコード</h2>
    <p>この実践的なコードの紹介では一般的な共通部分であるヘッダーとフッターで行っていきたいと思います。ついでにhead部分もしていこうと思います。<br />
サイトによってはサイドバーなども共通化できるでしょう。</p><p>デモのサイトを適当に作りました。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20211212104319.png" alt="f:id:pocopota:20211212104319p:plain" width="1200" height="580" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p><p>まずは共通化していないページのHTMLです。<br />
メイン部分はほとんど書いてませんが、head、header、footerに色々書いてありますね。<br />
この一部を変えたいだけなのに存在する数ページ、数十ページを変更するのは面倒くさい極まりないでしょう。</p>

``` html
<!DOCTYPE html>
<html lang="ja">

<head>
    <!-- 言語・環境設定 -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!-- ページの内容 -->
    <title>共通化デモサイト</title>
    <meta name="description" content="JavaScriptを使って共通化するためのデモサイトです。">

    <!-- サイトアイコン -->
    <link rel="icon" href="example.com/icon.png" sizes="16x16" type="image/png">

    <!-- OGPタグ用 -->
    <meta property="og:url" content="example.com" />
    <meta property="og:title" content="共通化デモサイト" />
    <meta property="og:type" content="website">
    <meta property="og:description" content="JavaScriptを使って共通化するためのデモサイトです。">
    <meta property="og:image" content="example.com/ogp.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@PocoPota_io" />
    <meta property="og:site_name" content="共通化デモサイト" />
    <meta property="og:locale" content="ja_JP" />

    <!-- 読み込みリンク -->
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <header>
        <div id="header-inner">
            <h1>共通化デモサイト</h1>
            <ul>
                <li>TOP</li>
                <li>SERVICES</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </header>
    <main>
        メイン～
    </main>
    <footer>
        <div>©PocoPota</div>
    </footer>
</body>

</html>
```

<p>次に共通化を行ったコードです。<br />
HTMLの共通部分をJavaScriptの方にもっていったのでかなりスッキリしました。<br />
指定した要素内の全てを追加する場合（headerやfooter）はinnerHTMLを使って、元々あるものに追加でする場合（head）はinsertAdjacentHTMを使いました。</p><p>JavaScript共通化するのに注意したほうがいいのが、headは全部共通化すると良くないかもしれないことです。<br />
utf-8などの文字コードなどは読み込みにすると文字化けが起こる場合があります。注意しましょう。</p><p>あとhead、header、footerにidをつけてそれで読み込む形にしてます。<br />
<br />
</p>

```html
<!DOCTYPE html>
<html lang="ja">

<head id="head">
    <!-- 言語・環境設定 -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!-- ページの内容 -->
    <title>共通化デモサイト</title>
    <meta name="description" content="JavaScriptを使って共通化するためのデモサイトです。">

    <!-- サイトアイコン -->
    <link rel="icon" href="example.com/icon.png" sizes="16x16" type="image/png">
</head>

<body>
    <header id="header">
    </header>
    <main>
        メイン～
    </main>
    <footer id="footer">
    </footer>
    <script src="index.js"></script>
</body>

</html>
```

```javascript
// 全てのHTMLの読み込みが完了したら以下を実行
window.onload = function(){
    // head
    // 追加するHTMLを定義
    var head_content = '<link rel="icon" href="example.com/icon.png" sizes="16x16" type="image/png">'+
    '<meta property="og:url" content="example.com" />'+
    '<meta property="og:title" content="共通化デモサイト" />'+
    '<meta property="og:type" content="website">'+
    '<meta property="og:description" content="JavaScriptを使って共通化するためのデモサイトです。">'+
    '<meta property="og:image" content="example.com/ogp.png" />'+
    '<meta name="twitter:card" content="summary" />'+
    '<meta name="twitter:site" content="@PocoPota_io" />'+
    '<meta property="og:site_name" content="共通化デモサイト" />'+
    '<meta property="og:locale" content="ja_JP" />'+
    '<link rel="stylesheet" href="index.css">';
    var head = document.getElementById('head'); // 追加する部分を取得
    head.insertAdjacentHTML('beforeend', head_content);
    // insertAdjacentHTMLでHTMLを追加


    // header
    // 追加するHTMLを定義
    var header_content = '<div id="header-inner">'+
    '<h1>共通化デモサイト</h1>'+
    '<ul>'+
    '<li>TOP</li>'+
    '<li>SERVICES</li>'+
    '<li>CONTACT</li>'+
    '</ul>'+
    '</div>';
    var header = document.getElementById('header'); // 追加する部分を取得
    header.innerHTML = header_content; // innerHTMLでHTMLを追加


    // footer 
    var footer_content = '<div>©PocoPota</div>'; // 追加するHTMLを定義
    var footer = document.getElementById('footer'); // 追加する部分を取得
    footer.innerHTML = footer_content; // innerHTMLでHTMLを追加
}
```

</div>
<div class="section">
    <h2 id="まとめ">まとめ</h2>
    <p>サイトの共通化を行うことでサイトのヘッダーの一部だけを変えたいだけなのに数ページ、数十ページのHTMLを変更することなく一つのJavaScriptファイルをいじるだけで簡単に変更を行うことができるようになります。<br />
JavaScriptからHTMLを追加する方法は他にもあるでしょう。その一つとしてdocument.write()があるのですが既に非推奨となっているのでやめておきましょう。</p><p>ちなみにPHPなどを使うともっと簡単にサイトの共通化ができるようになるんですけどね...</p><p>今回使用したinnerHTMLとinsertAdjacentHTMLの仕様<br />
<a href="https://developer.mozilla.org/ja/docs/Web/API/Element/innerHTML">Element.innerHTML - Web API | MDN</a><br />
<a href="https://developer.mozilla.org/ja/docs/Web/API/Element/insertAdjacentHTML">element.insertAdjacentHTML - Web API | MDN</a></p>

</div>