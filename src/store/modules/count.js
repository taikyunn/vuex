// このモジュールページは文末にセミコロンがないとエラーになるので注意
// stateに設定した値が全てのコンポーネントで使用できる値となる
// 機能ごとに切り出す形
const state = {
  count: 2,
};
const getters = {
  doubleCount: state=> state.count * 2,
  tripleCount: state => state.count * 3,
};
const mutations = {
    // 第1引数:state 第二引数:値(今回だと1が渡されている)
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
};
const actions = {
  // 第一引数：context(色々と使えるもの, 引数)
  increment(context, number) {
    // contextのcommitのみ使用している場合は下記のようにも書ける 
    context.commit('increment', number)
  },
  decrement(context, number) {
    context.commit("decrement", number)
  },
};

export default {
  //export stateのみで省略もできる
  state,
  getters: getters,
  mutations: mutations,
  actions: actions,

  // 名前空間
  // module内で同じ名前を使ったとしても使い分けができる
  // 呼び出し方がcount/countやcount/doubleCountみたいに変わる
  namespaced: true,
};
