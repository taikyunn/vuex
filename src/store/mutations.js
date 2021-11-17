export default {

  // getters:computedプロパティのvuex版みたいなもの。計算とかをしてグローバルに使用することができる


  // バグを生みやすいのがグローバル変数。参照なのか書き換えなのか分からない。
  // mutations以外では値を変更できないようにする。正しくは値の変更はここでしか行わないようにする
  // mutationsで変更することで値を追跡しやすくできる
  // mutationsは同期的な処理しかかけない。
  updateMessage(state, newMessage) {
    state.message = newMessage
  }
};
