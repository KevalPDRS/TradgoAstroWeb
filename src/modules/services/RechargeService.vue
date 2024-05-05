<template>
  <section class="container mx-auto text-white">
    <div class="px-4 md:px-0 py-4 md:py-8">Recharge Services</div>
    <div v-for="service in services" :key="service.id">
      <!-- <RouterLink :to="`service/${service.id}`">{{ service.title }}</RouterLink> -->
      <a :href="`service/${service.id}`">{{ service.title }}</a>
    </div>
  </section>
</template>

<script setup>
  import { RouterLink } from "vue-router";
  const services = [
    { id: "Mobile", title: "Mobile" },
    { id: "DTH", title: "DTH" },
    { id: "Electricity", title: "Electricity" },
    { id: "More", title: "More" },
  ];
</script>
