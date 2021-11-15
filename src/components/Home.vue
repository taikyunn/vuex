<template>
  <div>
    <h1>ここはHomeコンポーネントです</h1>
    <p>{{ count }}</p>
    <p>2倍：{{ doubleCount }}</p>
    <p>3倍：{{ tripleCount }}</p>
    <button @click="increament">+1</button>
    <button @click="decreament">-1</button>
  </div>
</template>

<script>
// gettersを効率よく使うためにmapGettersをimportする
import { mapGetters } from "vuex"

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
    increament() {
      // this.$storeでアクセス
      this.$store.state.count++;
    },
    decreament() {
      // this.$storeでアクセス
      this.$store.state.count--;
    },
  }
}
</script>
