<template>
  <div>
    <button
      v-for="button in buttons"
      :key="button.id"
      @click="addToBottom(button.id)">
      {{ button.id }}
    </button>
  </div>
  <div v-if="lastClickedId">
    <template v-if="lastClickedId === 'Mobile'">
      <MobileView />
    </template>
    <template v-else-if="lastClickedId === 'DTH'">
      <DTHView />
    </template>
    <template v-else-if="lastClickedId === 'Electricity'">
      <ElectricityView />
    </template>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import MobileView from "./Mobile.vue";
  import DTHView from "./DTH.vue";
  import ElectricityView from "./Electricity.vue";

  const buttons = [{ id: "Mobile" }, { id: "DTH" }, { id: "Electricity" }];

  const lastClickedId = ref(null);

  function addToBottom(id) {
    lastClickedId.value = id;
  }
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <div>
    <button
      v-for="button in buttons"
      :key="button.id"
      @click="addToBottom(button.id)">
      Button {{ button.id }}
    </button>
  </div>
  <div v-if="lastClickedId">
    <component :is="getComponent(lastClickedId)" />
  </div>
</template>

<script setup>
  import { ref, defineAsyncComponent } from "vue";

  // Dynamically import all view components
  const viewComponents = import.meta.globEager("./*.vue");

  // Extract IDs from the filenames
  const buttons = Object.keys(viewComponents).map((filename) => ({
    id: "Mobile",
    id: filename.replace(/^\.\//, "").replace(/\.vue$/, ""),
  }));

  // Define a ref to store the last clicked ID and set default to 'Mobile'
  const lastClickedId = ref("Mobile");

  // Function to handle click events and update lastClickedId
  function addToBottom(id) {
    lastClickedId.value = id;
  }

  // Function to get the corresponding view component based on ID
  function getComponent(id) {
    const component = viewComponents[`./${id}.vue`];
    return component ? defineAsyncComponent(() => component) : null;
  }
</script>

<style lang="scss" scoped></style> -->
