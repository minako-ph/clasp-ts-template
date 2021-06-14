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

create a new project
```bash
yarn clasp create
```

add the following to .clasp.json:
```
{
  "scriptId":"xxxxxxxxxxxxx",
  "rootDir": "./dist" // !! Add this line !!
}
```

deploy
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

# Run a script from the local machine

- GCP上でプロジェクトの作成
  - プロジェクト番号とプロジェクトIDをメモしておく
- プロジェクトIDを登録する
```bash
yarn clasp setting projectId ${プロジェクトID}
```
- 下記のリンクにアクセスしてOAuth同意画面を作成する
  - https://console.developers.google.com/apis/credentials/consent?project={プロジェクトID}
  - テスターに自分のアカウントを追加すると良い
- 以下のコマンドでGASプロジェクトを開く
```bash
yarn clasp open
```
- `リソース` から `Cloud Platform プロジェクト` を開きプロジェクト番号の登録をする
- 以下のコマンドで認証情報作成画面を開く
```bash
yarn clasp open --creds
```
- `認証情報の作成` > `OAuthクライアントID` を開く
- アプリケーションタイプは `デスクトップアプリ` を選択し作成
- 作成された認証情報を `creds.json` という名前でプロジェクトルートディレクトリに置く
- 以下のコマンドで認証を行う
```bash
yarn clasp login --creds creds.json
```
- `appsscript.json` に以下の記載を追加する
```
"executionApi": {
  "access": "ANYONE"
}
```

実行
```bash
yarn run:main
```

**参考**
- [clasp doc](https://github.com/google/clasp/blob/master/docs/run.md)  
