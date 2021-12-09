<script>
import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { mapState, mapActions } from "pinia";
import { useAdminStore } from "@/store/index";

export default {
  name: "AdminDash",
  components: {
    PencilIcon,
    PlusIcon,
    MinusIcon,
  },
  data() {
    return {
      paywall_message: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {},
    };
  },
  computed: {
    ...mapState(useAdminStore, ["getPaywallMessage"]),
  },
  methods: {
    ...mapActions(useAdminStore, ["savePaywallMessage", "loadPaywallMessage"]),
    saveMessage() {
      this.savePaywallMessage(this.editorData);
      console.log("saved");
    },
  },
  async mounted() {
    this.editorData = await this.loadPaywallMessage();
  },
};
</script>

<template>
  <div class="flex flex-col flex-wrap justify-center">
    <label class="float" style="max-width: 30em">
      <span class="text-gray-700">Paywall limit message</span>
    </label>
    <div>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
    </div>
    <div>
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
        @click="saveMessage"
        type="button"
      >
        Save Message
      </button>
    </div>
  </div>
</template>
