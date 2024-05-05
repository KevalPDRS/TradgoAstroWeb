<template>
  <section class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="w-full md:w-1/4 flex flex-row md:flex-col gap-1">
        <div v-for="service in services" :key="service.id">
          <div
            @click="activeTab = service.id"
            class="flex flex-col justify-start cursor-pointer rounded p-2"
            :class="['tab-item', { 'active-tab': activeTab === service.id }]">
            <div class="flex flex-row justify-between gap-4">
              <p class="text-start m-0 text-text">{{ service.title }}</p>
              <p class="text-start m-0 text-text hidden md:block">
                <i class="pi pi-angle-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <component class="w-full md:w-3/4" :is="activeTab" client:load />
    </div>
  </section>
</template>

<script setup>
  const services = [
    { id: "RechargeHistory", title: "Recharge History" },
    { id: "LedgerReport", title: "Ledger Report" },
    { id: "TopupReceiveReport", title: "Topup Receive Report" },
    { id: "DailyReports", title: "Daily Reports" },
  ];
</script>

<script>
  import RechargeHistory from "./RechargeHistory.vue";
  import LedgerReport from "./LedgerReport.vue";
  import TopupReceiveReport from "./TopupReceiveReport.vue";
  import DailyReports from "./DailyReports.vue";

  export default {
    components: {
      RechargeHistory,
      LedgerReport,
      TopupReceiveReport,
      DailyReports,
    },
    data() {
      return {
        activeTab: "RechargeHistory",
      };
    },
  };
</script>

<style scoped>
  .tab-item {
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }

  .tab-item:hover {
    color: #20a7db;
  }

  .active-tab {
    background-color: #20a7db;
    color: #fff;
  }
  .active-tab div p {
    color: #fff;
  }
</style>
