// vuexの設定ファイルstore.js
import Vue from 'vue'
import Vuex from 'vuex'
// countモジュールをimport
import count from "./modules/count"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

// vuexプラグインを使用することを宣言
Vue.use(Vuex)

// Storeが一番使う
export default new Vuex.Store({
  // stateに設定した値が全てのコンポーネントで使用できる値となる
  state: {
    message: "",
  },
  // getters,actions,mutationsごとに切り出した場合はmodule内ではなくこちらで読み込むこと。
  getters,
  actions,
  mutations,
  modules: {
    // countモジュールを読み込む
    count: count,
  }
})
