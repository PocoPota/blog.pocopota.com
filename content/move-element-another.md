+++
title = "【はてなカスタマイズ】サイドバーの要素を記事内に設置する方法。要素を別の場所に移す"
draft = false
date = "2021-01-31T10:12:00+09:00"
tags = ["はてなブログカスタマイズ","css","html","javascript","ブログ運営","プログラミング"]
thumbnail = "/images/content/20210131100951.png"
+++
<script>
    location.href = "https://hatena.pocopota.com/move-element-another";
</script>
<div class="section">
    <h2 id="要素を別を場所移すとは">要素を別を場所移すとは？</h2>
    <p>サイドバーの要素を記事内に設置するとは、例えば、ブログのトップページを作ったときに最新記事の表示が必要ですよね？最新記事の表示はサイドバーに設置することができます。そのサイドバーに設置した最新記事の表示をこれから紹介するコードでトップページに表示することができます。当ブログもこの方法でトップページに最新記事を表示させています。</p>

</div>
<div class="section">
    <h2 id="コード">コード</h2>
    <p>ではコードを。このコードを移動させたい場所に貼り付けてください。</p>

```html
<div id="移動させる先の要素名"></div>
<script>
var timer = setInterval(function() {
if (typeof jQuery != 'undefined') {
$("#移動させる先の要素名").html($("移動させる要素名").html());
clearInterval(timer);
}
}, 1000)
</script>
```

</div>
<div class="section">
    <h2 id="コードの説明">コードの説明</h2>
    
<div class="section">
    <h3 id="div">div</h3>
    <p>一番最初のdivは移動させる先の要素です。なのでこのdivを張り付けた場所に選択した要素が移動してきます。</p>

</div>
<div class="section">
    <h3 id="移動させる先の要素名">移動させる先の要素名</h3>
    <p>script内の＃移動させる先の要素名とは名前の通りです。一番最初のdivの要素名を張り付けてください。このコードではidで指定されていますがclassなどで指定する場合は#を.になおしておいてください。</p>

</div>
<div class="section">
    <h3 id="移動させる要素名">移動させる要素名</h3>
    <p>移動させる要素名は移動させたいものによって異なるでしょう。各自デベロッパーツールなどを使って確認してみてください。参考程度にはてなブログにおけるサイドバーの要素名は一覧にしておきます。移動させたいものがリスト内にある場合はリスト左側のものを「移動させる要素名」に貼り付けてください。</p>

<table>
    <tr>
    <th>種類</th>
    <th>要素名</th>
    </tr>
    <tr>
    <td>検索ボックス</td>
    <td>.hatena-module-search-box</td>
    </tr>
    <tr>
    <td>プロフィール</td>
    <td>.hatena-module-profile</td>
    </tr>
    <tr>
    <td>人気記事</td>
    <td>.hatena-module-entries-accrss-ranking</td>
    </tr>
    <tr>
    <td>最新記事</td>
    <td>.hatena-module-recent-entries</td>
    </tr>
    <tr>
    <td>最近のコメント</td>
    <td>.hatena-module-recent-comments</td>
    </tr>
    <tr>
    <td>リンク</td>
    <td>.hatena-module-links</td>
    </tr>
    <tr>
    <td>カテゴリー</td>
    <td>.hatena-module-category</td>
    </tr>
    <tr>
    <td>アーカイブ</td>
    <td>.hatena-module-archive</td>
    </tr>
    <tr>
    <td>html</td>
    <td>.hatena-module-html</td>
    </tr>
</table><p>まぁ、こんなもんでしょう。<br />
注意が必要なのはhtmlの場合です。はてなブログの場合サイドバーに自分で書いたhtmlを表示できる機能があります。それを2つ以上使った場合、どちらも同じ要素名となってしまいます。その場合は工夫が必要です。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210131091406.png" alt="f:id:pocopota:20210131091406p:plain" title="" class="hatena-fotolife" itemprop="image"></span></p>

</div>
</div>
<div class="section">
    <h2 id="元の要素を非表示に">元の要素を非表示に</h2>
    <p>これを使うと移動させた先と元々あった場所に同じものが表示されます。それで良いなら良いですが、表示させたくないときは下のコードをcssの欄に貼り付けてください。</p>

```css
移動させる要素名{
display: none;
}
```

<p>これで非表示にできます。</p>

</div>
<div class="section">
    <h2 id="タイトルを非表示">タイトルを非表示</h2>
    <p>サイドバーの要素を移動させたのですから、タイトルも付随してきます。使い方によってはタイトルがいらない場合があるでしょう。その場合はこのコードを。</p>

```css
#移動させる先の要素名 .hatena-module-title{
display: none;
}
```

<p>コレをcssに貼り付ければ非表示になります。</p>

</div>
<div class="section">
    <h2 id="あとは調整">あとは調整！</h2>
    <p>移動させたらあとは調整です。記事は綺麗に整列させて、サイズを調整して。など頑張ってください！</p>

</div>