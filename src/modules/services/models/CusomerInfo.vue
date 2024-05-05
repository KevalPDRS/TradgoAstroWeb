<template>
  <div class="card flex justify-center">
    <Button label="Customer Info" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      header="Customer Info"
      :style="{ width: '30rem' }"
      :breakpoints="{ '1024px': '50vw', '425px': '94vw' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(1px)',
        },
      }">
      <!-- Show Only for DTH, Electricity, Gas Cylinder start -->
      <div class="flex mb-2 font-600 gap-2">
        <div>
          <img src="" alt="" class="w-10 h-10" />
        </div>
        <div class="flex flex-col">
          <span class="text-title">Operator Name</span>
          <span class="text-primary">User Name</span>
        </div>
      </div>
      <hr />
      <!-- Show Only for DTH, Electricity, Gas Cylinder end -->

      <!-- DTH start -->
      <div class="flex mb-2 font-600">
        <span class="text-title">Customer Id:- </span>
        <span class="text-primary">98989898</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Monthly Recharge:- </span>
        <span class="text-primary">179</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Balance:- </span>
        <span class="text-primary">4045.08</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Status:- </span>
        <span class="text-primary">Deactive</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Next Recharge Date:- </span>
        <span class="text-primary"> 2023-07-28 T: 00:00:00</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Last Recharge Date:- </span>
        <span class="text-primary">null</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">last Recharge Amount:- </span>
        <span class="text-primary">null</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Plan:- </span>
        <span class="text-primary"
          >Package-ABP Asmita, Cartoon Network, Pogo, Nick, Aaj Tak, Zee Cinema
          HD, BST Rest of India (B).</span
        >
      </div>
      <!-- DTH end -->

      <!-- Electricity, Gas Cylinder start -->
      <div class="flex mb-2 font-600">
        <span class="text-title">Customer Name:- </span>
        <span class="text-primary">User Name</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Due Amount:- </span>
        <span class="text-primary">₹1380</span>
      </div>
      <!-- Electricity, Gas Cylinder end -->

      <!-- Fast TAG start -->
      <div class="flex mb-2 font-600">
        <span class="text-title">Message:- </span>
        <span class="text-primary"> BILL FETCH SUCCESSFUL</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Customer Name:- </span>
        <span class="text-primary"> John Deo</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">Due Amount:- </span>
        <span class="text-primary"> 1</span>
      </div>
      <div class="flex mb-2 font-600">
        <span class="text-title">DueDate:- </span>
        <span class="text-primary">00/00/000</span>
      </div>
      <!-- Fast TAG end -->

      <!-- Dynamic Customer Info start -->
      <div v-for="customer in customerInfo" :key="customer.title">
        <div class="flex mb-2 font-600">
          <span class="text-title">{{ customer.title }}:- </span>
          <span class="text-primary">{{ customer.content }}</span>
        </div>
      </div>
      <!-- Dynamic Customer Info end -->
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const customerInfo = ref([
    { title: "Title 1", content: "Content 1" },
    { title: "Title 2", content: "Content 2" },
    { title: "Title 3", content: "Content 3" },
  ]);

  const visible = ref(false);
</script>
