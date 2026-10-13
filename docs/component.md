# コンポーネント規約

## ディレクトリ構成

ページ文脈ベースで分類する。ディレクトリ名はページのパスと一致させる。

```
src/components/
  common/           # 全ページ共通（Header, Footer, Button など）
  home/             # トップページ固有
  about/            # /about ページ固有
  services/web/     # /services/web ページ固有
```

### 共通化のルール

- コンポーネントは最初にページディレクトリに配置する
- **2箇所以上で使う時点で `common/` に移動**する

## ファイル命名

- **PascalCase** を使用する（例: `HeroSection.astro`）

## Props

- Propsがある場合は `interface Props {}` を必ず定義する
- Propsがない場合は省略可

```astro
---
interface Props {
	title: string;
	description?: string;
}

const { title, description } = Astro.props;
---
```

## レイアウト

`src/layouts/` にレイアウトコンポーネントを配置する。レイアウトは `<html>` や `<head>` を含むページ全体の枠組みを定義する。

```
src/layouts/
  Layout.astro       # 共通レイアウト
```

### 使い方

ページコンポーネントでレイアウトをインポートし、コンテンツを囲む。

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout title="ページタイトル" description="ページの説明">
	<h1>ページタイトル</h1>
</Layout>
```

### Layout.astro の役割

- `reset.css` / `global.scss` のインポート
- `<html>`, `<head>`, `<body>` の共通構造
- Google Fonts の読み込み
- `title`, `description` 等の meta 情報を Props で受け取る

## 備考

- スタイルの規約は [style.md](./style.md) を参照
- リンターは **ESLint** + `eslint-plugin-astro` を使用している
- フォーマッターは **Prettier** + `prettier-plugin-astro` を使用している
