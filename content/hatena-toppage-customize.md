+++
title = "【はてなブログ無料版】トップページをカスタマイズする2種類の方法を紹介。記事一覧にしたり"
draft = false
date = "2021-06-20T22:31:50+09:00"
tags = ["はてなブログカスタマイズ","css","javascript","html","ブログ運営"]
thumbnail = "/images/content/20210620223015.png"
+++
<p>はてなブログの初期のトップページって一番最近書いた記事の全文が表示されてると思います。<br />
ですがこれだとせっかくブログを訪れてくれた人が記事の一覧を見ることができずにやりづらいですよね。<br />
なので今回ははてなブログのトップページを一覧表示にしたり、自分の思い通りのデザインにできるようなカスタマイズの方法を説明していきたいと思います。<br />
またカスタマイズの方法は全部で2種類あるので自分の望むデザインや自分の持っているスキルに合わせて選んでください。</p>
<div class="section">
    <h2 id="アクセスされたらブログのアーカイブページに飛ばす方法">アクセスされたらブログのアーカイブページに飛ばす方法</h2>
    <p>この方法はトップページを一覧表示させる方法で比較的有名なものです。<br />
細かく言うと実際はトップページはカスタマイズしていませんが、一番簡単です。</p><p>仕組みは、トップページにアクセスされると自動的にブログのアーカイブページに飛ばします。<br />
自分のアーカイブページを見たいという方はブログのURLに「/archive」をつけると見ることが出来ます。<br />
このブログのアーカイブページは↓です。<br />
<a href="https://pocopota-blog.hatenablog.com/archive">&#x8A18;&#x4E8B;&#x4E00;&#x89A7; - PocoPota&#x306E;&#x96A0;&#x308C;&#x5BB6;</a><br />
</p>

<div class="section">
    <h3 id="作成方法">作成方法</h3>
    <p>はてなブログの設定＞詳細設定から「headに要素を追加」の部分に下のコードを入力してください。<br />
「/*ブログのトップページのリンク*/」と「/*ブログのアーカイブページのリンク*/」の部分には、指示通りにURLを入れてください。<br />
入力が終わったら、下部の「変更する」ボタンを押し忘れにようにしておきましょう。</p>

```html
<script type="text/javascript">
if(location.href === "/*ブログのトップページのリンク*/") {
location.href = "/*ブログのアーカイブページのリンク*/"
}
</script>
```

<p>この方法は以前記事にもしています。<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fpocopota-blog.hatenablog.com%2Fentry%2Fhatena-redirect-archive" title="【はてなカスタマイズ】無料でもリダイレクトで記事の一覧表示する方法 - PocoPotaの隠れ家" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://pocopota-blog.hatenablog.com/entry/hatena-redirect-archive">pocopota-blog.hatenablog.com</a></cite><br />
</p>

</div>
<div class="section">
    <h3 id="メリットデメリット">メリット・デメリット</h3>
    <p>この方法のメリットは簡単にできることです。</p><p>デメリットはトップページのURLが常に/archiveが付いた状態になることです。<br />
これによりブログのトップページを誰かがSNSなどに載せてくれた場合でもアーカイブページのURLになってしまうことです。<br />
あとデザインが、ちょっと、、、ってところですかね。デザインの面はカスタマイズすればどうにでもなりますけど。</p>

</div>
</div>
<div class="section">
    <h2 id="トップページ用の記事を作成しそれを表示させておく">トップページ用の記事を作成し、それを表示させておく</h2>
    <p>さて見出しを見ても何を言ってるかわからないでしょう。自分でもわかりません。</p><p>方法としては至って簡単です。はてなブログの初期設定では最近の記事が全文表示されますのでそれを活用したいと思います。</p>

<div class="section">
    <h3 id="作成方法-1">作成方法</h3>
    <p>まずはトップページにする記事を作成します。最近の記事を一覧表示にしたり、色々とリンクを入れたりしてカスタマイズします。</p><p>記事内に最新記事を表示させる方法は下↓の記事を参考にしてください。<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fpocopota-blog.hatenablog.com%2Fentry%2Fmove-element-another" title="【はてなカスタマイズ】サイドバーの要素を記事内に設置する方法。要素を別の場所に移す - PocoPotaの隠れ家" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://pocopota-blog.hatenablog.com/entry/move-element-another">pocopota-blog.hatenablog.com</a></cite></p><p>トップページ用の記事が完成したら公開します。公開するときに公開日時を9999年とかにして公開してください。<br />
公開は予約公開ではなくすぐに公開してください。</p><p>公開したら次はトップページの表示設定を行います。<br />
設定＞詳細設定＞ブログ表示からトップページの記事数を１記事に設定してください。</p><p>設定が終わったらブログのトップページを見てみてください。きちんと表示されているはずです。</p><p>これで完成でも良いのですが、よりトップページっぽくしていきたいと思います。<br />
ここからのカスタマイズはしても、してもしなくても大丈夫です。</p>

<div class="section">
    <h4 id="タイトルとかを非表示にする">タイトルとかを非表示にする</h4>
    <p>タイトル、日付とかを諸々消します。<br />
下のコードをトップページ用に作った記事のHTML編集で貼り付けてください。</p>

```html
<style>
/* タイトルとか諸々非表示 */
.entry-header{
  display: none;
}
</style>
```

</div>
<div class="section">
    <h4 id="ページャー非表示">ページャー非表示</h4>

```html
<style>
/* ページャー非表示 */
.pager{
  display: none;
}
</style>
```

<p>あと他に消したいところがあったら調べてみてください。</p>

</div>
<div class="section">
    <h4 id="記事一覧からトップページ用記事を非表示に">記事一覧からトップページ用記事を非表示に</h4>
    <p>はい、あともう少しです。<br />
このままだとまだ記事一覧ページで見たときにトップページ用記事が見えてしまいます。<br />
それでは嫌ですよね。なので下の記事を参考にして記事一覧ページから非表示にしてください。<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fpocopota-blog.hatenablog.com%2Fentry%2Farchive-display-none" title="【はてなカスタマイズ】アーカイブページから特定の記事を非表示にする方法 - PocoPotaの隠れ家" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://pocopota-blog.hatenablog.com/entry/archive-display-none">pocopota-blog.hatenablog.com</a></cite><br />
</p>

</div>
</div>
<div class="section">
    <h3 id="メリットデメリット-1">メリット・デメリット</h3>
    <p>メリットはHTMLとCSSをを使えばどんなふうにでもカスタマイズが出来ます。<br />
またトップページのURLは変わりません。</p><p>デメリットはHTMLとかをいじれないとちょっときついことです。</p>

</div>
</div>
<div class="section">
    <h2 id="まとめではないけど">まとめ、ではないけど</h2>
    <p>はい、終了です！<br />
この記事を書いている時点でこのブログのトップページの仕組みはトップページ用の記事を作成して、<br />
トップページにアクセスされたらトップページ用の記事に自動的に移動させるという今回紹介した合体版みたいなのを使っています。<br />
これではトップページのURLが/entry/homeになってしまうので近々変更しようと思います。</p>

</div>