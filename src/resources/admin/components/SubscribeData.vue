<script>
import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import CreateSubscriber from "@/resources/admin/components/CreateSubscriber"

import { mapActions, mapState } from "pinia";
import { useAdminStore } from "@/store/index";


export default {
  name: "SubscribeForm",
  components: {
    PencilIcon,
    PlusIcon,
    MinusIcon,
    CreateSubscriber
  },
  data() {
    return {
      isSubscribe: false,
      newSubscriber: {
        id: 0,
        name: '',
        limit: '',
        quantity: 1,
      }
    }
  },
  computed: {
    ...mapState(useAdminStore, [
      "getSubscribes",
    ]),
    subscribes() {
      return this.getSubscribes;
    },
  },
  methods: {
    ...mapActions(useAdminStore, [
                    "deleteSubscribeState",
                    "saveSubscribe",
                    "loadSubscribes"
                ]),
    createSubscribe() {
      this.isSubscribe = !this.isSubscribe
    },
    editSubscribe(subscribe) {
      this.isSubscribe = true;
      console.log(subscribe);
      this.newSubscriber = {
        id: subscribe.id,
        name: subscribe.name,
        limit: subscribe.limit,
        quantity: subscribe.quantity,
      };
    },
    deleteSubscribe(subscribe) {
      console.log("subscribe delete", subscribe);
      this.deleteSubscribeState(subscribe);
    },
    createNewSubscribe() {
      console.log("entrei")
      const _subscribe = {
        name: this.newSubscriber.name,
        limit: this.newSubscriber.limit,
        quantity: this.newSubscriber.quantity,
      };
      this.saveSubscribe(_subscribe);
      this.newSubscriber = {
        name: "",
        limit: "",
        quantity: 1,
      };
    },
  },

  mounted() {
    this.loadSubscribes();
  },
};
</script>

<template>
      <div>
        <h4>Define subscribe Plan</h4>
        <table class="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Limit</th>
              <th>Quantity/week</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subscribe) in subscribes" :key="subscribe.id">
              <td>{{ subscribe.id }}</td>
              <td>{{ subscribe.name }}</td>
              <td>{{ subscribe.limit }}</td>
              <td>{{ subscribe.quantity }}</td>
              <td>
                <button :id="`btn-edit-${subscribe.id}`" @click="editSubscribe(subscribe)">
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

                <button :id="`btn-delete-${subscribe.id}`" @click="deleteSubscribe(subscribe)">
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
                />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
              @click="createSubscribe"
              type="button"
            >Create New Subscribe
            </button>
        </div>
          <div v-if="isSubscribe" class="container flex justify-center">
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
                  @click="createNewSubscribe"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
      </div>
</template>

