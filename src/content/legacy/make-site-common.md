+++
title = "HTML、CSSでサイトを作る際の基礎や常識"
draft = false
date = "2021-09-19T15:20:40+09:00"
tags = ["html","css","javascript","jQuery"]
thumbnail = "/images/content/20210919152005.png"
+++

<p>初心者がHTMLやCSSを勉強してタグの意味やある程度のCSSの書き方がわかるようになったら1からサイトを作りたいと思うはずです（多分）。<br />
ですが、いざサイトを1から作ろうとすると分からないことが多いと思います。</p><p>今回は本などには載っていなかったりするのにサイトを作る上では常識なことをまとめたいと思います。<br />
この記事は「HTMLとCSSはある程度理解した。初めてのサイトを作りたい、けど分からん」という人を対象としています。</p>
<div class="section">
    <h2 id="indexhtmlってなんぞやなんでindex">"index.html"ってなんぞや！？なんでindex？？？</h2>
    <p>本などでHTMLを勉強しているとファイル名が「index.html」になっている場合が多いと思います。<br />
index.htmlにはなにか意味があるのでしょうか。</p><p>サイトのトップページにアクセスしたとしましょう。「<a href="https://example.com/">https://example.com/</a>」にアクセスしました。<br />
本来なら「<a href="https://example.com/index.html">https://example.com/index.html</a>」などファイル名をつけなければ表示されないはずです。</p><p>なぜファイル名を指定していなくても表示されるかというと、多くのサーバーではスラッシュ（/）の後になにも指定されていなければindex.htmlのファイルを探してそれを表示させるからです。<br />
そのためトップページのファイル名はindex.htmlにすることが多いのです。</p>

</div>
<div class="section">
    <h2 id="フォルダ分けについてCSSと画像は別フォルダに">フォルダ分けについて。CSSと画像は別フォルダに</h2>
    <p>サイトを作り始めるとHTMLも画像もたくさんできると思います。<br />
なのでCSSや画像は別フォルダに保存することで管理しやすくなります。<br />
JavaScriptがあるときはそれも別に保存。</p><p>サンプル<br />
project/<br />
　├ CSS/<br />
　│　└ style.CSS/<br />
　├ images/<br />
　│　└ image1.png/<br />
　│　└ image2.png/<br />
　├ js/<br />
　│　└ script.js/<br />
　└ index.html/</p>

</div>
<div class="section">
    <h2 id="HTML最初のおまじないとか">HTML最初のおまじないとか</h2>
    
<div class="section">
    <h3 id="ひな形">ひな形</h3>
    <p>HTMLにはどんなサイトを作るかに関係なく記述しておく必要があるコードがあります。<br />
以下のコードは最低限必要なものです。VSCodeなら感嘆符（!）を入力することでひな形を生成してくれます。</p>

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

</div>
<div class="section">
    <h3 id="各コードの説明">各コードの説明</h3>

```html
<!DOCTYPE html>
```

<p>HTML5で書いてあることをブラウザに伝えるためもものです。<br />
必須！</p>

```html
<html lang="ja"></html>
```

<p>このタグの中に書いたものはhtml要素だということを示しています。<br />
langには使用言語を入れます。日本語だとjaです。</p>

```html
<head></head>
```

<p>このタグの中にはそのファイルに関する情報を記述します。<br />
ページのタイトルやCSSの読み込みなどを行います。</p>

```html
<meta charset="UTF-8">
```

<p>文字コードUTF-8で書かれていることを示しています。</p>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<p>レスポンシブに対応させるためのものです。</p>

```html
<title>Document</title>
```

<p>「Document」の部分にファイルの名前を入れます。</p>

```html
<body></body>
```

<p>このタグの中に書いたものは実際にブラウザ上に表示されます。</p><br />
<p>ひな形はこれらに加えて後述するOGPなど自分用にカスタマイズして使ってください。</p>

</div>
</div>
<div class="section">
    <h2 id="部品ごとにグループ分けをしよう">部品ごとにグループ分けをしよう</h2>
    <p>HTMLでコーディングする際は様々なタグを使ってグループ分けすると思います。<br />
しっかりとタグの意味を理解してコーディングすることが重要です。</p>

<table>
    <tr>
    <th>タグ</th>
    <th>用途、使う場所など</th>
    </tr>
    <tr>
    <td>header</td>
    <td>ヘッダーであるロゴやナビゲーションメニューを囲む</td>
    </tr>
    <tr>
    <td>nav</td>
    <td>メインのナビゲーションメニューを囲む</td>
    </tr>
    <tr>
    <td>article</td>
    <td>ページ内の記事部分を囲む</td>
    </tr>
    <tr>
    <td>section</td>
    <td>一つの意味をもつまとまりを囲む</td>
    </tr>
    <tr>
    <td>main</td>
    <td>ページのメイン部分をまとめる</td>
    </tr>
    <tr>
    <td>aside</td>
    <td>本文とは関係ない補足情報を囲む。サイドバーなどにも使用される</td>
    </tr>
    <tr>
    <td>footer</td>
    <td>フッターであるコピーライト等を囲む</td>
    </tr>
    <tr>
    <td>div</td>
    <td>意味を持たない要素</td>
    </tr>
