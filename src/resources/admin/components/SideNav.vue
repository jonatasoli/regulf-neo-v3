<template>
  <div class="flex flex-col h-full p-3 w-60 bg-white text-gray-800">
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <h2>Dashboard</h2>
        <button @click="getDashboard" class="p-2 dashbutton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5 fill-current text-gray-800"
          >
            <rect width="352" height="32" x="80" y="96"></rect>
            <rect width="352" height="32" x="80" y="240"></rect>
            <rect width="352" height="32" x="80" y="384"></rect>
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <ul class="pt-2 pb-4 space-y-1 text-sm">
          <li class="rounded-sm">
            <router-link
              :to="{ name: 'Home' }"
              class="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5 fill-current text-gray-600"
              >
                <path
                  d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"
                ></path>
              </svg>
              <span>Home</span>
            </router-link>
          </li>
          <li class="rounded-sm">
            <button
              @click="getUser"
              class="flex items-center p-2 space-x-3 rounded-md buttonuser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-5 h-5 fill-current text-gray-600"
              >
                <path
                  d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                ></path>
              </svg>
              <span>Manage User</span>
            </button>
          </li>
          <li class="rounded-sm">
            <button
              @click="getSubscribe"
              class="flex items-center p-2 space-x-3 rounded-md buttonsubscribe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-5 h-5 fill-current text-gray-600"
              >
                <path
                  d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"
                ></path>
              </svg>
              <span>Subscribe</span>
            </button>
          </li>
          <li class="rounded-sm">
            <button
              @click="getPaywall"
              class="flex items-center p-2 space-x-3 rounded-md buttonpaywall"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-5 h-5 fill-current text-gray-600"
              >
                <path
                  d="M17.728,4.419H2.273c-0.236,0-0.429,0.193-0.429,0.429v10.304c0,0.234,0.193,0.428,0.429,0.428h15.455c0.235,0,0.429-0.193,0.429-0.428V4.849C18.156,4.613,17.963,4.419,17.728,4.419 M17.298,14.721H2.702V9.57h14.596V14.721zM17.298,8.712H2.702V7.424h14.596V8.712z M17.298,6.566H2.702V5.278h14.596V6.566z M9.142,13.005c0,0.235-0.193,0.43-0.43,0.43H4.419c-0.236,0-0.429-0.194-0.429-0.43c0-0.236,0.193-0.429,0.429-0.429h4.292C8.948,12.576,9.142,12.769,9.142,13.005"
                ></path>
              </svg>
              <span>Paywall Banner</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, TicketIcon, ViewBoardsIcon } from "@heroicons/vue/solid";
export default {
  name: "AdminDash",
  components: { UserIcon, TicketIcon, ViewBoardsIcon },
  data() {
    return {
      isDashboard: {},
      isUser: true,
      isSubscribe: true,
      isPayWall: true,
    };
  },
  /* watch: { */
  /*   dashboardSelect() { */
  /*     this.$emit("dashboard-select", this.isDashboard); */
  /*   }, */
  /* }, */
  methods: {
    getUser() {
      const isDashboard = {
        isUser: true,
        isSubscribe: false,
        isPayWall: false,
      };
      this.$emit("dashboard-select", isDashboard);
    },
    getSubscribe() {
      const isDashboard = {
        isUser: false,
        isSubscribe: true,
        isPayWall: false,
      };
      this.$emit("dashboard-select", isDashboard);
    },
    getPaywall() {
      const isDashboard = {
        isUser: false,
        isSubscribe: false,
        isPayWall: true,
      };
      this.$emit("dashboard-select", isDashboard);
    },
  },
};
</script>
