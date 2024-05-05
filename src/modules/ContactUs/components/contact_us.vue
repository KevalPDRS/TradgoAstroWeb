<template>
  <div class="p-4 sm:p-6">
    <h3 class="text-3xl">Contact Us</h3>
    <hr class="my-2 sm:my-4" />
    <h4 class="text-dark text-2xl mb-2">We are Here!</h4>
    <div class="mb-4">
      Tradgo is a well-known name in the world of payment app serving over 3
      Lakh users across the country. Over the years Tradgo has transformed to
      become one of the leading financial services and investment apps in India.
      From recharge & bill payments to investment & lending, Tradgo lets you do
      it all effortlessly. Tradgo has always been known for offering safe and
      seamless UPI payments, utility bill payments, mobile/DTH recharges.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-xl text-dark">Get In Touch</p>
        <p class="text-primary">Registered Office :</p>
        <p class="text-secondary mb-2">
          Brajanagar Main Road, Lochapada Road, Down Dhobanala Bridge,
          Brahmapur, Odisha-760001
        </p>
        <p class="text-primary">Corporate Office :</p>
        <p class="text-secondary mb-2">
          Corporate Office :316 Trade Square, Near Parishkar Flat, Khokhra
          Ahmedabad 380008
        </p>
        <p class="text-primary">+91-97783 44449</p>
        <p class="text-primary">info@tradgo.in</p>
      </div>
      <div>
        <p class="text-xl text-dark">Office Hour</p>
        <p class="text-primary">Monday-Saturday</p>
        <p class="text-secondary mb-2">11am-7pm ET</p>
        <p class="text-primary">Sunday</p>
        <p class="text-secondary mb-2">11am-6pm ET</p>
      </div>
    </div>
    <hr class="my-2 sm:my-4" />
    <div class="flex flex-col gap-1">
      <p class="text-2xl text-dark">Got Any Questions?</p>
      <p class="text-primary mb-3">
        Use the form below to get in touch with the sales team
      </p>
      <form action="" class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
        <div class="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="username" v-model="value" class="w-full" />
            <label for="username">Username</label>
          </FloatLabel>
          <p class="hidden text-danger m-0 text-sm">Enter Full Name</p>
        </div>
        <div class="flex flex-col gap-1">
          <FloatLabel>
            <InputNumber
              id="number-input"
              v-model="value"
              :useGrouping="false"
              :max-length="10"
              class="w-full" />
            <label for="number-input">Phone</label>
          </FloatLabel>
          <p class="hidden text-danger m-0 text-sm">Enter Mobile Number</p>
        </div>
        <div class="flex flex-col gap-1">
          <FloatLabel>
            <InputText id="email" type="email" v-model="value" class="w-full" />
            <label for="email">Email</label>
          </FloatLabel>
          <p class="hidden text-danger m-0 text-sm">Enter Email Id</p>
        </div>
        <div class="flex flex-col gap-1">
          <Dropdown
            v-model="selectedServices"
            :options="services"
            filter
            placeholder="Select Your Subject"
            optionLabel="name"
            class="w-full">
            <template #value="slotProps" class="">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div class="border-red">{{ slotProps.value.name }}</div>
              </div>
              <!-- <span v-else>
                {{ slotProps.placeholder }}
              </span> -->
            </template>
          </Dropdown>
          <p class="hidden text-danger m-0 text-sm">Select Your Subject</p>
        </div>
        <div class="flex flex-col gap-1 col-span-1 md:col-span-2">
          <FloatLabel>
            <Textarea v-model="value" class="w-full min-h-20" />
            <label>Leave a comment...</label>
          </FloatLabel>
          <p class="hidden text-danger m-0 text-sm">Select Your Subject</p>
        </div>
        <div class="flex flex-col gap-1 col-span-1 md:col-span-2">
          <Button
            label="Submit"
            class="py-2 w-full rounded-md bg-primary text-white font-medium" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  import { ref } from "vue";
  import FloatLabel from "primevue/floatlabel";

  const value = ref(null);
  const userName = ref(null);
  const emailId = ref(null);
  const mobileNumber = ref(null);
  const textArea = ref(null);

  import Dropdown from "primevue/dropdown";
  import { tabsData } from "./data";
  const selectedServices = ref();
  const services = ref(tabsData);
</script>
<style scoped></style>
