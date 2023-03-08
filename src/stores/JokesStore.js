import { defineStore } from 'pinia'
import api from '@/api'

export const useJokesStore = defineStore('jokes', {
  state: () => {
    return {
      randomJoke: {
        type: 'programming',
        setup: 'There are  types of people in this world...',
        punchline: "Those who understand binary and those who don't"
      }
    }
  },
  actions: {
    async fill() {
      const res = await api.getRandomJoke()
      console.log(res)
    }
  }
})
