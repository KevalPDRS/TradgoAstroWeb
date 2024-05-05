<template>
  <section class="container mx-auto">
    <TabView class="tabview-custom px-4 md:px-0 py-4 md:py-8 rounded-2xl">
      <TabPanel v-for="(tab, index) in tabs" :key="index">
        <template #header>
          <div class="flex flex-col items-center gap-2 max-w-24">
            <Avatar
              :image="tab.avatar"
              class="w-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 rounded-full" />
            <span
              class="font-bold text-secondary text-sm sm:text-base md:text-lg lg:text-xl text-center"
              >{{ tab.name }}</span
            >
          </div>
        </template>
        <p class="m-0">{{ tab.content }}</p>
      </TabPanel>
    </TabView>
  </section>
</template>
<script setup>
  import { tabs } from "./RechargeServiceData.ts";
</script>
<style scoped></style>
