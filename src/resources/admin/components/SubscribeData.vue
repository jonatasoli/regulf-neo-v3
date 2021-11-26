<template>
      <div>
        <h4>Define subscribe Plan</h4>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Limit</th>
              <th>Quantity/week</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free</td>
              <td>10 searchs per week</td>
              <td>10</td>
              <td>
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
                  type="button"
                />
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
              </td>
            </tr>
            <tr class="bg-emerald-200">
              <td>Paid</td>
              <td>Unlimited</td>
              <td>-</td>
              <td>
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
                  type="button"
                />
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
        <CreateSubscriber v-if="isSubscribe" />
      </div>
</template>

<script>
import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import CreateSubscriber from "@/resources/admin/components/CreateSubscriber"

export default {
  name: "AdminDash",
  components: {
    PencilIcon,
    PlusIcon,
    MinusIcon,
    CreateSubscriber
  },
  data() {
    return {
      isSubscribe: false,
    }
  },
  methods: {
    createSubscribe() {
      this.isSubscribe = !this.isSubscribe
    }
  }
};
</script>
