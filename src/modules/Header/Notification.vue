<template>
  <div class="card">
    <div class="flex gap-2 justify-content-center cursor-pointer">
      <div class="relative">
        <svg
          class="mx-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#a6a6a7"
          @click="visibleRight = true"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1155_5641)">
            <path
              d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_1155_5641">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <span
          class="bg-red-700 absolute top-0 right-1.5 h-1.5 w-1.5 rounded-full"></span>
      </div>
    </div>

    <Sidebar
      v-model:visible="visibleRight"
      position="right"
      class="w-full md:w-50vw lg:w-40vw xl:w-30vw">
      <template #header>
        <div class="flex items-center gap-2">
          <span class="font-bold text-secondary text-xl">Notification</span>
          <span
            class="font-medium bg-secondary text-white px-2 py-1 rounded-full"
            >5 New</span
          >
        </div>
      </template>
      <div class="flex flex-col gap-2">
        <div
          v-for="tab in notification"
          :key="tab.id"
          class="p-2 md:p-4 rounded flex justify-between gap-2"
          style="
            border: 1px solid rgba(0, 0, 0, 0.125);
            box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);
          ">
          <div class="flex flex-row gap-2">
            <div>
              <img
                :src="'public/images/tradgo_boy_model/tradgo_boy_default_icon.png'"
                alt="TG"
                class="h-8 md:h-12 w-8 md:w-12" />
            </div>
            <div class="flex flex-col gap-1">
              <p class="m-0 text-xl font-medium">{{ tab.id }}</p>
              <p class="m-0 text-text">
                {{ tab.massage }}
              </p>
            </div>
          </div>
          <div>
            <p class="m-0 text-text">{{ tab.time }}</p>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Sidebar from "primevue/sidebar";

  const visibleRight = ref(false);

  const notification = ref([
    {
      id: "TRADGO279194",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "14h",
    },
    {
      id: "TRADGO279195",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "16h",
    },
    {
      id: "TRADGO279196",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "19h",
    },
    {
      id: "TRADGO279197",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "22h",
    },
    {
      id: "TRADGO279198",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "1d",
    },
    {
      id: "TRADGO279199",
      massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      time: "2d",
    },
  ]);
</script>
