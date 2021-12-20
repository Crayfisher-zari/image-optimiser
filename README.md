# image-optimizer

imageminを使ったJPEG・PNGの画像最適化・WebP変換ツールです。

# 使い方

`npm install` or `yarn install`でパッケージをインストール。

## 画像最適化

1. `images`フォルダに最適化したい画像を格納します
2. `npm run optimise` or `yarn run optimise`もしくはpackage.json内のnpmスクリプトの`optimise`を実行します
3. `dist`フォルダに最適化された画像が出力されます

## WebP変換

1. `images`フォルダに変換したい画像を格納します
2. `npm run convert` or `yarn run convert`もしくはpackage.json内のnpmスクリプトの`convert`を実行します
3. `dist`フォルダに変換された画像が出力されます


# クオリティの調整

直接コードを編集してください。

最適化については`index.mjs`の11・12行目に設定してあります。変換については19行目にあります。
