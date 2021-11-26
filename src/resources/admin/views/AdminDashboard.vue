<template>
  <Header />
  <main>
    <div class="painel grid grid-cols-12 gap-2 flex flex-row">
      <div class="menu col-span-3">
        <SideNav
          @dashboard-select="dashboardSelect"
        />
      </div>
      <div class="dashboard flex-grow col-span-7 bg-yellow-200">

  <UserData v-if="isUser" />
  <SubscribeData v-if="isSubscribe" />
  <PaywallData v-if="isPayWall" />
      </div>
    </div>
  </main>
</template>

<script>
import { LockClosedIcon, PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import Header from "@/components/shared/Header.vue";
import UserData from "@/resources/admin/components/UserData"
import SubscribeData from "@/resources/admin/components/SubscribeData"
import PaywallData from "@/resources/admin/components/PaywallData"
import SideNav from "@/resources/admin/components/SideNav"

export default {
  name: "AdminDash",
  components: {
    LockClosedIcon,
    PencilIcon,
    PlusIcon,
    MinusIcon,
    Header,
    UserData,
    SubscribeData,
    PaywallData,
    SideNav,
  },
  data() {
    return {
      isUser: false,
      isSubscribe: false,
      isPayWall: false,
      isDashboard: false,
    }
  },
  methods: {
    dashboardSelect(params) {
      const dashObject = params;
      this.isUser = dashObject.isUser;
      this.isSubscribe = dashObject.isSubscribe;
      this.isPayWall = dashObject.isPayWall;
    },
  }

};
</script>

<style lang="sass" scoped>
.painel
  margin: 1em

.menu
  color: white

.dashboard
  color: black
</style>
