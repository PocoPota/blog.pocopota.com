# SEO 規約

## meta 基本

`Layout.astro` が `title`, `description` を Props で受け取り、`<head>` に出力する。

```astro
<Layout title="ページタイトル" description="ページの説明">
	{" "}
	...{" "}
</Layout>
```

- `title` は必須
- `description` は任意（指定しない場合、meta タグ自体が出力されない）

## OGP

`Layout.astro` が以下の OGP タグを出力する。

| タグ             | 値                                               |
| ---------------- | ------------------------------------------------ |
| `og:title`       | `title` Props                                    |
| `og:description` | `description` Props                              |
| `og:type`        | `website`                                        |
| `og:url`         | ページの canonical URL                           |
| `og:image`       | `ogImage` Props（デフォルト: `/images/ogp.jpg`） |

ページごとに OGP 画像を変えたい場合は `ogImage` Props を指定する。

```astro
<Layout title="About" description="会社概要" ogImage="/images/about-ogp.jpg" />
```

OGP 画像は `public/images/` に配置する（URL パスの固定が必要なため）。

## Twitter Card

`summary_large_image` を指定している。OGP タグを Twitter も参照するため、個別の `twitter:title` 等は省略。

## canonical URL

全ページに `<link rel="canonical">` を出力する。`Astro.site` + `Astro.url.pathname` から自動生成される。

`astro.config.mjs` の `site` をプロジェクトのドメインに設定すること。

```js
export default defineConfig({
	site: "https://example.com", // TODO: プロジェクトのドメインに変更
});
```

## sitemap

`@astrojs/sitemap` 導入済み。`astro.config.mjs` の `site` が設定されていれば、ビルド時に自動生成される。

## robots.txt

`public/robots.txt` に配置済み。`Sitemap` の URL プロジェクトのドメインに合わせて変更すること。
