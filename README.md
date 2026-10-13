# blog.pocopota.com

PocoPota のブログ。Astro で生成し、GitHub Pages から配信する。`master` に push すると `.github/workflows/deploy.yml` がビルドしてデプロイする。

## セットアップ

Node は `.node-version` のバージョン（24）を使う。

```bash
bun install
bun dev
```

## よく使うコマンド

| コマンド                  | 用途                                                         |
| ------------------------- | ------------------------------------------------------------ |
| `bun dev`                 | 開発サーバーを起動                                           |
| `bun run build`           | 本番用にビルド                                               |
| `bun run preview`         | ビルド済みのサイトをローカルで確認                           |
| `bun run typecheck`       | Astro ファイルを含めて型チェックを実行                       |
| `bun run lint`            | ESLint の自動修正を実行                                      |
| `bun run lint:check`      | ESLint のチェックのみ実行                                    |
| `bun run format`          | Prettier で整形                                              |
| `bun run format:check`    | Prettier の整形チェックのみ実行                              |
| `bun run stylelint`       | Stylelint の自動修正を実行                                   |
| `bun run stylelint:check` | Stylelint のチェックのみ実行                                 |
| `bun run fix`             | ESLint、Prettier、Stylelint の自動修正をまとめて実行         |
| `bun run check`           | ESLint、Prettier、Stylelint のチェックをまとめて実行         |
| `bun run ci`              | CI 向けの検査を実行。`check` と `typecheck` を順番に実行する |

### 整形・lintの使い分け

- 作業中にまとめて直す場合は `bun run fix` を使います。import順、未使用import、Prettier整形、CSS/SCSS/AstroのStylelint自動修正が対象です。
- エラー確認だけをしたい場合は `bun run check` を使います。
- CI向けの検査をローカルで行う場合は `bun run ci` を使います。`ci` は自動修正しないため、失敗した場合は `bun run fix` で直してから再実行してください。

## 記事

| 置き場所              | 内容                                         | 一覧・RSS |
| --------------------- | -------------------------------------------- | --------- |
| `src/content/posts/`  | 記事                                         | 出す      |
| `src/content/legacy/` | 旧ブログの記事。URL を残すためだけに生成する | 出さない  |

記事は `src/content/posts/<slug>.md` に置き、`/<slug>/` で公開される。slug が `posts` と `legacy` で重複するとビルドが失敗する。

```markdown
---
title: "記事のタイトル"
date: 2026-10-13T12:00:00+09:00
thumbnail: /images/posts/<slug>/eyecatch.jpg # 任意。OGP 画像に使う
description: "記事の説明" # 任意
---

本文
```

記事の画像は `public/images/posts/<slug>/` に置く。

## ドキュメント

- [移行計画](docs/migration.md)
- [コンポーネント規約](docs/component.md)
- [スタイル規約](docs/style.md)
- [画像規約](docs/image.md)
- [SEO 規約](docs/seo.md)
- [アクセシビリティ規約](docs/accessibility.md)
