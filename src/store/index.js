import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import authClient from "./../resources/user/services/auth-client";
import adminClient from "./../resources/admin/services/admin-client";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: useStorage("user", []),
  }),
  getters: {
    getToken: (state) => {
      if (state.user) {
        return state.user.token;
      }
    },
    getUser: (state) => {
      console.log("Estado do usuário");
      console.log(state.user);
      return state.user;
    },
  },
  actions: {
    async userLogin(user_data) {
      try {
        const response = await authClient.login(user_data);
        this.user = response;
      } catch (error) {
        console.log("Erro na action");
        console.log(error);
      }
    },
    async userRegister(user_data) {
      try {
        const response = await authClient.signup(user_data);
        this.user = response;
      } catch (error) {
        console.log("Erro na action");
        console.log(error);
      }
    },
    logout() {
      this.user = "undefined";
    },
    checkUserInformation() {
      console.log(user);
      console.log("Não usar");
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

export const useAdminStore = defineStore("admin", {
  state: () => ({
    users: [],
    subscribes: [],
    paywall_message: "",
  }),
  getters: {
    getUsers: (state) => {
      if (state.users) {
        return state.users;
      }
    },
    getSubscribes: (state) => {
      return state.subscribes;
    },
    getPaywallMessage: (state) => {
      return state.paywall_message;
    },
  },
  actions: {
    async loadUsers() {
      const response = await adminClient.load_users();
      console.log(response)
      this.users = response
    },
    async saveUser(user_data) {
      try {
        const index = this.users.findIndex((u) => u.email === user_data.email);
        // const response = await adminClient.save_user(user_data);
        // user_data = response;
        // console.log(response)
        if (index >= 0) {
          this.users[index] = user_data;
        } else {
          this.users.push(user_data);
        }
      } catch (error) {
        console.log("Error in save user");
        console.log(error);
      }
    },
    async deleteUserState(user) {
      try {
        // const response = await adminClient.delete_user(user.email);
        // console.log(response)

        const indice = this.users.findIndex((t) => t.email === user.email);
        console.log("indice", indice);
        this.users.splice(indice, 1);
      } catch (error) {
        console.log("Error in delete user");
        console.log(error);
      }
    },
    async loadSubscribes() {
      const response = await adminClient.load_subscribes();
      console.log(response)
      this.subscribes = response
    },
    async saveSubscribe(subscribe_data) {
      try {
        // const response = await adminClient.save_subscribe(user_data);
        // this.subscribes = response;
        // const index = this.users.findIndex((u) => u.id === subscribe_data.id);
        // if (index >= 0) {
        //   this.subscribes[index] = subscribe_data;
        // } else {
        //   this.subscribes.push(subscribe_data);
        // }
        console.log("mais um subscribe", subscribe_data)
        const _sub = {
          id: 3,
          name: "test",
          limit: 'mock',
          quantity: 30,
        }
        this.subscribes.push(_sub);
      } catch (error) {
        console.log("Error in save subscribe");
        console.log(error);
      }
    },
    async deleteSubscribeState(subscribe){
      try {
        // const response = await adminClient.delete_subscribe(user);
        // console.log(response)

        const indice = this.users.findIndex((t) => t.id === subscribe.id);
        console.log("indice", indice);
        this.subscribes.splice(indice, 1);
      } catch (error) {
        console.log("Error in delete user");
        console.log(error);
      }
    },
    async loadPaywallMessage() {
      this.paywall_message = await adminClient.load_paywall_message();
      return this.paywall_message;
    },
    async savePaywallMessage(message) {
      try {
        // const response = await adminClient.save_paywall_message(message);
        // this.paywall_message = response;
        console.log("A viagem", message);
        this.paywall_message = message;
      } catch (error) {
        console.log("Erro na action");
        console.log(error);
      }
    },
  },
});
