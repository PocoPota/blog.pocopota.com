+++
draft = false
thumbnail = "images/content/classroombot-samune.png"
tags = ['開発記','javascript','プログラミング']
date = "2022-04-30T23:45:47+09:00"
title = "Classroomの投稿通知をしてくれるDiscord botを作る"
description = ""
+++
今回は不便な事をプログラムで解決していこうの回です。

現在学校でのお知らせなどの連絡でGoogle Classroomというサービスを使っています。  
スマホだと大丈夫なのですが、パソコンだと通知が来ない！！  
重要なお知らせ等も投稿されるので見れなければ困る！！

「じゃあ自分で通知システムを作ればいいじゃないか」

ということで今回はGoogle Classroomの通知をしてくれるDiscord botを作ろうと思います。

みんなDiscord使おう！！！！(関係ない)

## 要件定義的な
ClassroomはGoogleのサービスなのでGoogleの他のサービスと相性が良さそうなので簡単に作れます。  
そのため今回はGoogle App Script(GAS)を実行環境としたいと思います。  
そしてGAS上でClassroom APIというものを走らせたいと思います。

botはwebhookの方で作りたいと思います。

簡単なプログラムの紹介としてはGASを5分毎で実行させ、APIを使いClassroomの投稿情報を取得し、5分以内に投稿されたものだけbotで投げると言う感じです。

## 完成形
以下の写真のような感じでDiscordに届くようにします。  
※名前等はもちろん偽名です。  
<img src="/images/content/classroombot-2.png">
<img src="/images/content/classroombot-1.png">

## プログラム本体
できるだけ分かりやすいように、と後々便利なので機能ごとに関数にしてあります。  
一部機能だけ欲しい方は関数だけを盗んでもらっても構いません。

```
// すべてのクラスの名前とIDを取得
function getClasses() {
  var optionalArgs = {
    pageSize: 20 // 取得最大数
  };
  var response = Classroom.Courses.list(optionalArgs)['courses'];
  var classesList = [];
  for (var i = 0; i <= response.length - 1; i++) {
    var childArr = { 'className': response[i]['name'], 'classId': response[i]['id'] };
    classesList.push(childArr);
  }
  return classesList;
}

// クラス内の投稿情報を取得
// 引数にはクラスIDを入れる
function getClassPost(classId) {
  var posts = Classroom.Courses.Announcements.list(classId)['announcements'];
  return posts;
}

// 一つ一つの投稿情報を取得
// 第一引数にはクラスIDを、第二引数には指定したクラス内の最新から何番目の投稿情報が欲しいかを入力
function getPostInfo(classId, num) {
  var posts = getClassPost(classId);
  var postInfo = posts[num];
  return postInfo;
}

// 送信プログラム
//引数には送信物リストを
// 引数のarr内には既存の要素に追加してクラス名を追加しなくてはならない
function send(arr) {
  // リスト内の数だけ送信を実行
  for (var i = 0; i <= arr.length - 1; i++) {
    var target = arr[i];
    // 送信情報を定義
    var className = target['className']; // クラス名
    var content = target['text']; // 投稿されたコンテンツ
    var time = target['creationTime']; // 投稿時間
    // 時間の時差,フォーマットの変更
    var time = new Date(time).toLocaleString();
    var time = new Date(time);
    var timeHour = time.getHours();
    var timeHour = ('00' + timeHour).slice(-2);
    var timeMin = time.getMinutes();
    var timeMin = ('00' + timeMin).slice(-2);
    var userId = target['creatorUserId']; // 投稿者ID
    // 投稿者IDから名前を指定
    switch (userId) {
      case 'USER_ID': // ユーザーIDを入力
        var userName = 'USER_NAME'; // ユーザー名を入力
      default:
        var userName = '未設定のユーザー';
    }

    // Discordへの送信プログラム
    var WEBHOOK_URL = 'DISCORD_WEBHOOK_URL'; // Discord webhook urlを入力
    const payload = {
      "content": "新規投稿がありました",
      "tts": false,
      "embeds": [
        {
          "title": className,
          // 色を指定
          "color": parseInt("008000", 16),
          "fields": [
            {
              "name": `${userName} [${timeHour}:${timeMin}]`,
              "value": content
            }
          ]
        }
      ]
    }
    UrlFetchApp.fetch(WEBHOOK_URL, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
    });
  }
}

function main() {
  // 実際にbotで送信される投稿リストを定義
  var sendArr = [];

  // 存在するクラスの数だけ繰り返す
  for (var i = 0; i <= getClasses().length - 1; i++) {
    var classId = getClasses()[i]['classId']; // クラスID
    var className = getClasses()[i]['className']; // クラス名

    // 最大適応投稿数を定義
    if (getClassPost(classId) == undefined) {
      var maxPost = 0;
    } else if (getClassPost(classId).length >= 5) {
      var maxPost = 5;
    } else {
      var maxPost = getClassPost(classId).length;
    }

    if (maxPost != 0) { // 投稿が0の場合は除外
      // maxPost分の投稿が条件を満たしているかチェック
      for (var n = 0; n <= maxPost - 1; n++) {
        var postInfo = getPostInfo(classId, n);

        // 投稿時刻の取得&変換
        var createTime = postInfo['creationTime'];
        var createTime = new Date(createTime);
        var createTime = createTime.getTime();
        // 現在時刻の取得&変換
        var nowTime = new Date();
        var nowTime = nowTime.toGMTString();
        var nowTime = new Date(nowTime);
        var nowTime = nowTime.getTime();

        // 投稿時間が5分(300,000ミリ秒)以内かどうか確認
        if (nowTime - createTime <= 300000) {
          // 投稿情報にクラス名を追加
          postInfo['className'] = className;
          // 5分***送信用リストに投稿を追加
          sendArr.push(postInfo);
        } else {
          // 5分以上***特になし
        }
      }
    }
  }

  // 送信するものがあればsend()関数に送る
  if (sendArr.length != 0) {
    send(sendArr);
  }
}
```
github :  <a href="https://github.com/PocoPota/classroom-bot">https://github.com/PocoPota/classroom-bot</a>

