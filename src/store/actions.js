export default {
  // actionはいつでも使える。例えばコンポーネントからはdispatchだけしてactionsでコミットするとかあ。
  updateMessage({ commit }, newMessage) {
    commit("updateMessage", newMessage)
  }
};
