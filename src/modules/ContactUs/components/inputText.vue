<template>
  <div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <InputText
      id="username"
      class="p-2"
      v-model="value"
      aria-describedby="username-help" />
    <small id="username-help"
      >Enter your username to reset your password.</small
    >
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import InputText from "primevue/inputtext";

  const value = ref(null);
</script>
