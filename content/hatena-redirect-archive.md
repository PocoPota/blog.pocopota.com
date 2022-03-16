+++
title = "【はてなカスタマイズ】無料でもリダイレクトで記事の一覧表示する方法"
draft = false
date = "2021-01-03T16:30:50+09:00"
tags = ["はてなブログカスタマイズ","プログラミング","javascript"]
thumbnail = "/images/content/20210103170200.png"
+++

<h2 id="無料プランでも記事の一覧表示を">無料プランでも記事の一覧表示を</h2>


<p>どういう意味かというと、あるページにアクセスされたら、そのページは表示せずに、他のページに飛ばすというものです。リダイレクト的なね。</p>


<p>はてなブログでは無料プランだと、ブログのトップページにアクセスされたときに記事の一覧表示はされずに、ブログの本文が長々と並んでいる状態です。<br>ですが、はてなブログの記事のアーカイブページでは一覧表示となっています。（当サイトのアーカイブページ↓）これはブログトップページのURLに「/archive」とつけたものです。</p>


<p><iframe class="embed-card embed-webcard" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;" title="記事一覧 - PocoPotaの隠れ家" src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fpocopota-blog.hatenablog.com%2Farchive" frameborder="0" scrolling="no"></iframe><cite class="hatena-citation"><a href="https://pocopota-blog.hatenablog.com/archive">pocopota-blog.hatenablog.com</a></cite></p>


<p>そのためブログのトップページにアクセスされた時に、アーカイブページに飛ばしたら、一応、一応、一覧表示にすることが可能です。</p>


<p>さて、さっそくコードを。このコードを設定から詳細設定へ行き、「headに要素を追加」に設置してください。</p>


```html
<script type="text/javascript">
if(location.href === "/*ブログのトップページのリンク*/") {
location.href = "/*ブログのアーカイブページのリンク*/"
}
</script>
```


<p>「/*ブログのトップページのリンク*/」と「/*ブログのアーカイブページのリンク*/」の部分には、指示通りにURLを入れてください。<br>入力が終わったら、下部の「変更する」ボタンを押し忘れにようにしておきましょう。</p>


<p>これで完成です。<br>ブログトップページにアクセスして、きちんと作動するかどうか、試してみてください。</p>


<h3 id="おまけ">おまけ</h3>


<p>さっきのコードのリンクをきちんと書き換え、head要素に挿入すると、はてなブログ以外でも使用が可能だと思います。</p>