</table>
</div>
<div class="section">
    <h2 id="idとclassの違い">idとclassの違い</h2>
    <p>CSSでデザインをいじる際はHTMLで要素につけたclassやidが役立ちますよね？<br />
classとidはどちらも要素に名前をつけるものですが何が違うのでしょう。</p><p>簡単に言うとclassは同じページ内で同じclass名を複数使うことができますが、idは同じページ内で同じidを使うことができません。</p><p>HTMLとCSSだけでサイトを作る位なら「classだけで十分じゃん」と思うかもしれませんがJavaScriptなどを使うようになってくるとidの重要性がわかると思います。</p>

</div>
<div class="section">
    <h2 id="marginとpaddingの違い">marginとpaddingの違い</h2>
    <p>CSSを勉強し始めたときはmarginとpaddingの違いがいまいち分からないのは定番です。<br />
実際の例を見たらわかりやすいかと思って下に並べました。<br />
HTMLコードはこれです。</p>

```html
<div>サンプルテキスト</div>
```

<p>このコードにCSSを追加していきます。初期状態として背景色と枠線をつけています。</p>

<div class="section">
    <h3 id="marginもpaddingもつけていない場合">marginもpaddingもつけていない場合</h3>
    <p>これに関して特筆することはありませんね。<div style="background-color:tomato;border:solid 2px black;">サンプルテキスト</div></p>

</div>
<div class="section">
    <h3 id="marginをつけた場合">marginをつけた場合</h3>
    <p>marginを20pxにした状態です。枠線よりも外側に20px文の空白ができているのがわかります。<div style="background-color:tomato;border:solid 2px black;margin:30px;">サンプルテキスト</div></p>

</div>
<div class="section">
    <h3 id="paddingをつけた場合">paddingをつけた場合</h3>
    <p>次にpaddingを20pxにした状態です。枠線よりも内側に20pxの空白ができていることがわかります。<div style="background-color:tomato;border:solid 2px black;padding:30px;">サンプルテキスト</div></p>

</div>
<div class="section">
    <h3 id="marginもpaddingもつけた場合">marginもpaddingもつけた場合</h3>
    <p>最後にmarginとpaddingどちらも適用させた状態です。枠線の外側にも内側にも空白ができています。<div style="background-color:tomato;border:solid 2px black;margin:30px;padding:30px;">サンプルテキスト</div></p><p>分かったでしょうか？分からなかった場合は調べるなりしてみてください。</p>

</div>
</div>
<div class="section">
    <h2 id="メインの部分の横幅">メインの部分の横幅</h2>
    <p>メイン部分の横幅とはヘッダーとフッターを除くメインコンテンツやサイドバーの部分です。<br />
下の画像の矢印の部分の幅です。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210919135450.png" alt="f:id:pocopota:20210919135450p:plain" width="400" height="500" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p><p>ここの幅が大きすぎるとディスプレイよりも大きくなり横スクロールが必要となってしまします。<br />
どのディスプレイで見てもきちんと表示されるように幅はしっかりりと考える必要があります。<br />
現在では主にパソコンでは1000px前後、スマホでは750pxを基準に作成されることが多いです。<br />
詳しく知りたい方は他サイトの記事を読んでみてください。<br />
<a href="https://fastcoding.jp/blog/all/info/designswidth-2020/">&#x3010;2020&#x5E74;10&#x6708;&#x7248;&#x3011;&#x30C7;&#x30B6;&#x30A4;&#x30CA;&#x30FC;&#x5FC5;&#x8AAD;&#xFF01;Web&#x30B5;&#x30A4;&#x30C8;&#x6A2A;&#x5E45;&#x30B5;&#x30A4;&#x30BA;&#x3068;&#x30D5;&#x30A1;&#x30FC;&#x30B9;&#x30C8;&#x30D3;&#x30E5;&#x30FC;&#x30B5;&#x30A4;&#x30BA; | FASTCODING BLOG</a><br />
</p>

</div>
<div class="section">
    <h2 id="OGP設定">OGP設定</h2>
    <p>OGPとはSNSなどでサイトがシェアされた際に表示される画像などのことです。<br />
