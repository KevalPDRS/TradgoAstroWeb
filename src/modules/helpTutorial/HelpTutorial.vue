<template>
  <div class="p-2 md:p-4">
    <h2 class="text-2xl font-medium m-0 text-title">Help Tutorial</h2>
    <hr class="mb-4" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="tab in helpTutorial" :key="tab.title">
        <a :href="tab.videoUrl" target="_blank" class="decoration-none">
          <img
            :src="'./public/images/helpTutorial/' + tab.posterUrl + '.jpg'"
            :alt="tab.title"
            class="w-full rounded-xl" />
          <p class="m-0 text-title font-medium text-xl">{{ tab.title }}</p>
          <p class="m-0 text-text">Tradgo</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const helpTutorial = ref([
    {
      title: "Tradgo Discount App",
      videoUrl: "https://www.youtube.com/watch?v=5ZvqGiSHhO8",
      posterUrl: "image-1",
    },
    {
      title: "AEPS help video",
      videoUrl: "https://www.youtube.com/watch?v=zC-x1h_YomM",
      posterUrl: "image-1",
    },
    {
      title: "Tradgo Partner App",
      videoUrl: "https://www.youtube.com/shorts/dIlTCLaH-4E",
      posterUrl: "image-1",
    },
    {
      title: "How to Complain",
      videoUrl: "https://www.youtube.com/shorts/Sww7Rlpz-20",
      posterUrl: "image-1",
    },
  ]);
</script>

<style lang="scss" scoped></style>
