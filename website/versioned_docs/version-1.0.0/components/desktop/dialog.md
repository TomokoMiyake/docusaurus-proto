---
id: version-1.0.0-dialog
title: Dialog
sidebar_label: Dialog
original_id: dialog
---

# Overview

Dialog は、ダイアログボックスを表示します。

```KUCComponentRenderer {"id":"_render"}
var component = new Kuc.Dialog({
  content: '<div>This is Content</div>'
});
```

---

# Specification

## Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| title | string | "" | Header のタイトルを表示 ||
| content | string \| HTMLElement | "" | Content 内部の DOM を表示 | HTML が記載された string が代入された場合、自動で HTML に変換して出力されます<br>content プロパティの値は、XSS 攻撃を防ぐために内部で自動的に sanitize されます。 |
| footer | string \| HTMLElement | "" | Footer 内部の DOM を表示 | HTML が記載された string が代入された場合、自動で HTML に変換して出力されます<br>footer プロパティの値は、XSS 攻撃を防ぐために内部で自動的に sanitize されます |

## Constructor

Dialog(options)  
使用できるコンストラクタの一覧です。

### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含む JSON オブジェクト | options 内の値は必須でない |

## Method

使用できるメソッドの一覧です。

### open()
Dialog を表示する

#### Parameter
none

#### Return
none

### close()
Dialog を非表示にする

#### Parameter
none

#### Return
none

---
# Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
var dialog = new Kuc.Dialog({
  title:  'Title',
  content: '<div>This is Content</div>',
  footer: 'Footer'
});
dialog.open();
dialog.close();
```