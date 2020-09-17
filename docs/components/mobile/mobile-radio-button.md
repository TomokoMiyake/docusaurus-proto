---
id: mobile-radio-button
title: MobileRadioButton
sidebar_label: MobileRadioButton
---

# Overview

MobileRadioButton は複数選択肢の中から一つの値を選択することができます。。

```KUCComponentRenderer {"id":"_render"}
var component = new Kuc.MobileRadioButton({
  value : 'Orange',
  visible : true,
  items : [
    { 
      label: 'orange',
      value: 'Orange' 
    },
    { 
      label: 'apple',
      value: 'Apple' 
    }
  ]
});
```

---

# Specification

## Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | "" | コンポーネントの class 名 ||
| error | string | "" | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | "" | コンポーネントの id 名 ||
| label | string | "" | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| value | string | "" | 選択されている値 | value が未指定の場合、何も更新されない |
| borderVisible | boolean | false | コンポーネントの境界線表示/非表示設定 ||
| disabled | boolean | false | コンポーネントの編集可/不可設定 ||
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 ||
| visible | boolean | true | コンポーネントの表示/非表示設定 ||
| items | Array\<Item\> | [] | 表示する選択肢一覧 | items が配列ではない場合、エラーを出力する |
| Item.label | string | null | 各選択肢のテキスト | Item.label が未指定の場合、UI 上は Item.value の値が表示される |
| Item.value | string | null | 各選択肢の値 | Item.value の値が重複した場合、エラーを出力する |

## Event
指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前のvalueの値<br>event.detail.value : 変更後のvalueの値 |

## Constructor

RadioButton(options)  
使用できるコンストラクタの一覧です。

### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | コンポーネントのプロパティを含む JSON オブジェクト | options 内の値は必須でない |

---
# Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
var space = kintone.app.record.getSpaceElement('space');
var mobileRadioButton = new Kuc.MobileRadioButton({
  label: 'Fruit',
  requriedIcon: false,
  items: [
    { 
      label: 'orange',
      value: 'Orange' 
    },
    { 
      label: 'apple',
      value: 'Apple' 
    }
  ],
  value : 'Orange',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileRadioButton);

mobileRadioButton.addEventListener('change', function(event) {
  console.log(event);
});
```
