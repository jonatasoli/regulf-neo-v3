<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import { mapState, mapActions } from "pinia";
import { useAdminStore } from "@/store/index";

export default {
  name: "CreateUser",
  components: { Datepicker },
  data() {
    return {
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
    ...mapState(useAdminStore, ["getUsers"]),
  },
  methods: {
    ...mapActions(useAdminStore, ["saveUser"]),
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
    resetForm() {
      this.newUser = {
        name: "",
        email: "",
        accountType: "",
        expire: undefined,
      };
    },
    fillForm(user) {
      this.newUser = {
        name: user.name,
        email: user.email,
        accountType: user.accountType,
        expire: user.expire,
      };
    },
  },
};
</script>

<template>
  <div class="container flex justify-center">
    <div class="p-4 shadow-md rounded-md text-left" style="max-width: 400px">
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
</template>
