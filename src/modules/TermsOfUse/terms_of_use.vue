<template>
  <div class="p-4 sm:p-6">
    <h3 class="text-3xl">Terms of Use</h3>
    <hr class="my-2 sm:my-4" />
    <TermsList class="ml-4 sm:ml-6 text-text" />
    <div class="grid grid-cols-3 items-center gap-4 mt-4">
      <div class="text-end">
        <p class="text-2xl text-title">Go eBill - Download the IOS Super App</p>
        <div>Download the app now & make convenience a part of your life.</div>
      </div>
      <div class="">
        <img src="./sworld.png" alt="SWORLD" style="width: 100px" />
      </div>
      <div class="">
        <p class="text-2xl text-title">
          Go eBill - Download the Android Super App
        </p>
        <div>Download the app now & start earning smartly.</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import TermsList from "./termsList.vue";
</script>
<style scoped></style>
