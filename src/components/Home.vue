<template>
  <div>
    <h1>ここはHomeコンポーネントです</h1>
    <p>{{ count }}</p>
    <p>2倍：{{ doubleCount }}</p>
    <p>3倍：{{ tripleCount }}</p>
    <!-- 引数を複数設定したい場合はオブジェクト形式で書くと渡せる -->
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
    <!-- <button @click="increment">+1</button>
    <button @click="decrement">-1</button> -->
  </div>
 gettersを効率よく使うためにmapGettersをimportする
import { mapGetters } from "vuex"

// mapMutationsをimport
// import { mapMutations } from "vuex"

// mapActionsをimport
import { mapActions } from "vuex"

export default {
  // 配列形式
  // computed: mapGetters(['doubleCount', 'tripleCount']),

  // オブジェクト形式・名前がそれぞれmyComponentDoubleCount・myComponentTripleCountに変わる点に注意
  // computed: mapGetters({
  //   myComponentDoubleCount: "doubleCount",
  //   myComponentTripleCount: "tripleCount",
  // })

  // スプレット演算子
  // 以下のように書くと、computedを複数かける
  computed: {
    ... mapGetters(['doubleCount', 'tripleCount']),
    count() {
      return this.$store.state.count
    }
  },


  // {
  //   doubleCount() {
  //     // this.$store.gettersでgetterを使用できる
  //     return this.$store.getters.doubleCount
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount
  //   },
  //   count() {
  //     // this.$store.stateでアクセスできる
  //     return this.$store.state.count
  //   }
  // },


  methods: {
    // スプレット演算子の形でmethods内に書く。引数はtamplate内にいどう
    // ... mapMutations(["increment", "decrement"]),

    // increment() {
      // this.$storeでアクセス
      // this.$store.state.count++;


      // mutationsを使用する場合はcommitを使用する
      // this.$store.commit('increment', 1)
    // },

    // decrement() {
      // this.$storeでアクセス
      // this.$store.state.count--;

      // mutationsを使用する場合はcommitを使用する
      // this.$store.commit('decrement', 1)
    // },

    // // action dispatchを使用して非同期的に扱う
    // increment() {
    //   // actionを実行するにはdispatch("mutation名", 引数)
    //   this.$store.dispatch("increment", 1)
    // },
    // decrement() {
    //   // actionを実行するにはdispatch("mutation名", 引数)
    //   this.$store.dispatch("decrement", 1)
    // },

    // mapActionsを使用。引数はmapMutations同様template内に移動させる
    ...mapActions(["increment", "decrement"]),
  }
}
</script>
