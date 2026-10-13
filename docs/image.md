# 画像規約

## 配置場所

| 場所                 | 用途                                                    |
| -------------------- | ------------------------------------------------------- |
| `src/assets/images/` | 通常の画像。Astro が最適化（WebP 変換、リサイズ等）する |
| `public/images/`     | OGP 画像・favicon 等、URL パスを固定する必要があるもの  |

基本は `src/assets/images/` に配置し、`<Image />` コンポーネントで読み込む。

## ディレクトリ構成

ページ文脈ベースで分類する。コンポーネントのディレクトリ構成と合わせる。

```
src/assets/images/
  common/           # 共通（ロゴ、ヘッダー背景など）
  home/             # トップページ
  about/            # /about ページ
  services/web/     # /services/web ページ

public/images/
  ogp.jpg
```

## 使い方

Astro の `<Image />` コンポーネントを使用する。

```astro
---
import { Image } from "astro:assets";
import hero from "@/assets/images/home/hero.jpg";
---

<Image src={hero} alt="メインビジュアル" />
```

`<Image />` により以下が自動で行われる:

- WebP への変換
- `width` / `height` 属性の付与（CLS 防止）
- lazy loading
