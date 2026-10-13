+++
title = "【コピペ可能】「カエレバ」、「Rinker」のようなアフィリエイト用商品リンクボックスを作ろう！【はてなカスタマイズ】"
draft = false
date = "2021-01-08T14:05:40+09:00"
tags = ["はてなブログカスタマイズ","ブログ運営","プログラミング","html","css"]
thumbnail = "/images/content/20210108140335.png"
+++

<p><p>4月25日更新：レスポンシブデザインに対応させました！</p><p>アフィリエイトブログを運営する場合にほぼ必須となるものが、商品リンクを貼るボックス的なものですよね。言葉じゃわからないので、実際のものを。 <br />
下の画像は「rinker」というWordPress用の商品リンク管理プラグインを使って使ったものです。（rinker公式のページから引用）</p><p><img src="/images/content/20210108131158.png" alt="f:id:pocopota:20210108131158p:plain" title="" class="hatena-fotolife" itemprop="image" /></p><p>こんなものを作りたいと思います。 <br />で、出来上がったものが、これ。↓</p><div class="affiliate-link-box"><a target="_blank"><img src="https://m.media-amazon.com/images/I/41M2oGkWAnL._SL160_.jpg" title="テスト画像" /></a><br />
<div class="affiliate-box-information"><br />
<p class="product-name">商品名を記入</p><p class="maker-name">メーカー名を記入</p><div class="affiliate-link-buttons"><br />
<div class="affiliate-button-amazon"><a target="_blank">Amazon</a></div><div class="affiliate-button-rakuten"><a target="_blank">楽天市場</a></div><div class="affiliate-button-yahoo"><a target="_blank">Yahooショッピング</a></div></div></div></div></p><p><p>どうですかね。だいぶ似せることができたかと思います。あ、これはリンクを挿入してないですが、もちろん挿入できます。ではコードを紹介します。</p></p>

```html
<div class="affiliate-link-box">
  <a href="画像に対するリンクを挿入" target="_blank"><img src="画像のurlを挿入" title="画像タイトルを記入"></a>
  <div class="affiliate-box-information">
    <a href="商品名に対するリンクを挿入" target="_blank"><p class="product-name">商品名を記入</p></a>
    <p class="maker-name">メーカー名を記入</p>
    <div class="affiliate-link-buttons">
      <div class="affiliate-button-amazon"><a href="amazonでのリンクを挿入" target="_blank">Amazon</a></div>
      <div class="affiliate-button-rakuten"><a href="楽天市場でのリンクを挿入" target="_blank">楽天市場</a></div>
      <div class="affiliate-button-yahoo"><a href="Yahooショッピングでのリンクを挿入" target="_blank">Yahooショッピング</a></div>
    </div>
  </div>
</div>
```

```css
  /* アフィリエイト用ボックスCSS開始 */
  .affiliate-link-box {
    border: rgb(218, 218, 218) solid 1px;
    display: flex;
    flex-direction: row;
  }

  .affiliate-link-box a {
    text-decoration: none;
  }

  .affiliate-link-box img {
    margin: 10px 25px;
    height: 160px;
    width: 160px;
  }

  .affiliate-box-information {
    margin-right: 10px;
  }

  .product-name {
    font-size: 20px;
    margin-bottom: 0;
    color: black;
  }

  .maker-name {
    font-size: 11px;
    margin-top: 3px;
    color: rgb(128, 128, 128);
  }

  .affiliate-link-buttons {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-left: 5px;
  }

  .affiliate-link-buttons div {
    padding: 3px 10px;
    border-radius: 3px;
    margin-right: 10px;
    box-shadow: 1px 1px 5px rgb(167, 167, 167);
    font-size: 13px;
  }

  .affiliate-link-buttons a {
    color: white;
  }

  .affiliate-link-buttons div:hover {
    transform: scale(1.1, 1.1);
  }

  .affiliate-button-amazon {
    background-color: #FF9900;
  }

  .affiliate-button-rakuten {
    background-color: #B31E23;
  }

  .affiliate-button-yahoo {
    background-color: #FF0033;
  }
  /* レスポンシブ */
  @media screen and (max-width: 750px) {
    .affiliate-link-box{
      width: 95%;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    .affiliate-link-box img{
      width: 80%;
      height: auto;
      margin: auto;
    }
    .product-name,.maker-name{
      margin: auto 5px;
    }
    .product-name{
      line-height: 22px;
    }
    .affiliate-link-buttons{
      display: flex;
      flex-direction: column;
      margin: 0;
      margin-bottom: 8px;
    }
    .affiliate-link-buttons div{
      width: 83%;
      margin: 5px auto;
    }
    .affiliate-box-information{
      width: 100%;
      margin: 0;
    }
  }

  /* アフィリエイト用ボックスCSS終了 */
```

<p>htmlは画像やアフィリエイト用のリンクをコード内で指示されているように挿入します。そして使用したい場所にhtmlで書き込んでください。<br />
使用する写真のサイズは一辺が160pxの正方形に編集したものurlを貼ってください。</p><p>cssは記事内に上記のcssをstyleタグで囲って貼ってもいいのですが、「デザイン→カスタマイズ」から「デザインcss」の部分に貼り付けると一番良いと思います。</p><p>これははてなブログ以外でもhtmlとcssを使用できるのであれば、使うことが可能です。貼り方は、各自調べるなりしてください。<br />
あとできる方はご自由にhtmlやcssをイジってカスタマイズしてもOKです！</p>
