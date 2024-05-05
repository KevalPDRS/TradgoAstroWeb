<template>
  <div class="card flex justify-center">
    <Button label="Continue" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      header="Confirm Recharge Details"
      :style="{ width: '30rem' }"
      :breakpoints="{ '1024px': '50vw', '425px': '94vw' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(1px)',
        },
      }">
      <!-- Dynamic Customer Info start -->
      <div class="flex flex-col my-4 font-600 gap-4">
        <div v-for="customer in customerInfo" :key="customer.title">
          <div class="flex font-600 gap-2 justify-between">
            <span class="text-title">{{ customer.title }}: </span>
            <span class="text-primary text-end">{{ customer.content }}</span>
          </div>
        </div>
      </div>
      <!-- <Button label="Proceed to Pay" class="w-full" /> -->

      <SelectOptiontoPay client:load />
      <!-- Dynamic Customer Info end -->
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import SelectOptiontoPay from "./SelectOptiontoPay.vue";

  const customerInfo = ref([
    { title: "Mobile Number", content: "(+91) 9898989898" },
    { title: "Operator/Circle", content: "Operator | Circle" },
    { title: "Validity", content: "28 Days" },
    { title: "Amount", content: "₹149" },
    {
      title: "Description",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo quae enim explicabo eum, facere accusamus at optio. Numquam, quasi?",
    },
    { title: "Payment Amount", content: "₹149" },
  ]);

  const visible = ref(false);
</script>
