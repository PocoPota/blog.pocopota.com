# blog.pocopota.com

PocoPota のブログ。Astro で生成し、`main` に push すると GitHub Pages に公開される。

## 記事を書く

### ファイルを作る

記事は `src/content/posts/<slug>.md` に 1 本ずつ置く。ファイル名の `<slug>` がそのまま URL の `/<slug>/` になるので、英小文字・数字・ハイフンで付ける。すべての記事が、新しい順にトップの一覧と RSS に出る。

```markdown
---
title: "記事のタイトル"
date: 2026-10-13T12:00:00+09:00
thumbnail: /images/posts/<slug>/eyecatch.jpg
description: "記事の説明"
---

本文
```

| 項目          | 必須 | 内容                                                                               |
| ------------- | ---- | ---------------------------------------------------------------------------------- |
| `title`       | 必須 | 記事のタイトル。ページの `<title>` と OGP にも使う                                 |
| `date`        | 必須 | 公開日時。`+09:00` を付けて日本時間で書く                                          |
| `thumbnail`   | 任意 | OGP 画像。省くと `/images/ogp.jpg` を使う                                          |
| `description` | 任意 | 検索結果や SNS のカードに出る説明。省くと `<meta name="description">` を出力しない |

### 見出し

`title` が記事の h1 になるので、本文の見出しは `##` から使う。

| 書き方                  | 要素   | 文字の大きさ                                 | 書体                |
| ----------------------- | ------ | -------------------------------------------- | ------------------- |
| front matter の `title` | h1     | 30px（1.875rem）。画面幅 600px 以下では 24px | Shippori Mincho     |
| `##`                    | h2     | 22px（1.375rem）。下に罫線が付く             | Shippori Mincho     |
| `###`                   | h3     | 19px（1.1875rem）                            | Shippori Mincho     |
| `####`、`#####`         | h4、h5 | 17px（1.0625rem）。本文と同じ大きさ          | Shippori Mincho     |
| 本文                    | p      | 17px（1.0625rem）。行間 1.9                  | Zen Kaku Gothic New |

### 画像

画像は `public/images/posts/<slug>/` に置き、`/images/` から始まるパスで参照する。

```markdown
![画像の説明](/images/posts/<slug>/photo.jpg)
```

キャプションを付けるときは HTML で書く。

```html
<figure>
	<img src="/images/posts/<slug>/photo.jpg" alt="画像の説明" />
	<figcaption>キャプション</figcaption>
</figure>
```

### 使える書き方

| 書き方           | 例・補足                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------ |
| 箇条書き         | `- 項目`、`1. 項目`                                                                        |
| 表               | `\| 見出し \| 見出し \|` の Markdown の表                                                  |
| 脚注             | 本文に `[^1]`、末尾に `[^1]: 脚注の文`                                                     |
| 打ち消し線       | `~~文字~~`                                                                                 |
| チェックボックス | `- [ ] 項目`、`- [x] 項目`                                                                 |
| コード           | ` ```js ` のように言語名を付けると色分けされる                                             |
| X の埋め込み     | X の「ポストを埋め込む」で出るコードをそのまま貼る。表示用のスクリプトは自動で読み込まれる |
| ほかの埋め込み   | YouTube などの `<iframe>` をそのまま貼る                                                   |

### 確認して公開する

`bun dev` を実行し、`http://localhost:4321/<slug>/` で表示を確かめる。`main` に push すると公開される。

## 開発

Node は `.node-version` のバージョン（24）を使う。

```bash
bun install
bun dev
```

| コマンド          | 用途                                                         |
| ----------------- | ------------------------------------------------------------ |
| `bun dev`         | 開発サーバーを起動する                                       |
| `bun run build`   | 本番用にビルドする                                           |
| `bun run preview` | ビルドしたサイトを確認する。sitemap はビルド後にだけ見られる |
| `bun run fix`     | ESLint、Prettier、Stylelint の自動修正をまとめて実行する     |
| `bun run ci`      | CI と同じ検査（lint、整形、型チェック）を実行する            |

## ドキュメント

- [移行計画](docs/migration.md)
- [コンポーネント規約](docs/component.md)
- [スタイル規約](docs/style.md)
- [画像規約](docs/image.md)
- [SEO 規約](docs/seo.md)
- [アクセシビリティ規約](docs/accessibility.md)
