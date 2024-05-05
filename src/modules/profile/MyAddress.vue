<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">Address</h2>
    <hr class="" />
    <div class="flex flex-col gap-4">
      <div
        class="p-4 rounded font-600 text-primary"
        style="
          border: 1px solid rgba(0, 0, 0, 0.125);
          box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);
        ">
        <i class="pi pi-map-marker" style="width: 20px; height: 20px"></i>
        ADD NEW ADDRESS
      </div>
      <div
        v-for="address in userAddress"
        :key="address.name"
        class="p-4 rounded flex flex-col gap-4"
        style="
          border: 1px solid rgba(0, 0, 0, 0.125);
          box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.25);
        ">
        <div class="flex items-center justify-between">
          <p class="m-0 text-xl font-semibold text-title">
            {{ address.name }}
          </p>
          <div class="flex gap-2">
            <Button
              v-if="address.IsPrimary"
              label="IsPrimary"
              class="bg-success border-none" />
            <Button :label="address.addressType" class="bg-gray border-none" />
          </div>
        </div>
        <p class="m-0">
          {{ address.address }}
        </p>
        <p class="m-0">Phone: {{ address.mobileNumber }}</p>
        <div class="flex gap-2">
          <Button
            v-for="(item, index) in address.buttons"
            :key="index"
            v-html="item"
            class="bg-white text-primary border-gray w-full flex justify-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const userAddress = ref([
    {
      name: "John Doe",
      address:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, debitis?",
      IsPrimary: true,
      addressType: "Home",
      mobileNumber: "9898989898",
      buttons: ["Edit", "Remove", "IsPrimary"],
    },
    {
      name: "Jane Smith",
      address: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      IsPrimary: false,
      addressType: "Office",
      mobileNumber: "9879879879",
      buttons: ["Edit", "Remove", "IsPrimary"],
    },
  ]);
</script>

<style lang="scss" scoped></style>
