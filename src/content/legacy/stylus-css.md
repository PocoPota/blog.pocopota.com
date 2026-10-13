+++
title = "【Chrome拡張機能】Stylusを使って自分で書いたCSSを常時反映させる！"
draft = false
date = "2021-06-25T07:18:40+09:00"
tags = ["css"]
thumbnail = "/images/content/20210625071639.png"
+++

<div class="section">
    <h2>CSSを保存できるStylus</h2>
    <p>「このサイトの使い勝手悪い！」と思ったことはありませんか？<br />
ちなみに筆者はあります()</p><p>今回はこのような事態を防ぐことのできるかもしれないChromeの拡張機能を紹介したいと思います。</p><p>今回紹介する拡張機能は「Stylus」というものです。<br />
この拡張機能は公開してあるサイトのCSSを変更して保存しておく事のできるものです。</p><p>そのため自分以外の作ったサイトにも自分の書いたCSSをずっと適用させることができるのです。</p>

</div>
<div class="section">
    <h2>使い方</h2>
    
<div class="section">
    <h3>ダウンロード</h3>
    <p>まずはダウンロードしましょう。<br />
下↓のサイトからダウンロード出来ます。<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fstylus%2Fclngdbkpkpeebahjckkjfobafhncgmne%3Fhl%3Dja" title="Stylus" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=ja">chrome.google.com</a></cite><br />
</p>

</div>
<div class="section">
    <h3>CSSをいじっていくぅ</h3>
    <p>ダウンロードが出来たらCSSを変更したいサイトを開き、Stylusのボタンを押します。<br />
そうしたら下のようなポップが出てくると思うので「次のスタイルを書く」のリンク部分をクリックしましょう。<br />
今回はTwitter君に犠牲になってもらいます。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210624231805.png" alt="f:id:pocopota:20210624231805p:plain" width="249" height="163" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span></p><p>そしたらエディット画面が開くと思うのでそこにCSSを書いてください。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210624231944.png" alt="f:id:pocopota:20210624231944p:plain" width="1200" height="587" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
</p>

</div>
<div class="section">
    <h3>反映確認</h3>
    <p>CSSを書き終えたら画面左側の保存ボタンを押して保存します。<br />
そうしたら編集していた画面に戻ってください。<br />
今回はTwitterのCSSを編集しているのでTwitterに戻ります。</p><p>そうしたらCSSが反映されていると思います。<br />
反映されていない場合はStylusのボタンを押して一番上のチェックボックスにチェックを入れておいてください。<br />
これで反映されると思います。<br />
<span itemscope itemtype="http://schema.org/Photograph"><img src="/images/content/20210624232340.png" alt="f:id:pocopota:20210624232340p:plain" width="249" height="160" loading="lazy" title="" class="hatena-fotolife" itemprop="image"></span><br />
</p>

</div>
<div class="section">
    <h3>つかったCSS</h3>
    <p>今回TwitterではTLが消えるようなCSSを作成してみたので一応そのコードも貼っておきます。<br />
これでTLを消すことができるのでツイ廃を抑えることが出来ます。（多分意味ないw）<br />
Twitterのコードはclass名とかよくわからなかったので無理やりdivdivdivdivdiv()</p>

```css
main div div div div div div:nth-child(4){
    display:none;
}
```

</div>
</div>
<div class="section">
    <h2>まとめ！</h2>
    <p>今回はChromeの拡張機能のStylusを使って常にCSSを保存する方法を試してみました。<br />
どうだったでしょうか。なにか役に立つことが出来ればいいですねー</p><p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fstylus%2Fclngdbkpkpeebahjckkjfobafhncgmne%3Fhl%3Dja" title="Stylus" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=ja">chrome.google.com</a></cite></p>

</div>