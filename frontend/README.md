# デプロイ手順
+ Google Cloud PlatformのCLIツール（gcloud）をインストール
+ 下記コマンドで、操作するプロジェクト情報などを設定する
```
~$ gcloud init
```
+ frontendディレクトリ直下で下記コマンドを実行
```
~$ gcloud app deploy
```
+ デプロイ後、下記コマンドでブラウザを立ち上げて動作確認
```
~$ gcloud app browse
```
