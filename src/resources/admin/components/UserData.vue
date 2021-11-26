<template>
      <div class="container">
        <h4>Manage Users</h4>
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
            <tr>
              <td>John Doe</td>
              <td>email@email.com</td>
              <td>free</td>
              <td>10 search per week</td>
              <td>21-12-2021</td>
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

              <td>
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
                  type="button"
                >
                  Upgrade
                </button>
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
                  type="button"
                >
                  Downgrade
                </button>
              </td>
            </tr>
            <tr class="bg-emerald-200">
              <td>Mary Jane</td>
              <td>mary@email.com</td>
              <td>paid</td>
              <td>unlimited</td>
              <td>21-12-2021</td>
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
              <td>
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
                  type="button"
                >
                  Upgrade
                </button>
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
                  type="button"
                >
                  Downgrade
                </button>
              </td>
            </tr>
            <tr>
              <td>Ash Ketchum</td>
              <td>ash@email.com</td>
              <td>paid</td>
              <td>unlimited</td>
              <td>21-12-2021</td>
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

              <td>
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
                  type="button"
                >
                  Upgrade
                </button>
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
                  type="button"
                >
                  Downgrade
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
              @click="createUser"
              type="button"
            >Create User
            </button>
        </div>
        <CreateUser v-if="isCreated" />

      </div>
</template>

<script>
import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import CreateUser from "@/resources/admin/components/CreateUser"

export default {
  name: "AdminDash",
  components: {
    PencilIcon,
    PlusIcon,
    MinusIcon,
    CreateUser,
  },
  data() {
    return {
      isCreated: false,
    }
  },
  methods: {
    createUser() {
      this.isCreated = !this.isCreated
    }
  }
};
</script>
