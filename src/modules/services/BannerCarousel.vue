<template>
  <div
    class="container mx-auto pt-2 md:pt-8 pb-0 md:pb-2 rounded-lg shadow-2xl bg-white">
    <div class="flex justify-between">
      <Carousel
        :value="menus"
        :numVisible="3"
        :numScroll="1"
        circular
        :autoplay-interval="5000"
        :responsive-options="responsiveOptions"
        class="w-full">
        <template #item="slotProps">
          <div class="flex flex-col">
            <a
              :href="slotProps.data.imagePageUrl"
              class="flex flex-col mx-auto gap-2 decoration-none text-black">
              <img
                :src="
                  '/images/tradgo_banner/' +
                  slotProps.data.imageItemUrl +
                  '.png'
                "
                class="w-48 md:w-65 rounded-lg"
                :alt="slotProps.data.imageItemUrl"
                :title="slotProps.data.imageItemUrl" />
            </a>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  import Carousel from "primevue/carousel";
  const menus = [
    {
      imageItemUrl: "bus_booking_banner_01",
      imagePageUrl: "/",
    },
    {
      imageItemUrl: "cashback_recharge_banner_01",
      imagePageUrl: "/",
    },
    {
      imageItemUrl: "instagram_banner_02",
      imagePageUrl: "https://www.instagram.com/tradgo_app/",
    },
    {
      imageItemUrl: "refer_and_earn_banner_02",
      imagePageUrl: "/",
    },
    {
      imageItemUrl: "tradgo_business_banner_01",
      imagePageUrl: "/",
    },
    {
      imageItemUrl: "youtube_banner_02",
      imagePageUrl: "https://www.youtube.com/@TradgoApp",
    },
  ];

  const responsiveOptions = ref([
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1023px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "500px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
</script>
