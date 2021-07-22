export default {
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json'
      },
      {
        code: 'ja',
        iso: 'ja',
        file: 'ja.json'
      }
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    vueI18n: {
      // 翻訳ファイルが見つからなかった場合の言語を指定
      fallbackLocale: 'ja'
    },
    strategy: 'prefix_and_default',
    lazy: true,
    langDir: '@/resources/lang/'
  }
