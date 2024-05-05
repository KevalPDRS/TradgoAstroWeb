<template>
  <div class="container mx-auto bg-white p-4 shadow-lg rounded-lg">
    <div class="flex flex-col gap-4">
      <p class="m-0 text-title font-bold text-lg">More</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const mobileNumberValue = ref(null);
  const rechargeAmountValue = ref(null);

  import ViewPlans from "./ViewPlans.vue";

  import Dropdown from "primevue/dropdown";
  import { operatorData } from "./OperatorData";
  const selectedOperator = ref();
  const operators = ref(operatorData);
</script>

<style lang="scss" scoped></style>
