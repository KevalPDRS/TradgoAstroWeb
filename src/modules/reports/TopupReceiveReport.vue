<template>
  <div class="card">
    <h3 class="text-2xl font-medium m-0 text-title">Topup Receive Report</h3>
    <hr class="" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="tab in tabs" :key="tab.date">
        <div
          class="rounded flex flex-col gap-2 p-4 text-black"
          style="border: 1px solid gray">
          <div class="flex items-center justify-between">
            <p class="m-0 text-base lg:text-lg font-semibold">{{ tab.date }}</p>
            <p class="m-0 text-sm lg:text-base text-primary">
              ₹{{ tab.amount1 }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="m-0 text-sm lg:text-base">{{ tab.for }}</p>
            <p class="m-0 text-sm lg:text-base text-success">
              ₹{{ tab.amount2 }} (Cr)
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="m-0 text-sm lg:text-base text-text">ID: {{ tab.id }}</p>
            <p class="m-0 text-sm lg:text-base font-semibold">
              To: {{ tab.to }}
            </p>
          </div>
          <hr class="bg-text w-full" />
          <p class="m-0 text-sm lg:text-base text-text">{{ tab.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const tabs = ref([
    {
      date: "06-Dec-2023 06:27PM",
      amount1: "299.93",
      for: "ABC",
      amount2: "299",
      id: "31418727",
      to: "user",
      detail: "AR|7878877859|19|31418727",
    },
    {
      date: "06-Dec-2023 06:27PM",
      amount1: "299.93",
      for: "ABC",
      amount2: "299",
      id: "31418727",
      to: "user",
      detail: "AR|7878877859|19|31418727",
    },
    {
      date: "06-Dec-2023 06:27PM",
      amount1: "299.93",
      for: "ABC",
      amount2: "299",
      id: "31418727",
      to: "user",
      detail: "AR|7878877859|19|31418727",
    },
  ]);
</script>

<style lang="scss" scoped></style>
