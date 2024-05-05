<template>
  <div class="hidden md:flex fixed bottom-2 right-4 z-50">
    <div class="flex flex-col mx-auto gap-2 w-1/3 justify-center items-center">
      <div
        class="bg-secondary p-2 flex flex-col gap-2 rounded-xl transition ease-in-out hover:scale-104"
        style="border: 1px solid #ffffff">
        <img
          :src="'images/tradgo_QRcode_image.png'"
          alt=""
          srcset=""
          class="h-[140px] w-[140px] rounded-md" />
        <div class="flex justify-center text-white">
          <span>Download App</span>
          <img
            :src="'images/tradgo_store_image/playstore.svg'"
            alt="playstore"
            class="ml-2" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex md:hidden items-center justify-between gap-2 fixed bottom-0 left-0 p-2 z-50 bg-darkGrey w-full">
    <div class="flex items-center gap-2">
      <img
        :src="'images/tradgo_store_image/playstore.svg'"
        alt="PlayStroe"
        class="flex-none w-10 h-10 gap-2" />
      <p class="m-0 text-white font-medium">
        Experience <span class="text-primary">Tradgo</span> For all the payment
        needs
      </p>
    </div>
    <a
      href="https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN&gl=US"
      class="decoration-none"
      target="_blank"
      ><Button label="Download"
    /></a>
  </div>
</template>
<!-- https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN&gl=US -->
<script setup></script>

<style lang="scss" scoped></style>
