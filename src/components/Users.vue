<template>
  <div>
    <h1>ここはUsersコンポーネントです</h1>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      // this.$store.stateでアクセスできる
      return this.$store.state.count
    }
  },
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
