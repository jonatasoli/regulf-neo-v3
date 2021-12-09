<script>
import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

import { mapActions, mapState } from "pinia";
import { useAdminStore } from "@/store/index";

export default {
  name: "AdminDash",
  components: {
    PencilIcon,
    PlusIcon,
    MinusIcon,
    Datepicker,
  },
  data() {
    return {
      isUser: false,
      date: null,
      userList: null,
      radioAccountType: {
        text: "free",
        text: "paid",
      },
      newUser: {
        name: "",
        email: "",
        accountType: "",
        expire: undefined,
      },
    };
  },
  computed: {
    ...mapState(useAdminStore, [
      "getUsers",
      "getSubscribes",
      "getPaywallMessage",
    ]),
    userList() {
      return this.getUsers;
    },
  },
  methods: {
    ...mapActions(useAdminStore, ["deleteUserState", "saveUser", "loadUsers"]),
    userBox() {
      this.isUser = !this.isUser;
    },
    editUser(user) {
      this.isUser = true;
      console.log(user);
      this.newUser = {
        name: user.name,
        email: user.email,
        accountType: user.subscribe,
        expire: user.expire,
      };
    },
    deleteUser(user) {
      console.log("user delete", user);
      this.deleteUserState(user);
    },
    upgradeUser(user) {
      user.subscribe = "paid";
      console.log(user);
      this.saveUser(user);
    },
    downgradeUser(user) {
      user.subscribe = "free";
      console.log(user);
      this.saveUser(user);
    },
    createNewUser() {
      const _user = {
        name: this.newUser.name,
        email: this.newUser.email,
        subscribe: this.newUser.accountType,
        plan: "save plan",
        expire: this.newUser.expire,
      };
      this.saveUser(_user);
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>

<template>
  <div class="container">
    <h4>Manage Users</h4>
    <div>
      <button
        class="
          bg-purple-500
          text-white
          active:bg-purple-600
          font-bold
          uppercase
          text-sm
          px-4
          py-2
          rounded-full
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        @click="userBox"
        type="button"
      >
        Create User
      </button>
    </div>

    <table class="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subscribe</th>
          <th>Plan</th>
          <th>Expire</th>
          <th>Edit</th>
          <th>Upgrade / Downgrade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in userList" :key="i">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.subscribe }}</td>
          <td>{{ user.plan }}</td>
          <td>{{ user.expire }}</td>
          <td>
            <button :id="`btn-edit-${i}`" @click="editUser(user)">
              <PencilIcon
                class="
                  text-purple-500
                  bg-transparent
                  border border-solid border-purple-500
                  hover:bg-purple-500 hover:text-white
                  active:bg-purple-600
                  text-xs
                  rounded
                  outline-none
                  focus:outline-none
                  h-5
                  w-5
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
              />
            </button>
            <button :id="`btn-delete-${i}`" @click="deleteUser(user)">
              <MinusIcon
                class="
                  text-purple-500
                  bg-transparent
                  border border-solid border-purple-500
                  hover:bg-purple-500 hover:text-white
                  active:bg-purple-600
                  text-xs
                  rounded
                  outline-none
                  focus:outline-none
                  h-5
                  w-5
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
              />
            </button>
          </td>

          <td>
            <button
              v-if="user.subscribe === 'free'"
              class="
                text-purple-500
                bg-transparent
                border border-solid border-purple-500
                hover:bg-purple-500 hover:text-white
                active:bg-purple-600
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              @click="upgradeUser(user)"
              type="button"
            >
              Upgrade
            </button>
            <button
              v-if="user.subscribe === 'paid'"
              class="
                text-purple-500
                bg-transparent
                border border-solid border-purple-500
                hover:bg-purple-500 hover:text-white
                active:bg-purple-600
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
              @click="downgradeUser(user)"
            >
              Downgrade
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isUser">
      <div class="container flex justify-center">
        <div
          class="p-4 shadow-md rounded-md text-left"
          style="max-width: 400px"
        >
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input
              v-model="newUser.name"
              class="form-input mt-1 block w-full"
              placeholder="Digit user name"
            />
          </label>

          <label class="block">
            <span class="text-gray-700">Email</span>
            <input
              v-model="newUser.email"
              class="form-input mt-1 block w-full"
              placeholder="Digit user e-amail"
            />
          </label>

          <div class="mt-4">
            <span class="text-gray-700">Account Type</span>
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="free"
                  v-model="newUser.accountType"
                />
                <span class="ml-2">Free User</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="paid"
                  v-model="newUser.accountType"
                />
                <span class="ml-2">Paid</span>
              </label>
            </div>
          </div>

          <label class="block mt-4">
            <span class="text-gray-700">Expire</span>
            <Datepicker v-model="newUser.expire"></Datepicker>
          </label>

          <div class="flex mt-6">
            <button
              @click="createNewUser"
              class="
                text-purple-500
                bg-transparent
                border border-solid border-purple-500
                hover:bg-purple-500 hover:text-white
                active:bg-purple-600
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
