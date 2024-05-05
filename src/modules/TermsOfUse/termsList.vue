<template>
  <ul class="list-disc flex flex-col gap-2">
    <li v-for="(tab, index) in tabsData" :key="index">{{ tab.name }}</li>
  </ul>
</template>

<script setup lang="ts">
  import { tabsData } from "./data";
</script>
