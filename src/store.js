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
  },
  // バグを生みやすいのがグローバル変数。参照なのか書き換えなのか分からない。
  // mutations以外では値を変更できないようにする。正しくは値の変更はここでしか行わないようにする
  // mutationsで変更することで値を追跡しやすくできる
  // mutationsは同期的な処理しかかけない。
  mutations: {
    // 第1引数:state 第二引数:値(今回だと1が渡されている)
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
  },
  // actionはいつでも使える。例えばコンポーネントからはdispatchだけしてactionsでコミットするとかあ。
  actions: {
    // 第一引数：context(色々と使えるもの, 引数)
    increment(context, number) {
      // contextのcommitのみ使用している場合は下記のようにも書ける
    // increment({ commit }, number) {
      context.commit('increment', number)
    },
    decrement(context, number) {
      context.commit("decrement", number)
    }
  }
})
 