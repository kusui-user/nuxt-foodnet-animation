# nuxt-foodnet-animation

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


npm install node-sass@5.0.0
npm install sass-loader@10.1.1
npm install --save-dev @nuxtjs/style-resources

  buildModules: [
    "@nuxtjs/style-resources",
  ],
  
  styleResources: {
    scss: [
      '~/assets/_variables.scss',
    ],
  },

  コンポーネント内で変数を使っても、
ビルド時にstyleResourcesで設定したファイルを考慮してくれるように(´ω｀)

※注意!!※
ドキュメントにも書いてあるけど、
変数・mixins・functionだけをインポートするビルドモジュールで、
実際に使われるCSSはインポートされないので注意。とのこと。

<!-- スクロールマジックインストール -->
npm i vue-scrollmagic --save