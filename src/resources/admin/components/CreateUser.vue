<template>
  <div class="container flex justify-center">
      <div class="p-4 shadow-md rounded-md text-left" style="max-width: 400px">
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input v-model="newUser.name" class="form-input mt-1 block w-full" placeholder="Jane Doe" />
      </label>

      <label class="block">
        <span class="text-gray-700">Email</span>
        <input class="form-input mt-1 block w-full" placeholder="Jane Doe" />
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
            />
            <span class="ml-2">Free User</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio"
              name="accountType"
              value="paid"
            />
            <span class="ml-2">Paid</span>
          </label>
        </div>
      </div>

      <label class="block mt-4">
        <span class="text-gray-700">Expire</span>
        <Datepicker v-model="date"></Datepicker>
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

<script>
    import Datepicker from 'vue3-date-time-picker';
    import 'vue3-date-time-picker/dist/main.css'
export default {
  name: "CreateUser",
  components: { Datepicker },
  data() {
      return {
          date: null,
          newUser: {
            name: "",
            email: "",
            accountType: "",
            expire: null,
        }
      };
  },
  methods: {
    createNewUser() {
      return true;
    }
  }

}
</script>
