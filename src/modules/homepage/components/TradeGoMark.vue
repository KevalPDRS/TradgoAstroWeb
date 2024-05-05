<template>
  <div
    class="container mx-auto p-4 md:p-8 rounded-lg bg-secondary flex items-center justify-between mt-4 md:mt-12 relative">
    <div class="w-1/3 md:w-1/4 p-4">
      <img
        :src="'/images/tradgo_bus_icon/tradgo_bus_light_icon.png'"
        class="max-w-52 w-full"
        alt="bus light icon"
        title="bus light icon" />
    </div>
    <div class="w-1/3 md:w-1/4 py-4 text-white flex flex-col gap-4">
      <span class="text-center text-2xl font-bold"
        >Book a bus & get<br />
        instant 3% Cashback</span
      >
      <Button
        label="Book Now"
        class="text-secondary rounded-md bg-white max-w-fit mx-auto px-4 py-2 text-xl font-bold border-none" />
    </div>
    <div
      class="hidden md:flex md:w-1/4 p-0 md:p-4 flex text-white items-end gap-4 justify-end">
      <img
        :src="'/images/tradgo_bus_icon/tradgo_bus_gift_icon.png'"
        class="hidden md:flex h-12 w-12 pb-2"
        alt="bus light icon"
        title="bus light icon" />
      <span class="hidden md:flex w-1/2 text-primary font-medium text-right"
        >"Wherever You're Going, Your Ticket's Just a Click Away"</span
      >
    </div>
    <div
      class="hidden w-0 sm:w-auto md:w-1/4 p-0 sm:p-4 h-full sm:flex items-center">
      <img
        :src="'/images/tradgo_boy_model/Tradgo_Boy_Bus_01.png'"
        class="h-[160px] ml-auto"
        alt="bus light icon"
        title="bus light icon" />
    </div>
    <div
      class="border-b-[12px] border-b-dotted border-lightGrey w-full absolute -bottom-1.5 left-0"></div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Button from "primevue/button";
</script>
