<template>
  <div class="card flex justify-center">
    <Button label="Proceed to Pay" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      header="Select an Option to Pay"
      :style="{ width: '30rem' }"
      :breakpoints="{ '1024px': '50vw', '425px': '94vw' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(1px)',
        },
      }">
      <!-- Dynamic Customer Info start -->
      <div class="flex flex-col my-4 gap-4">
        <div v-for="customer in customerInfo" :key="customer.title">
          <div class="flex gap-2 justify-between">
            <span class="text-text">{{ customer.title }}: </span>
            <span class="text-primary text-end">{{ customer.content }}</span>
          </div>
        </div>
      </div>
      <div>
        <span class="text-text font-medium">Select an Option to Pay :</span>
      </div>
      <div class="">
        <div class="flex items-center my-2">
          <Checkbox v-model="TradgoWalletChecked" :binary="true" />
          <label class="flex flex-col ml-4">
            <span class="text-text font-medium text-lg">Tradgo Wallet</span>
            <span class="text-text">Available Balance 987.65</span>
          </label>
        </div>
        <div class="flex flex-col gap-2 my-2">
          <div
            v-for="category in categories"
            :key="category.key"
            class="flex items-center">
            <RadioButton
              v-model="selectOptionCategory"
              :inputId="category.key"
              name="dynamic"
              :value="category.name" />
            <label :for="category.key" class="flex flex-col ml-4"
              ><span class="text-text font-medium text-lg">{{
                category.name
              }}</span
              ><span class="text-text"
                >Payment using selected {{ category.name }}</span
              ></label
            >
          </div>
        </div>
      </div>

      <RechargeStatus client:load />
      <!-- Dynamic Customer Info end -->
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import RechargeStatus from "./RechargeStatus.vue";

  const customerInfo = ref([
    { title: "Mobile Number", content: "(+91) 9898989898" },
    { title: "Operator/Circle", content: "Vodafone | Gujarat" },
    { title: "Amount", content: "₹149" },
  ]);

  const selectOptionCategory = ref("Production");
  const categories = ref([
    {
      name: "UPI Application",
      key: "A",
    },
    {
      name: "PDRS_ICICI",
      key: "M",
    },
  ]);

  const visible = ref(false);
  const TradgoWalletChecked = ref(true);
</script>
