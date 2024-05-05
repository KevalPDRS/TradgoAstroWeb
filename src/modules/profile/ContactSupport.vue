<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">Contact Support</h2>
    <hr class="" />
    <div class="p-4">
      <p class="m-0 mb-4">
        For Customer Support and Query, Get in touch with us:
      </p>
      <div class="flex flex-col gap-4">
        <div v-for="contact in contactSupport" :key="contact.title">
          <div class="flex items-start gap-4">
            <p class="m-0 text-primary">
              <i :class="contact.icon" class="text-3xl"></i>
            </p>
            <div class="flex flex-col gap-2">
              <h3 class="m-0 text-xl text-title">{{ contact.title }}</h3>
              <p class="m-0 text-text">{{ contact.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const contactSupport = ref([
    {
      title: "Odisha Office",
      description:
        "Brajanagar Main Road Down Dhobanala Bridge, Berhampur - Lochapada Main Rd, Brahmapur, Odisha 760001",
      icon: "pi pi-map-marker",
    },
    {
      title: "Ahmedabad Office",
      description:
        "316, Trade Square, near Parishkar Flat, Maninagar East, Khokhra, Ahmedabad, Gujarat 380008",
      icon: "pi pi-map-marker",
    },
    {
      title: "Telephone",
      description: "(+091) 9861468509",
      icon: "pi pi-phone",
    },
    {
      title: "Business Inquiries",
      description: "info@tradgo.in",
      icon: "pi pi-envelope",
    },
  ]);
</script>

<style lang="scss" scoped></style>
