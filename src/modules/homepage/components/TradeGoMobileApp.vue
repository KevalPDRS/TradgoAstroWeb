<template>
  <div class="container mx-auto p-8 black md:flex my-4 md:my-8 relative">
    <div class="flex flex-col mx-auto gap-2 w-1/3 justify-center items-center">
      <div class="bg-secondary p-2 flex flex-col gap-2 rounded-xl">
        <img
          :src="'images/tradgo_QRcode_image.png'"
          alt=""
          srcset=""
          class="h-[180px] w-[180px] rounded-md" />
        <div class="flex justify-center text-white">
          <span>Download App</span>
          <img
            :src="'images/tradgo_store_image/playstore.svg'"
            alt=""
            srcset=""
            class="ml-2" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-4 md:gap-8 p-4">
      <p class="m-0 text-2xl md:text-3xl font-bold text-center md:text-start">
        Download Our Tradego Mobile App Now
      </p>
      <p class="m-0 text-center md:text-start">
        Download our app for the fastest, most convenient way to Recharge & Bill
        Payment, Booking and more
      </p>
      <div
        class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <img
          :src="'images/tradgo_store_image/app_store_dark_badge.png'"
          alt="app-store"
          class="w-[136px] h-[40] mx-auto sm:mx-0"
          title="app-store" />
        <img
          :src="'images/tradgo_store_image/google_play_dark_badge.png'"
          alt="google-play"
          class="w-[136px] h-[40] mx-auto sm:mx-0"
          title="google-play" />
      </div>
    </div>
  </div>
</template>
