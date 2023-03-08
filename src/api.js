import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const API_TOKEN = import.meta.env.VITE_API_TOKEN

axios.defaults.baseURL = API_URL
axios.defaults.headers.common['X-RapidAPI-Key'] = API_TOKEN
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default {
  getRandomJoke() {
    return axios.get('/random/joke')
  }
}
