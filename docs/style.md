# スタイル規約

## 基本方針

- **SCSS** を使用する（`sass` パッケージ導入済み）
- **CSS Modules** を使用する（`.module.scss`）
- コンポーネントと同階層に同名のファイルを配置する

```
src/components/common/
  Button.astro
  Button.module.scss
```

### 使い方

```astro
---
import styles from "./Button.module.scss";
---

<button class={styles.button}>
	<slot />
</button>
```

```scss
// Button.module.scss
.button {
	display: inline-flex;
	padding: 0.75em 1.5em;
}
```

## グローバルスタイル

### ファイル構成

```
src/styles/
  reset.css          # ブラウザリセット
  global.scss        # グローバルスタイル（body, a, img など）
  _variables.scss    # CSS Custom Properties
```

- `reset.css` と `global.scss` は `Layout.astro` でインポートする
- `_variables.scss` は `global.scss` から `@use` で読み込まれる（各コンポーネントでの個別インポートは不要）

### CSS Custom Properties

色・フォント等はプロジェクト共通の値を `:root` の CSS Custom Properties で定義する（`_variables.scss`）。

```scss
// 使用例
color: var(--color-primary);
font-family: var(--font-family-base);
border-radius: var(--radius-md);
```

### レスポンシブ

**デスクトップファースト**で設計する。PC向けのスタイルをベースに書き、`@media (max-width: ...)` で画面幅が狭い場合のスタイルを上書きする。

固定のブレイクポイントは持たず、要素ごとにレイアウトが崩れる幅を個別に指定する。

```scss
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
}
```

## Linting

- **Stylelint** でリント・プロパティ順序を管理
- プロパティ順序は **Recess order**（`stylelint-config-recess-order`）に準拠
- `reset.css` はリント対象外
