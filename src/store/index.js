import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const useUserStore = defineStore('user', {
  state: () => ({
    user: useStorage('user', [])
  }),
  actions: {
    login() {
      this.user = {'id': 1, 'name': 'John Doe', 'mail': 'test@email.com', 'subscribe': 'Free User', 'expiration': 'never', 'limits': '* 10 searchs per day * 30 searchs per week'}

    },
    register() {
      this.user = {'id': 2, 'token': "yyyyyy"}
    },
    checkUserInformation() {
      console.log(user);
      return {'id': 1, 'name': 'John Doe', 'mail': 'test@email.com', 'subscribe': 'Free User', 'expiration': 'never', 'limits': '* 10 searchs per day * 30 searchs per week'}
    }
  },
  getters: {
    getToken: (state) => {
        return state.user.token
    },
    getUser: (state) => {
        return state.user
    }
  }
})
