<template>
  <div class="container mx-auto bg-white p-4 shadow-lg rounded-2xl">
    <div class="flex flex-col gap-4">
      <p class="m-0 text-title font-bold text-lg">
        Mobile Recharge or Bill Payment
      </p>
      <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient1"
            value="Prepaid" />
          <label for="ingredient1" class="ml-2">Prepaid</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient2"
            value="Postpaid" />
          <label for="ingredient2" class="ml-2">Postpaid</label>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-fluid">
        <div class="flex-auto">
          <div class="flex flex-col gap-1">
            <label for="mobileNumber">Enter Mobile Number</label>
            <InputNumber
              v-model="mobileNumberValue"
              id="mobileNumber"
              :useGrouping="false"
              aria-describedby="mobileNumber-error" />
            <small id="mobileNumber-error" classs="text-danger hidden"
              >Enter Your Mobile Number</small
            >
          </div>
        </div>
        <div class="flex-auto">
          <div class="flex flex-col gap-1">
            <label for="mobileNumber">Select Your Operator</label>
            <Dropdown
              v-model="selectedOperator"
              :options="operators"
              filter
              placeholder="Select Your Subject"
              optionLabel="name"
              class="w-full border-text">
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
            <label for="rechargeAmount">Enter Amount</label>
            <div class="flex relative">
              <InputNumber
                v-model="rechargeAmountValue"
                id="rechargeAmount"
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
          class="flex-auto col-span-1 lg:col-span-3 xl:col-span-1 mt-0 xl:mt-6">
          <Button label="Continue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const ingredient = ref("");
  const mobileNumberValue = ref(null);
  const rechargeAmountValue = ref(null);

  import Dropdown from "primevue/dropdown";
  import { operatorData } from "./OperatorData";
  const selectedOperator = ref();
  const operators = ref(operatorData);

  import ViewPlans from "./ViewPlans.vue";

  // Import necessary dependencies from Vue
  // import { ref } from "vue";

  // Define props
  const props = {
    text: String,
    onClick: Function,
  };

  // Define reactive variables
  const buttonText = ref(props.text);

  // Define methods
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
</script>

<style lang="scss" scoped></style>
