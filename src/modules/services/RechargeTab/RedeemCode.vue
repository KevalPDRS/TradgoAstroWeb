<template>
  <div class="container mx-auto bg-white p-4 shadow-lg rounded-lg">
    <div class="flex gap-4 items-center">
      <p class="m-0 text-title font-bold text-lg">Redeem Code Bill Payment</p>
      <img
        :src="'./../../../../public/images/tradgo_icon/BharatBillPay.png'"
        alt="BharatBillPay"
        class="w-14" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-fluid text-black">
      <div class="flex-auto">
        <div class="flex flex-col gap-1">
          <label for="mobileNumber">Select Your Operator</label>
          <Dropdown
            v-model="selectedOperator"
            :options="operators"
            filter
            placeholder="Select Your Subject"
            optionLabel="name"
            class="w-full">
            <template #value="slotProps" class="">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div class="border-red">{{ slotProps.value.name }}</div>
              </div>
            </template>
          </Dropdown>
          <small id="mobileNumber-error" classs="text-danger hidden"
            >Select Your Operator</small
          >
        </div>
      </div>
      <div class="flex-auto">
        <div class="flex flex-col gap-1">
          <label for="mobileNumber">Enter Mobile Number</label>
          <InputNumber
            v-model="mobileNumberValue"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
            :useGrouping="false"
            aria-describedby="mobileNumber-error" />
          <small id="mobileNumber-error" classs="text-danger hidden"
            >Enter Your Mobile Number</small
          >
        </div>
      </div>
      <div class="flex-auto">
        <div class="flex flex-col gap-1">
          <label for="rechargeAmount">Enter Amount</label>
          <div class="flex relative">
            <InputNumber
              v-model="rechargeAmountValue"
              id="rechargeAmount"
              placeholder="Enter Amount"
              :useGrouping="false"
              aria-describedby="rechargeAmount-error" />
            <ViewPlans client:load class="absolute right-0" />
          </div>
          <small id="rechargeAmount-error" classs="text-danger hidden"
            >Enter Your Amount</small
          >
        </div>
      </div>
      <div
        class="flex-auto col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-1 mt-0 xl:mt-6">
        <!-- <Button label="Continue" /> -->
        <ConfirmDetails client:load />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import ConfirmDetails from "./../models/ConfirmDetails.vue";
  const mobileNumberValue = ref(null);
  const rechargeAmountValue = ref(null);

  import ViewPlans from "./ViewPlans.vue";

  import Dropdown from "primevue/dropdown";
  import { operatorData } from "./OperatorData";
  const selectedOperator = ref();
  const operators = ref(operatorData);
</script>

<style lang="scss" scoped></style>
