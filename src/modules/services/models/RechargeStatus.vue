<template>
  <div class="card flex justify-center">
    <Button label="Recharge Status" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      header="Recharge Status"
      style="color: #1b1464"
      :style="{ width: '24rem' }"
      :breakpoints="{ '1024px': '50vw', '425px': '94vw' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(1px)',
        },
      }">
      <!-- Dynamic Recharge Status start -->
      <div>
        <div>
          <div
            v-for="(recharge, index) in rechargeStatus"
            :key="index"
            class="flex">
            <div class="flex flex-col gap-2 w-full">
              <span
                :style="{ color: getStatusColor(recharge.status) }"
                class=""
                >{{ recharge.status }}</span
              >
              <span class="text-2xl font-semibold">₹150</span>
            </div>
            <img
              :src="
                './../../../../public/images/tradgo_icon/' +
                recharge.status +
                '.png'
              "
              :alt="recharge.status"
              class="w-14 h-14" />
          </div>
        </div>
      </div>
      <hr />
      <div class="flex flex-col my-4 gap-4">
        <div v-for="customer in customerInfo" :key="customer.title">
          <div class="flex gap-2 justify-between">
            <span class="text-text">{{ customer.title }}: </span>
            <span class="text-primary text-end">{{ customer.content }}</span>
          </div>
        </div>
      </div>
      <div class="w-full text-end">
        <span class="text-text text-xs">29-Feb-2024 11:06:22 AM</span>
      </div>

      <!-- Dynamic Recharge Status end -->
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const rechargeStatus = ref([
    {
      status: "Recharge Successful",
      status: "Recharge Failed",
    },
  ]);
  const getStatusColor = (status) => {
    return status === "Successful" ? "green" : "red";
  };

  const customerInfo = ref([
    { title: "Mobile Number", content: "(+91) 9898989898" },
    { title: "Operator", content: "Operator" },
    { title: "Recharge ID", content: "98798798" },
    { title: "Operator ID", content: "BR000AJJN6CT" },
  ]);

  const visible = ref(false);
</script>
