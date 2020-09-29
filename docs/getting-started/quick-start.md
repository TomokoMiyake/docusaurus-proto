---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

## kintone UI Component とは？

kintone UI Component は、kintone カスタマイズやプラグインの UI 開発を支援するための UI Component ライブラリです。  
以下のような kintone ライクな UI を簡単に作成できるので、フォーム部品を自作したい場合に便利にお使いいただけます。

### Desktop 用コンポーネント例

![desktop components](assets/desktop_components.png)

### Mobile 用コンポーネント例

![mobile components](assets/mobile_components.png)

## 下準備：アプリ作成

ここでは既定の kintone 一覧画面のヘッダーメニュースペースに Button コンポーネントを配置します。  
まず kintone UI Component を設置するアプリを用意します。

1. 空のアプリを作成する。（[アプリをはじめから作成する](https://jp.cybozu.help/k/ja/user/create_app/tutorial.html)）  
特にフィールドの設置は必要なし。

## 導入と実装方法

kintone UI Component では UMD ファイルと npm パッケージを用意しています。  
ブラウザ環境や Node.js 環境など開発環境に合わせていずれかを選択して読み込み、実装してください。  
本記事では、それぞれの導入・実装方法を紹介します。

> 各コンポーネントのリファレンスについてはサイドバーの Components カテゴリよりご確認ください。  
> （順次対応コンポーネントも追加予定です。）

### UMD ファイル

#### CDN を利用する

1. 以下の CDN URL を、作成した kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にて指定する。（[JavaSriptやCSSでアプリをカスタマイズする](https://get.kintone.help/k/ja/user/app_settings/js_customize.html)）

```text
https://unpkg.com/browse/@kintone/kintone-ui-component@0.7.2/ (tmp)
```

2. index.js ファイルを作成する。

```js
(function() {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var header = kintone.app.getHeaderMenuSpaceElement();

    var button = new Kuc.Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', function(event) {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```

3. index.js を kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にアップロードしてカスタマイズを適用する。（[JavaSriptやCSSでアプリをカスタマイズする](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

#### dist ファイルを利用する

1. [kintone UI Component](https://github.com/kintone/kintone-ui-component) リポジトリ Release 欄に添付の以下のファイルを kintone アプリ設定の `JavaScript / CSS でカスタマイズ`にて指定する。（temp）
```text
kintone-ui-component.min.js
```

2. 以降は上記 CDN と同様。

### npm パッケージ

1. プロジェクトのルート配下で以下のコマンドを実行する。

```sh
npm install @kintone/ui-component
```

2. 利用したいコンポーネントをインポートし、index.js ファイルを作成する。

```js
import { Button } from '@kintone/ui-component/lib/button';

(function() {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var header = kintone.app.getHeaderMenuSpaceElement();

    var button = new Button({
      text: 'Submit',
      type: 'submit'
    });
    button.addEventListener('click', function(event) {
      console.log(event);
    });

    header.appendChild(button);
    return event;
  });
})();
```

3. webpack などでバンドルしたファイルを、作成した kintone アプリ設定の `JavaScript /CSS でカスタマイズ`にアップロードしてカスタマイズを適用する。（[JavaSriptやCSSでアプリをカスタマイズする](https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html)）

![button customize](assets/button_customize.png)

## ブラウザ対応状況

<table>
  <tr>
    <th>Chrome</th>
    <th>Safari</th>
    <th>Firefox</th>
    <th>Edge</th>
    <th>IE11</th>
  </tr>
  <tr>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>○</td>
    <td>△</td>
  </tr>
</table>

> kintone UI Component v1 系 は現在 kintone で使用しているライブラリとの兼ね合いで、Internet Explorer 11 では正常に動作しません。
