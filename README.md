# Design system sample
Design systemを構築するためのサンプルリポジトリです。

## 技術スタック
* TypeScript
* React
* Vite
* Linaria
* Storybook
* scaffdog (Scaffoldingの機能を提供するライブラリ)

## ディレクトリ構成
こんな感じ。   

```
.
├── README.md
├── .scaffdog (コンポーネントの自動生成周りの設定)
├── .storybook (storybook)
├── doc (storybookに表示したいDocument)
├── website (ライブラリの使用方法等をまとめてサイト)
├── index.d.ts
├── package.json
├── packages (npmでインストールしたいパッケージごとにディレクトリを切ってく)
│   ├── react (Reactで使用可能なコンポーネント)
│   └── theme (UIライブラリ全体のスタイルの設定や型定義)
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

いきなりでかく作りすぎると絶対うまくいかないので、一旦は以下のことができればおk

* UIコンポーネントをyarn・npmでインストールできる
* storybookで以下のことができる
  * ライブラリで使用可能な全てのUIコンポーネントを確認できる
  * アプリケーション・サイトで使用されているテーマカラーがわかる
