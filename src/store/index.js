import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import authClient from "./../resources/user/services/auth-client";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: useStorage([]),
  }),
  actions: {
        login: async(user) => {
            try {
                console.log(user)
                const response = await authClient.login(user)
                console.log(response)
                this.user = response
            } catch(error){
                console.log(error)
            }
    },
    register() {
      this.user = {
        id: 1,
        name: "Steve Nash",
        mail: "nash@nash.com",
        subscribe: "Paid User",
        expiration: "11-11-2111",
        limits: "* unlimited searchs per day",
        token: "yyyy",
        token_type: "bearer",
        role: 1
      };
    },
    logout() {
        this.user = "undefined"
    },
    checkUserInformation() {
      console.log(user);
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
  getters: {
    getToken: (state) => {
      if (state.user) {
        return state.user.token;
      }
    },
    getUser: (state) => {
      return state.user;
    },
  },
});