## 使い方
### GAS
GASでのDiscord botの作り方はネット上に沢山転がっていると思うので大まかにしか説明しません。ググれ！  
まずはGASプロジェクトを作成してください。  
そうしたら「サービス」の部分から「Google Classroom API」を選択して追加してください。

で、上のコードをコピペ！

### ユーザーIDの特定
Classroom APIの仕様上ユーザー名の取得ができません。その代わりユーザーIDという20桁程度の数字の配列が与えられます。  
以下のコードを追加してdev()を実行し、出力されたログと実際のClassroomとを見比べながらどのIDが誰かを特定していきます。  

クラス一覧の場合はownerIdが、投稿の場合はcreatorUserIdがユーザーを識別するIDとなっています。  
まぁ良い感じに特定してください。
```
function dev(){
  console.log(getClasses());
  for(var i = 0; i <= getClasses().length - 1; i++){
    console.log(getClassPost(getClasses()[i]['classId']));
  }
}
```

特定したらsend関数内のswitch文で表示ユーザー名とIDを追加・変更していってください。

### Discord webhook
Discordでbotのwebhookを発行して、上のコード58行目付近に貼り付ける場所があるのでコピペしてください。

### GAS トリガーの設定
トリガーは以下の通りに設定します。
- main関数を実行
- 時間主導型
- 分ベースのタイマー
- 5分おき

## 完成
これで5分ごとに実行されて新規投稿があればDiscordに通知されるbotが完成しました。  
ぜひDiscordとClassroomを連携させて使ってみてください！

## P.S.
コード自体の説明はだいぶ省きましたので疑問点などがあればDiscordかTwitterで受け付けますよ。
- Discord : PocoPota#2788
- Twitter : <a href="https://twitter.com/PocoPota_io" target="_blank">@PocoPota_io</a>
  
またsend関数の部分をいじればDiscord以外のLINE等でもbotを作ることができると思います。

github :  <a href="https://github.com/PocoPota/classroom-bot">https://github.com/PocoPota/classroom-bot</a>
