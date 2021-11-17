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

    <input type="text" 
          v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
// gettersを効率よく使うためにmapGettersをimportする
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
    // mapGettersHelperを使用する際count/doubleCount...などの命名にしたい場合は第一引数を取る
    ... mapGetters("count", ['doubleCount', 'tripleCount']),

    // mapGettersHelperを使用しない場合
    // return this.$store.getters["count/doubleCount"]
    count() {
      return this.$store.state.count
    },

    // vuexとv-modelを一緒に使用したい場合は、オブジェクト形式でgetとsetの二つを設定する
    message: {
      get(){
         // messageを取得する
        return this.$store.getters.message
      },
      set(value){
        // messageをセットする
        this.$store.dispatch("updateMessage", value)
      },
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
    ...mapActions("count", ["increment", "decrement"]),
  }
}
</script>
