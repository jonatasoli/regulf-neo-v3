<script>
import { mapActions } from "pinia";
import { useAdminStore } from "@/store/index";

export default {
  name: "CreateSubscriber",
  data() {
    return {
      date: null,
      newSubscriber: {
        name: "",
        limit: "",
        quantity: 1,
      },
    };
  },
  methods: {
    ...mapActions(useAdminStore, ["saveSubscribe"]),
    newSubscribe() {
      console.log(this.newSubscriber);
      this.saveSubscribe(this.newSubscriber);
      this.newSubscriber = {
        name: "",
        limit: "",
        Quantity: 1,
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
          v-model="newSubscriber.name"
          class="form-input mt-1 block w-full"
          placeholder="Subscribe Name"
        />
      </label>

      <label class="block">
        <span class="text-gray-700">Limit</span>
        <input
          v-model="newSubscriber.limit"
          class="form-input mt-1 block w-full"
          placeholder="Subscribe description"
        />
      </label>

      <label class="block">
        <span class="text-gray-700">Qty per Week</span>
        <input
          v-model="newSubscriber.quantity"
          type="number"
          class="form-input mt-1 block w-full"
          placeholder="Subscriber Quantity"
        />
      </label>

      <div class="flex mt-6">
        <button
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
          @click="newSubscribe"
          type="button"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
