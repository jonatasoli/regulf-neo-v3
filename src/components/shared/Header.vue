<template>
  <nav class="nav-custom">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div v-if="user=='undefined'" class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              @click="islogout()"
              >
                Logout
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <a href="https://reguleque.cl/"
              >Reguleque <img class="block lg:hidden h-8 w-auto"
              src=@/assets/logo.png alt="Reguleque">
            </a>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link v-if="user!='undefined'"
                :to="{ name: 'Dashboard' }"
                class="
                  bg-green-900
                  text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                aria-current="page"
                >Dashboard</router-link
              >
              <router-link
                :to="{ name: 'Home' }"
                class="
                  bg-green-900
                  text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                aria-current="page"
                >Search</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div v-if="user=='undefined'">
              <router-link :to="{ name: 'Auth' }">Access </router-link>
            </div>
            <div v-else>
              <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              @click="islogout()"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="user!=[]" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="
            bg-gray-900
            text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          aria-current="page"
          >Dashboard</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/store/index";


export default {
  name: "Header",
  data() {
    return {
      logged: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    auth() {
      return router.push({ name: "auth" });
    },
    islogout() {
      this.logout();
      if (!this.user){
        console.log("esta sem user")
      }
      return this.$router.push({ name: "Home" });
    }
  },
};
</script>
