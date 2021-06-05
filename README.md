# Usage

install packages
```bash
yarn install
```

login to clasp
```bash
yarn clasp login
```

update `.clasp.json`
```
{
  "scriptId":"", // add script ID
  "rootDir": "./dist"
}
```

or you can create new one
```bash
yarn clasp create
```

deploy as test
```bash
yarn deploy
```

よく使うgasのメソッド
```js
 // 環境変数の取得
 const prop = PropertiesService.getScriptProperties().getProperties()
 const token = prop.TOKEN

 // シートの取得など
 const sheet = SpreadsheetApp.openById('id');
 sheet.getSheetByName('name')
 sheet.getSheetByName('name').getRange(2,3).getValue(); // getRange(縦, 横)
 sheet.getSheetByName('name').getRange(2,3).setValue('value');
```
