import Vue from 'vue';
import moment from 'moment';
import lodash, { LoDashStatic } from 'lodash';
import {v4 as uuid} from 'uuid';
import { NuxtCookies } from 'cookie-universal-nuxt';
import VueI18n, { IVueI18n, TranslateResult } from "vue-i18n";

// Promise 例外の詳細情報出力
process.on('unhandledRejection', console.dir);

// Vue インスタンスプロパティ拡張
Vue.prototype.$moment = moment;
// lodashは慣例的に '_' を使う？Vueの公式ドキュメントでも '_' だったのでそうしておく
Vue.prototype._ = lodash;
Vue.prototype.$uuid = uuid;

declare module 'vue/types/vue' {
  interface Vue {
    // nuxt.config.js に @nuxtjs/axios の設定を入れているので動作するが、
    // TypeScript でエラーになってしまうため Vue.$axios の定義を入れる
    // moment.d.ts に定義されている moment の関数定義
    // Vue の拡張定義に入れてあげないと TypeScript による入力補完が効かない
    // moment の仕様が変わったときに面倒なので、この定義はあまりうれしくない
    $moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): moment.Moment;
    $moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean): moment.Moment;
    _: LoDashStatic;
    $uuid(): string;
    $cookies: NuxtCookies;
    $t: { (key: string, values?: any[] | { [key: string]: any; } | undefined): TranslateResult; (key: string, locale: string, values?: any[] | { [key: string]: any; } | undefined): TranslateResult; };
  }
}

declare module 'vue' {
  export interface NuxtContext<V extends Vue> {
    app: V;
    isClient: boolean;
    isServer: boolean;
    isDev: boolean;
    isHMR: boolean;
    env: any
    params: any;
    query: any;
  }
}