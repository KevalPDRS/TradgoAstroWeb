<template>
  <div class="p-4 flex flex-col gap-2 md:gap-4">
    <h2 class="m-0 text-title">Order & Booking</h2>
    <div
      class="p-4 rounded flex items-center gap-6"
      style="
        border: 1px solid rgba(0, 0, 0, 0.125);
        box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);
      ">
      <i class="pi pi-wallet" style="font-size: 52px; color: #20a7db"></i>
      <div class="flex flex-col gap-2">
        <h2 class="m-0 text-title">8.25</h2>
        <p class="m-0 text-text">Main Wallet</p>
        <Button label="Add Money" class="w-fit" />
      </div>
    </div>
    <div>
      <TabView>
        <TabPanel header="Wallet">
          <DataTable
            :value="customers"
            paginator
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem">
            <Column field="transactionType" header="Transaction Type"></Column>
            <Column field="taxID" header="Tax ID"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="amount" header="Amount"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="closingBalance" header="Closing Balance"></Column>
          </DataTable>
        </TabPanel>
        <TabPanel header="Booking">
          <p class="m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { CustomerService } from "./OrderAndBooking.ts";

  onMounted(() => {
    CustomerService.getCustomersMedium().then(
      (data) => (customers.value = data)
    );
  });

  const customers = ref();
</script>

<style scoped>
  .p-tabview .p-tabview-panels {
    padding: 0px;
    margin: 0px;
  }
</style>
