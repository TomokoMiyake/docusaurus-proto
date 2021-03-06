---
id: version-1.0.0-spinner
title: Spinner
sidebar_label: Spinner
original_id: spinner
---

## Overview

Spinner は、ローディングスピナーを表示します。

```KUCComponentRenderer {"id":"_render"}
var component = new Spinner({
});
```

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| text | string | "" | ローダーアイコン下部に表示するテキスト | text が未指定、あるいは空文字の場合*は、初期値を表示する |

\* text が未指定、あるいは空文字の場合は、アクセシビリティを考慮して visually-hidden class を  
付与し、"now loading…" の文言を視覚的に見えない状態で表示する

### Constructor

Spinner(options)  
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含む JSON オブジェクト | options 内の値は任意 |

### Method
使用できるメソッドの一覧です。

#### open()
コンポーネントを表示する

##### Parameter
none

##### Return
none

#### close()
コンポーネントを非表示にする

##### Parameter
none

##### Return
none

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
var spinner = new Kuc.Spinner({
  text: 'now loading...'
});
spinner.open();
spinner.close();
```
