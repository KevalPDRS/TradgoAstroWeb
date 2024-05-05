<template>
  <div class="flex flex-col items-end">
    <div
      class="mr-20"
      style="
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 4px solid #d6d6d6;
      "></div>
    <div
      class="list-none bg-white min-w-64 shadow-xl rounded-lg shadow-xl py-2"
      style="border-top: 2px solid #d6d6d6">
      <div class="px-4">
        <p class="m-0 text-xl">Tradgo User</p>
        <p class="m-0 text-primary">98989898</p>
      </div>
      <hr class="mx-4" />
      <div class="flex items-center justify-between mx-4">
        <div class="flex-1">
          <div class="d-flex flex-column justify-content-start">
            <p class="m-0">Wallet Balance</p>
            <div class="text-lg">
              ₹<span class="font-600 text-xl">888888</span>
            </div>
          </div>
        </div>
        <div
          class="p-2 rounded-xl flex items-center gap-2 hover:bg-primary text-primary hover:text-white transition duration-300"
          style="border: 1px solid #20a7db">
          <p class="m-0">Add</p>
          <svg
            class="rounded-full"
            style="border: 1px solid #ffffff"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="30" height="30" rx="15" fill="#20A7DB" />
            <rect
              x="6"
              y="16.5"
              width="2"
              height="18"
              rx="1"
              transform="rotate(-90 6 16.5)"
              fill="white" />
            <rect x="14" y="6.5" width="2" height="18" rx="1" fill="white" />
          </svg>
        </div>
      </div>
      <hr class="mx-4" />
      <div v-for="(item, index) in items" :key="index" class="hover:bg-gray-1">
        <a
          :href="item.url"
          class="flex items-center gap-2 px-4 py-2 decoration-none text-black transition transform hover:translate-x-1">
          <img :src="item.imageUrl" :alt="item.title" class="w-8 h-8" />
          <p class="m-0">{{ item.title }}</p>
        </a>
      </div>
      <div class="hover:bg-gray-1">
        <a
          @click="visibleBottom = true"
          class="flex items-center gap-2 px-4 py-2 decoration-none text-black transition transform hover:translate-x-1">
          <img
            :src="'./public/images/Home_dropdown/Rate_And_Review_Icon.png'"
            :alt="'Rate & Review'"
            class="w-8 h-8" />
          <p class="m-0">Rate & Review</p>
        </a>
      </div>
      <Sidebar
        v-model:visible="visibleBottom"
        header="Bottom Sidebar"
        position="bottom"
        style="height: auto">
        <div>
          <Rating v-model="rating" :cancel="false" />
        </div>
      </Sidebar>
    </div>
  </div>
</template>

<script setup>
  import { items } from "./headerDropdown.ts";

  // import { ref } from "vue";
  const visibleBottom = ref(false);
  import { ref, watch } from "vue";

  const rating = ref(null);

  watch(rating, (newRating) => {
    if (newRating > 3) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN&gl=US",
        "_blank"
      );
    }
  });
</script>

<style scoped></style>
