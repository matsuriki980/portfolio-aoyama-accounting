# 青山会計事務所（架空サイト）

会計事務所を想定したコーポレートサイトです。  
デザインカンプをもとに、HTML / SCSS / JavaScriptで静的コーディングを行いました。

## URL

- サイトURL：[https://matsuyamarikiya.jp/aoyama-accounting/frontend/](https://matsuyamarikiya.jp/aoyama-accounting/frontend/)
- Git hub URL：[https://github.com/matsuriki980/portfolio-aoyama-accounting](https://github.com/matsuriki980/portfolio-aoyama-accounting-frontend/)

## 使用技術

- HTML
- SCSS
- JavaScript
- Git / GitHub
- swiperライブラリ

## 実装機能

- レスポンシブ対応
- ヘッダー背景 表示・非表示 (IntersectionObserver)
- ドロワーメニュー
- カルーセルスライダー (Swiper)
- お問い合わせフォーム (バリデーションチェック/入力値保存)
- 入力値確認画面 (入力値反映)

## ディレクトリ構成

```text
frontend
│
├── sass
├── js
├── img
├── css
├── fonts
│
├── feature
│   ├── img
│   └── index.html
│
├── service
│   ├── img
│   └── index.html
│
├── about
│   ├── img
│   └── index.html
│
├── news
│   ├── img
│   ├── index.html
│   └── detail
│       ├── img
│       └── index.html
│
├── voice
│   ├── img
│   ├── index.html
│   └── detail
│       ├── img
│       └── index.html
│
├── contact
│   ├── img
│   ├── index.html
│   ├── confirm
│   │   └── index.html
│   └── thanks
│       └── index.html
│
├── privacy-policy
│   └── index.html
|
├── page-404
│   └── index.html
│
└── index.html
```

## 工夫点・ポイント

- 保守性・可読性・拡張性を意識して設計。

- お問い合わせフォームの入力値取得には new FormData() を採用した。
  フォームの値を一括で取得できるため、フォーム項目の追加・変更が発生してもJavaScript側の修正を最小限に抑えられる。  
  これにより、将来的な機能拡張や仕様変更にも対応しやすい構成にしている。

- 状態管理は render.js に集約した。  
  状態の変更箇所を一元化することで、複数箇所から状態を更新した際に発生しやすい不整合や処理の衝突を防いでいる。
  また、状態の流れを追いやすくなるため、デバッグや改修がしやすくなり、実装時の認知負荷軽減にもつながる。

## Git運用で意識したこと

- mainブランチで直接作業は行わず、ページごとにブランチを作成して開発。  
  これによって、作業内容を整理しやすくし、どのページでどのような変更を行ったのかを分かりやすく管理できるようにした。

- Gitでのコミットは「serviceページのボタン修正」「レスポンシブ対応」など、機能単位でコミットメッセージを分けて管理。  
  これによって、変更履歴や修正内容を細かく追いやすくし、問題発生時にも該当箇所を確認しやすい運用を意識した。

- GitHubでのマージ時は「serviceページを構築」など、ページ単位で作業内容が分かるメッセージを記載して管理。  
  これによって、GitHub上では開発内容を大きな作業単位で整理し、全体の進捗や実装内容を把握しやすい構成を意識した。
