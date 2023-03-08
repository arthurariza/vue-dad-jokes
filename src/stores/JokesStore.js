import { defineStore } from 'pinia'
import api from '@/api'

export const useJokesStore = defineStore('jokes', {
  state: () => {
    return {
      loading: false,
      error: '',
      randomJoke: {
        type: 'programming',
        setup: 'There are  types of people in this world...',
        punchline: "Those who understand binary and those who don't"
      }
    }
  },
  actions: {
    async getRandomJoke() {
      try {
        this.$state = { loading: true }

        const res = await api.getRandomJoke()
        const { type, setup, punchline } = res.data.body[0]

        this.$state = {
          randomJoke: {
            type,
            setup,
            punchline
          }
        }
        this.$state = { loading: false }
      } catch (e) {
        this.$state = {
          loading: false,
          error: 'The Daily Random Dad Jokes Limit Was Reached! Try Again Tomorrow!'
        }
      }
    }
  }
})
