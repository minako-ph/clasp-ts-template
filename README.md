# Usage

install packages
```bash
yarn install
typesync
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

# Run script from local machine


- Set up a Project ID.
- Create an OAuth Client ID (Other). Download as `creds.json`.
- `clasp login --creds creds.json` with this downloaded file. 
- Add the following to `appsscript.json`:
```
"executionApi": {
  "access": "ANYONE"
}
```

- [Clasp doc](https://github.com/google/clasp/blob/master/docs/run.md)  
