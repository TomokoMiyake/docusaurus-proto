---
id: installation
title: Installation
sidebar_label: Installation
---

Editing...

## Overview

## Using dist files

- Attach 2 below files from './dist' the folder in [kintone-ui-component](https://github.com/kintone/kintone-ui-component/tree/master) into kintone app
```text
 ./dist/kintone-ui-component.min.js
 ./dist/kintone-ui-component.min.css
```
- Create index.js file
```javascrpit
(function () {
    kintone.events.on("app.record.index.show", function (ev) {
      var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
      var button = new kintoneUIComponent.Button({ text: 'Submit' });
      kintoneSpaceElement.appendChild(button.render());
      button.on('click', function(){
        alert('This is my customization');
      })
    });
  })();
```
- Attach index.js file into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![result](assets/result.png)

## Using webpack
**Step** 1: Run commands
```bash
mkdir my-customization
cd my-customization
npm init -y
npm install cross-env babel-preset-stage-0 css-loader style-loader webpack webpack-cli babel-loader @babel/core
npm install @kintone/kintone-ui-component
mkdir src
```
**Step** 2: Add index.js file to src/ folder:
```javascript
import {Button} from '@kintone/kintone-ui-component/esm/js'
(function () {
  kintone.events.on("app.record.index.show", function () {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    var button = new Button({text: 'Submit', type:'submit'});
    button.on('click', function(){
      alert('This is my customization');
    })
    kintoneSpaceElement.appendChild(button.render());
  });
})();
```
**Step** 3: Add webpack.config.js file to my-customization/ folder
```javascript
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "my-customization.min": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    watch: env.watch
  }
}
```
**Step** 4: Add a script for buiding by webpack to package.json
```json
"scripts": {
  "build-webpack": "cross-env NODE_ENV=production webpack",
  ...
}
```
- Run command to build the customization file
```bash
npm run build-webpack
```
```text
result:
./dist/my-customization.min.js
```
- Attach my-customization.min.js into [kintone app setting](https://help.kintone.com/en/k/user/js_customize.html)

![result](assets/result.png)