これは設定をし忘れがちなものです。<br />
OGPを説明しようとするとこの記事がとてつもなく長くなってしまうのでまた別の機会に。<br />
他のサイトの記事を読んでみてください。<br />
<a href="https://digitalidentity.co.jp/blog/seo/ogp-share-setting.html">OGP&#x3092;&#x8A2D;&#x5B9A;&#x3057;&#x3088;&#x3046;&#xFF01;SNS&#x3067;&#x30B7;&#x30A7;&#x30A2;&#x3055;&#x308C;&#x3084;&#x3059;&#x3044;&#x8A2D;&#x5B9A;&#x65B9;&#x6CD5;&#x3068;&#x306F;&#xFF1F;</a><br />
</p>

</div>
<div class="section">
    <h2 id="JavaScriptの読み込み">JavaScriptの読み込み</h2>
    <p>もしサイトでJavaScriptを読み込む場合は読み込む場所に注意してください。<br />
JavaScriptファイルは基本的にbodyの閉じタグの直前に書きます。<br />
なぜかと言うとHTMLの読み込み時にJavaScriptの読み込みが始まり、HTMLの読み込みがストップするのを防ぐためです。</p><p>またJQueryなどを読み込む際は自分で書いたJavaScriptファイルとの読み込む順番に気をつけましょう。<br />
的にJQueryなどを先に読み込みましょう。これを間違えるとエラー多発ですよ！</p>

</div>
<div class="section">
    <h2 id="フォントの設定">フォントの設定</h2>
    <p>フォントを指定することは重要ですが忘れがちなことです。<br />
なぜ大切かと言うとフォントを指定していない場合に使われるフォントがブラウザによって変わってくるからです。</p><p>フォントを指定していない場合としている場合の比較をChrome（windows）、safari（macbook）でスクリーンショットを撮りました。<br />
上の文字が指定していないもの、下がNoto Sans JPを指定している場合です。<br />
（「フォントをしていない」と誤字ってますが悪しからず）</p>

<div class="section">
    <h3 id="Chromewindowsでの表示">Chrome（windows）での表示</h3>
    <p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210919143134.png" alt="f:id:pocopota:20210919143134p:plain" width="375" height="151" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
Chrome（windows）の初期フォントはNote Sans JPと似ているのであまり変化はありません。</p>

</div>
<div class="section">
    <h3 id="safarimacbookでの表示">safari（macbook）での表示</h3>
    <p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210919143655.png" alt="f:id:pocopota:20210919143655p:plain" width="768" height="481" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
safari（macbook）の初期フォントは明朝体系のフォントなので違いが顕著に現れます。</p><p>このようにChromeとsafariでは初期フォントが全然違うのです。<br />
ですがフォントを指定した場合はどちらで表示しても同じになります。<br />
フォントを指定していないと自分が思ったデザインと異なる場合があるのでしっかりと指定しておいたほうが良いでしょう。<br />
<a href="https://saruwakakun.com/html-css/basic/google-fonts">&#x3010;2019&#x5E74;&#x7248;&#x3011;Google Fonts&#x306E;&#x4F7F;&#x3044;&#x65B9;&#xFF1A;&#x521D;&#x5FC3;&#x8005;&#x5411;&#x3051;&#x306B;&#x89E3;&#x8AAC;&#xFF01;</a><br />
</p>

</div>
</div>
<div class="section">
    <h2 id="Google-Analytics-Search-Consoleを設定しよう">Google Analytics, Search Consoleを設定しよう</h2>
    <p>さて色々あってサイトが完成したとしましょう。<br />
サイトが完成したらネット上へ公開すると思います。<br />
そのときに役に立つのがGoogle AnalyticsとGoogle Search Consoleです。</p>

<div class="section">
    <h3 id="Google-Analytics">Google Analytics</h3>
    <p>Google Analyticsとは自分のサイトにどのくらいの人が訪れたのかなどの情報がわかるサービスです。<br />
自分のサイトに関する様々な情報を見ることができるので登録しておいて損はないでしょう。</p>

</div>
<div class="section">
    <h3 id="Google-Search-Console">Google Search Console</h3>
    <p>Google Search ConsoleとはGoogleで検索した際に何回自分のサイトが見られたか、そこから何人が訪問したかなどの情報を得ることができます。<br />
これも登録しておいてもいいでしょう。</p><br />
<br />
<p>どうだったでしょうか。<br />
サイトなどを作る際に基礎、常識となることをまとめました。<br />
OGPなんて自分が調べなくては分かるはずがないと思います（多分）。<br />
基礎の基礎すぎてネットであまり出てこないこともあるかと思います。<br />
この記事がサイト作成の参考になれば幸いです。</p><p>記事の内容に間違い等がありましたらTwiter（<a href="http://twitter.com/PocoPota_io">@PocoPota_io</a>）に連絡お願いします</p>

</div>
</div>