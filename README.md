# team Étoiles 公式サイト

チーム・エトワール株式会社の公式ウェブサイトです。

## 🌟 概要

アニメと企業をつなぎ、新しい価値を創出するプロデュース会社「チーム・エトワール」の公式サイト。
React + Viteで構築されたシングルページアプリケーションです。

## 🚀 技術スタック

- **フレームワーク**: React 19
- **ビルドツール**: Vite 7
- **スタイリング**: CSS Modules
- **デプロイ**: GitHub Pages
- **画像形式**: WebP（最適化済み）

## 📁 プロジェクト構成

```
.
├── public/
│   ├── data/
│   │   └── works.json          # 実績データ（JSON管理）
│   └── images/                 # 画像ファイル（WebP形式）
├── src/
│   ├── components/            # Reactコンポーネント
│   │   ├── Navigation.jsx    # ナビゲーション
│   │   ├── Hero.jsx          # ヒーローセクション
│   │   ├── About.jsx         # 会社説明
│   │   ├── Business.jsx      # 事業内容
│   │   ├── Works.jsx         # 実績一覧
│   │   ├── Company.jsx       # 会社概要
│   │   ├── Contact.jsx       # お問い合わせ
│   │   └── Footer.jsx        # フッター
│   ├── App.jsx               # メインアプリケーション
│   └── main.jsx              # エントリーポイント
└── index.html                 # HTMLテンプレート
```

## 🎨 デザインコンセプト

- **トーン**: クール、高級感、シック、シンプル
- **カラー**: モノトーン + アクセントカラー（ゴールド）
- **フォント**: モダンでビジネス向けの和文フォント
- **アニメーション**: 自然で控えめなトランジション

## 📱 機能

- ✅ レスポンシブデザイン（PC/モバイル対応）
- ✅ スムーススクロールナビゲーション
- ✅ ハンバーガーメニュー（モバイル）
- ✅ 実績データのJSON管理
- ✅ YouTube動画埋め込み対応
- ✅ Google Formお問い合わせ連携
- ✅ SEO/OGP設定完備

## 🛠️ 開発

### インストール

\`\`\`bash
npm install
\`\`\`

### 開発サーバー起動

\`\`\`bash
npm run dev
\`\`\`

### ビルド

\`\`\`bash
npm run build
\`\`\`

### プレビュー

\`\`\`bash
npm run preview
\`\`\`

## 📝 実績データの編集

\`public/data/works.json\` を編集することで、実績情報を更新できます。

```json
{
  "works": [
    {
      "id": "project-id",
      "title": "プロジェクト名",
      "description": "説明文",
      "category": "カテゴリ",
      "images": ["/images/image.webp"],
      "videoUrl": "https://www.youtube.com/embed/...",
      "url": "https://...",
      "featured": true
    }
  ]
}
```

## 🚀 GitHub Pagesデプロイ

### 自動デプロイ設定手順

1. GitHubリポジトリの **Settings** → **Pages** に移動
2. **Source** を **GitHub Actions** に設定
3. mainブランチにプッシュすると自動デプロイされます

### ワークフローファイルの手動追加

GitHub Appの権限により、ワークフローファイル（\`.github/workflows/deploy.yml\`）は手動で追加する必要があります。

#### 手順:

1. GitHubのリポジトリページで **Add file** → **Create new file** をクリック
2. ファイル名に \`.github/workflows/deploy.yml\` と入力
3. 以下の内容をコピー＆ペースト:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

4. **Commit changes** をクリックしてファイルを作成

これで、mainブランチへのプッシュ時に自動的にGitHub Pagesへデプロイされます。

## 🔗 公開URL

デプロイ後、以下のURLでアクセスできます:
**https://ibukishirou.github.io/official-website-team-etoile/**

## 📞 お問い合わせ

サイトに関するご質問は、[お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdiUTiNeW6VDfhOdU4H-mpB4U-Rcbtq8vr73Ww2gW7jTjTEmw/viewform)からお願いします。

---

© 2026 team Étoiles Inc. All Rights Reserved.
