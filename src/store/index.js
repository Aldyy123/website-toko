import { createStore } from 'vuex'
import axios from 'axios'
import { config } from './config'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async getToken () {
      try {
        const result = await axios.get(`${config.api_url}products/token`)
        return result.data.token
      } catch (error) {
        console.log(error)
      }
    },
    async listBlogs () {
      const api = axios.get(`${config.api_url}blogs`, { headers: { Authorization: await this.dispatch('getToken') } })
      return api
    }
  },
  modules: {
  }
})
