<template>
  <Header />
  <main>
    <div class="painel grid grid-cols-12 gap-2 flex flex-row">
       <div class="menu flex flex-col bg-purple-500 col-span-3 ">
         <button>dashboard</button>
         <button>users</button>
         <button>plans</button>
       </div>
       <div class="dashboard flex-grow col-span-7 bg-yellow-200">
         <div>1</div>
         <div>2</div>
         <div>3</div>
         <div>4</div>
         <div>5</div>
       </div>
    </div>
  </main>
</template>


<script>
import { LockClosedIcon } from "@heroicons/vue/solid";
import Header from "@/components/shared/Header.vue";

export default {
  name: "AdminDash",
  components: {
    LockClosedIcon,
    Header,
  },
}
</script>

<style lang="sass" scoped>
.painel
  margin: 1em

.menu
  color: white

.dashboard
  color: black

</style>
