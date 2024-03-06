import { defineStore } from 'pinia'
import { ref } from 'vue'

// 计数模块
export const useCountStore = defineStore('big-count', () => {
  const count = ref(1000)
  const add = (n) => {
    count.value += n
  }
  return {
    count,
    add
  }
})
