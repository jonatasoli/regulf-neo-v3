<template>
  <Header />
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                User Subscribe
              </h3>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div
                  class="
                    bg-gray-50
                    px-4
                    py-5
                    sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                  "
                >
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ getUser.name }}
                  </dd>
                </div>
                <div
                  class="
                    bg-gray-50
                    px-4
                    py-5
                    sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                  "
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ getUser.mail }}
                  </dd>
                </div>
                <div
                  class="
                    bg-white
                    px-4
                    py-5
                    sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                  "
                >
                  <dt class="text-sm font-medium text-gray-500">Subscribe</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ getUser.subscribe }}
                  </dd>
                </div>
                <div
                  class="
                    bg-white
                    px-4
                    py-5
                    sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                  "
                >
                  <dt class="text-sm font-medium text-gray-500">
                    Expiration Date
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ getUser.expiration }}
                  </dd>
                </div>
                <div
                  class="
                    bg-gray-50
                    px-4
                    py-5
                    sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                  "
                >
                  <dt class="text-sm font-medium text-gray-500">Limits</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ getUser.limits }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useUserStore } from "@/store/index";

export default {
  name: "User-Page",
  components: {
    Header,
  },
  computed: {
    ...mapState(useUserStore, ["getUser"]),
  },
  methods: {
    ...mapState(useUserStore, ["getToken", "getUser", "checkUserInformation"]),
    ...mapActions(useUserStore, ["login", "register"]),
    getUserInformation() {
      user = this.getUser();
      console.log("user", user);
      return user;
      /* return this.checkUserInformation() */
    },
  },
};
</script>
