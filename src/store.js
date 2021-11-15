// vuexの設定ファイルstore.js
import Vue from 'vue'
import Vuex from 'vuex'

// vuexプラグインを使用することを宣言
Vue.use(Vuex)

// Storeが一番使う
export default new Vuex.Store({
  // stateに設定した値が全てのコンポーネントで使用できる値となる
  state: {
    count: 2
  },
  // getters:computedプロパティのvuex版みたいなもの。計算とかをしてグローバルに使用することができる
  getters: {
    doubleCount: state=> state.count * 2,
    tripleCount: state => state.count * 3,
  }
})
