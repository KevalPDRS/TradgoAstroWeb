<template>
  <div>
    <section class="container mx-auto">
      <Carousel
        :value="data"
        :num-visible="5"
        :num-scroll="1"
        circular
        :autoplay-interval="5000"
        :responsive-options="responsiveOptions">
        <template #item="slotProps">
          <BlogCard :data="slotProps.data" />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import BlogCard from "./sliderCard.vue";
  import { data } from "./data";
  const responsiveOptions = ref([
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
</script>
