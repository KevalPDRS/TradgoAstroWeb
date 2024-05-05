<template>
  <div class="flex relative py-16">
    <img
      :src="'images/tradgo_bg_image/daskbord_bg_image.png'"
      class="w-full absolute top-0 left-0 h-full"
      alt="banner"
      title="banner" />
    <div class="container mx-auto flex">
      <div
        class="left-side-banner w-1/2 relative z-2 flex items-center justify-center">
        <div class="flex flex-col gap-8">
          <h2 class="text-white text-2xl md:text-6xl font-bold m-0">
            Apki Digital Duniya
          </h2>

          <ul class="text-white flex flex-col gap-4">
            <li
              v-for="(val, i) in instruction"
              :key="i"
              class="flex gap-2 items-center">
              <img
                :src="'images/green-right.svg'"
                alt="green-right"
                class="w-6 h-6 p-1 bg-success rounded-full"
                title="green-right" />
              <span>{{ val }}</span>
            </li>
          </ul>
          <div class="download-sr flex gap-4">
            <img
              :src="'images/tradgo_store_image/app_store_light_badge.png'"
              alt="app-store"
              class="w-[136px] h-[40]"
              title="app-store" />
            <img
              :src="'images/tradgo_store_image/google_play_light_badge.png'"
              alt="google-play"
              class="w-[136px] h-[40]"
              title="google-play" />
          </div>
        </div>
      </div>
      <div
        class="left-side-banner w-1/2 relative z-[2] flex justify-center items-center">
        <img
          :src="'/images/tradgo_bg_image/tradgo_app_view_image_01.png'"
          alt="mobile-section"
          class="hidden md:flex max-w-80"
          title="mobile-section" />
        <img
          class="flex md:hidden max-w-40"
          :src="'/images/tradgo_boy_model/Tradgo_Boy_Mobile_01.png'"
          alt="Tradgo_Boy_Mobile_01" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const instruction = [
    "Recharge & Utility Bill Payment",
    "Bus Booking In Just Few Clicks",
    "Book Near by Services & Products",
  ];
</script>
