<template>
  <div class="container mx-auto p-4 md:p-8 rounded-lg shadow-2xl bg-white">
    <h2 class="text-xl md:text-2xl font-bold m-0 mb-4 md:mb-8 text-secondary">
      Recharge and utility bill payments
    </h2>
    <div class="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
      <div v-for="(tab, index) in tabs" :key="index">
        <a :href="tab.pageUrl" class="decoration-none">
          <div class="flex flex-col items-center mx-auto gap-2 max-w-24">
            <Avatar
              :image="tab.avatar"
              class="w-10 sm:w-11 md:w-12 lg:w-14 xl:w-16 h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 rounded-full" />
            <span
              class="font-bold text-secondary text-sm sm:text-base md:text-lg lg:text-xl text-center"
              >{{ tab.name }}</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { tabs } from "./BillPayment.ts";
</script>
