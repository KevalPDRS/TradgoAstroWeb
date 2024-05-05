<template>
  <div class="card">
    <h3 class="text-2xl font-medium m-0 text-title">Daily Reports</h3>
    <hr class="" />
    <div class="flex flex-col gap-4">
      <p class="m-0">Date: {{ currentDate }}</p>
      <div v-for="daily in dailyReports" :key="daily.title">
        <div
          class="flex items-center justify-between px-4 py-3 rounded-xl font-medium"
          style="border: 1px solid gray">
          <p class="m-0 text-xl text-primary">{{ daily.title }}</p>
          <p class="m-0 text-xl text-black">₹{{ daily.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const currentDate = ref(new Date());

  import { ref } from "vue";
  const dailyReports = ref([
    {
      title: "Opening Balance",
      amount: "3.25",
    },
    {
      title: "Closing Balance",
      amount: "3.25",
    },
    {
      title: "Purchase",
      amount: "0",
    },
    {
      title: "Transfer",
      amount: "0",
    },
    {
      title: "Total Recharge",
      amount: "0.00",
    },
    {
      title: "Total Commission",
      amount: "0.00",
    },
  ]);
</script>

<style lang="scss" scoped></style>
