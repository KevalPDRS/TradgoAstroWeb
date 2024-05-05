<template>
  <div class="card">
    <h3 class="text-2xl font-medium m-0 text-title">Recharge History</h3>
    <hr class="" />
    <DataTable
      :value="customers"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      class="w-full">
      <Column field="date" header="Date"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="orderId" header="Order ID"></Column>
      <Column field="status" header="Status"></Column>
      <Column field="amount" header="Amount"></Column>
    </DataTable>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { RechargeHistory } from "./RechargeHistory.ts";

  onMounted(() => {
    RechargeHistory.getCustomersMedium().then(
      (data) => (customers.value = data)
    );
  });

  const customers = ref();
</script>

<style lang="scss" scoped></style>
