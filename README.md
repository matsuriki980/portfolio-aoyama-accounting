# 青山会計事務所（架空サイト）

会計事務所を想定したコーポレートサイトです。  
デザインカンプをもとに、HTML / SCSS / JavaScriptで静的コーディングを行い、
その後WordPress化を行いました。

## URL

- サイトURL：[https://matsuyamarikiya.jp/aoyama-accounting/](https://matsuyamarikiya.jp/aoyama-accounting/)

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
├── scss
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
│
└── index.html
```
