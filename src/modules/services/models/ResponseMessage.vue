<template>
  <div class="card flex justify-center">
    <Button label="Response Message" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      header="Response Message"
      style="color: #1b1464"
      :style="{ width: '30rem' }"
      :breakpoints="{ '1024px': '50vw', '425px': '94vw' }"
      :pt="{
        root: 'border-none',
        mask: {
          style: 'backdrop-filter: blur(1px)',
        },
      }">
      <!-- Dynamic Response Message start -->
      <div v-for="response in ResponseMessage" :key="response.message">
        <div class="flex mb-2 font-600">
          <span class="text-text font-normal">{{ response.message }}</span>
        </div>
      </div>
      <div class="flex gap-6">
        <Button
          client:load
          @click="visible = false"
          label="Cancel"
          class="w-full bg-white text-secondary"
          style="border: 1px solid #1b1464" />
        <Button
          client:load
          @click="visible = false"
          label="Continue"
          class="w-full bg-secondary"
          style="border: 1px solid #1b1464" />
      </div>
      <!-- Dynamic Response Message end -->
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const ResponseMessage = ref([
    {
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, odit error. Odit molestias ex sapiente voluptate, maxime soluta itaque molestiae.",
    },
  ]);

  const visible = ref(false);
</script>
