# Usage

```
git clone https://github.com/minako-ph/clasp-ts-template 
cd clasp-ts-template
```

1. install packages
```bash
yarn typesync
yarn install
```

2. login to clasp
```bash
yarn clasp login
```

3. create a new project
```bash
yarn clasp create
```
4. root directoryに作成された `appscript.json`を削除


5. add the following to .clasp.json:
```
{
  "scriptId":"xxxxxxxxxxxxx",
  "rootDir": "./dist" // !! Add this line !!
}
```

6. `yarn clasp login`したアカウントで以下のURLにアクセスし `Google Apps Script API` をONにする  

https://script.google.com/home/usersettings

7. push
```bash
yarn push
```

## ローカルマシーンからスクリプトを実行する

1. GCP上でプロジェクトの作成
  - プロジェクト番号とプロジェクトIDをメモしておく
  - プロジェクトIDを登録する
```bash
yarn clasp setting projectId ${プロジェクトID}
```

2. 下記のリンクにアクセスしてOAuth同意画面を作成する
  - https://console.developers.google.com/apis/credentials/consent?project={プロジェクトID}
  - テスターに自分のアカウントを追加すると良い

3. 以下のコマンドでGASプロジェクトを開く
```bash
yarn clasp open
```
- `リソース` から `Cloud Platform プロジェクト` を開きプロジェクト番号の登録をする


4. 以下のコマンドで認証情報作成画面を開く
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

5. `appsscript.json` に以下の記載を追加する
```json
"executionApi": {
  "access": "ANYONE"
}
```

6. ローカルから実行
```bash
yarn run:main
```

**参考**
- [clasp doc](https://github.com/google/clasp/blob/master/docs/run.md)

## ローカルマシーンから実行可能API もしくは 公開ウェブアプリのURLを固定したままデプロイをする

1. `ローカルマシーンからスクリプトを実行する` の 1から4までの手順を完了させる

2. `appsscript.json` に以下の記載を追加する
```
  "executionApi": {
    "access": "ANYONE"
  },
  "webapp": {
    "access": "ANYONE_ANONYMOUS",
    "executeAs": "USER_DEPLOYING"
  }
```

3. 以下のコマンドでGASプロジェクトを開く
```bash
yarn clasp open
```
- 一度アプリケーションを手動でデプロイする

4. ローカルからデプロイ
```bash
yarn deploy
```


## よく使うgasのメソッド
```js
 //変数の取得
 const prop = PropertiesService.getScriptProperties().getProperties()
 const token = prop.TOKEN

 // シートの取得など
 const sheet = SpreadsheetApp.openById('id');
 sheet.getSheetByName('name')
 sheet.getSheetByName('name').getRange(2,3).getValue(); // getRange(縦, 横)
 sheet.getSheetByName('name').getRange(2,3).setValue('value');
```
