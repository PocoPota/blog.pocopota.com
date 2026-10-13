+++
title = "【jQuery】input要素のスライダーを動かして文字サイズをリアルタイムに変更する方法"
draft = false
date = "2021-03-24T14:29:50+09:00"
tags = ["プログラミング","javascript","jQuery","html","開発記"]
thumbnail = "/images/content/20210324142128.png"
+++

<p></p><p>今回は<a class="keyword" href="http://d.hatena.ne.jp/keyword/Web%A5%B5%A1%BC%A5%D3%A5%B9">Webサービス</a>を開発している途中に作ったHTMLのinput、range要素を使って文字のサイズを変更するものを紹介していきたいと思います。一旦デモをどうぞ。</p>
<p id="p">ここの文字のサイズが変わります。</p>
<input type="range" min="0" max="100" step="1" id="slider" value="10">
<p id="value-display">10</p>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
  $('#slider').on('input', function () {
    let val = $(this).val();
    $('#value-display').html(val);
    document.getElementById('p').style.fontSize = val +'px';
  });
</script>

<div class="section">
    <h2>HTML</h2>
    <p>まずはHTMLを少し書きます。</p>

```html
<p id="p">ここの文字のサイズが変わります。</p>
<input type="range" min="0" max="100" step="1" id="slider" value="10">
<p id="value-display">10</p>
```

<div class="section">
    <h3>ちょっと説明</h3>
    <p>idがpの部分の文字が変わるようにしています。idじゃなくてclassで指定しても大丈夫です。</p>

<div class="section">
    <h4>input</h4>
    <p>先述したとおりinput要素のrangeを使用しています。これでスライダーを表示できます。</p>

```html
<input type="range" min="0" max="100" step="1" id="slider" value="10">
```

<p>inputの中身を説明します。</p><p>minとmaxはスライダー内の最小値と最大値を表しています。この場合は最小が0、最大が100です。<br />
stepは動かす際にいくつずつ動かすかというものです。<br />
今回は1なので、1、2、3、4、5、6...と出来ます。<br />
5にすると、5、10、15、20、25...となります。</p><p>valueは最初にどの数値を選択しておくかを指定しています。この場合は10なので最初に10の部分においてあります。なにも指定しなければ中央になります。</p><p>id=value-displayの部分は現在の値を表示する場所です。中の数値はinputで指定したvalueの値を入れておきましょう。</p>

</div>
</div>
</div>
<div class="section">
    <h2>JavaScript</h2>
    <p>今回はjQueryを使うのでファイルを読み込んでおいてください。</p>

```javascript
$('#slider').on('input', function () { //input要素
  let val = $(this).val();
  $('#value-display').html(val); //現在の値表示部
  document.getElementById('p').style.fontSize = val +'px' //サイズを変更される要素
});
```

<p>これで完成です！<br />
あとは勝手にカスタマイズして</p><p>参考サイト<br />
<iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2F1-notes.com%2Fget-slider-input-dynamically%2F" title="【jQuery】スライダーフォームの入力時にvalue値を動的に取得する方法 | ONE NOTES" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://1-notes.com/get-slider-input-dynamically/">1-notes.com</a></cite></p>

</div>