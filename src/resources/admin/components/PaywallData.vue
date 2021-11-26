<template>
<div class="flex flex-col flex-wrap justify-center">
    <label class="float" style="max-width: 30em;">
      <span class="text-gray-700">Textarea</span>
      <textarea
        class="form-textarea mt-1 float w-full"
        rows="3"
        placeholder="Enter some long form content."
      ></textarea>
    </label>
    <div>
      <button
        class=" text-purple-500
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
        Save Message
      </button>
    </div>
</div>
</template>

<script> import { PencilIcon, PlusIcon, MinusIcon } from "@heroicons/vue/solid"; export default { name: "AdminDash", components: { PencilIcon, PlusIcon, MinusIcon, }, };
</script>
