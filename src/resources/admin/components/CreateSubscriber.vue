<template>
  <div class="container flex justify-center">
      <div class="p-4 shadow-md rounded-md text-left" style="max-width: 400px">
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input class="form-input mt-1 block w-full" placeholder="Jane Doe" />
      </label>

      <label class="block">
        <span class="text-gray-700">Limit</span>
        <input class="form-input mt-1 block w-full" placeholder="Jane Doe" />
      </label>

      <label class="block">
        <span class="text-gray-700">Qty per Week</span>
        <input class="form-input mt-1 block w-full" placeholder="Jane Doe" />
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
          @click="saveSubscribe"
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
  name: "CreateSubscriber",
  components: { Datepicker },
  data() {
      return {
          date: null,
      }
  },
  methods: {
    saveSubscribe() {
      
    }
  }
}
</script>
