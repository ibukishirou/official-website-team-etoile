# team Étoiles 公式サイト

チーム・エトワール株式会社の公式ウェブサイトです。
公開URL: https://team-etoiles.com/

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

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

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
