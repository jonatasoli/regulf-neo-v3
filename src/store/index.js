import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import authClient from "./../resources/user/services/auth-client";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: useStorage('user', [])
  }),
  getters: {
    getToken: (state) => {
      if (state.user) {
        return state.user.token;
      }
    },
    getUser: (state) => {
      console.log("Estado do usuário")
      console.log(state.user)
      return state.user;
    },
  },
  actions: {
        async userLogin(user_data) {
            try {
                const response = await authClient.login(user_data)
                this.user = response
            } catch(error){
                console.log("Erro na action")
                console.log(error)
            }
        },
        async userRegister(user_data) {
            try {
                const response = await authClient.signup(user_data)
                this.user = response
            } catch(error){
                console.log("Erro na action")
                console.log(error)
            }
        },
        logout() {
            this.user = "undefined"
        },
        checkUserInformation() {
          console.log(user);
          console.log("Não usar")
          return {
            id: 1,
            name: "Mary Kate",
            mail: "test@test.com",
            subscribe: "Paid User",
            expiration: "21-12-2022",
            limits: "* unlimited searchs per day",
          };
        },
  },
});
