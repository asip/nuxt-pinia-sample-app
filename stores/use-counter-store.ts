import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter", () => {
    const count = ref(0);
    function increment() {
      count.value++;
    }
    function decrement() {
      count.value--;
    }
    return { count, increment, decrement };
  },

  //persistを追加して状態を保持する
  {
    persist: {
      // セッションストレージに保存する場合
      storage: piniaPluginPersistedstate.sessionStorage()
      // クッキーに保存する場合
      // storage: piniaPluginPersistedstate.cookies,
    }
  }
);
