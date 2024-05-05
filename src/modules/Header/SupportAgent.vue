<template>
  <div class="card">
    <div class="flex gap-2 justify-content-center cursor-pointer">
      <svg
        class="mx-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#a6a6a7"
        @click="visibleRight = true"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z"></path>
        <path
          d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z"></path>
        <path
          d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"></path>
        <path
          d="M18 11.03C17.52 8.18 15.04 6 12.05 6C9.02 6 5.76 8.51 6.02 12.45C8.49 11.44 10.35 9.24 10.88 6.56C12.19 9.19 14.88 11 18 11.03Z"></path>
      </svg>
    </div>

    <Sidebar
      v-model:visible="visibleRight"
      position="right"
      class="w-full md:w-50vw lg:w-40vw xl:w-30vw">
      <template #header>
        <span class="font-bold text-secondary text-xl">Support Agent</span>
      </template>
      <div class="flex flex-col gap-2">
        <img
          src="'./public/images/tradgo_icon/headset.png'"
          alt="headset"
          class="w-full md:w-full lg:w-full xl:w-full mx-auto" />
        <p>How can we help you?</p>
        <a href="tel:9861468509" class="decoration-none">
          <div
            class="flex flex-row items-center justify-between rounded-xl p-4"
            style="
              border: 1px solid #0dcaf0;
              background-color: #0dcaf01a;
              color: #0dcaf0;
            ">
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-headphones" :class="'text-xl'"></i>
              <p class="m-0">Call Support</p>
            </div>
            <i class="pi pi-angle-right"></i>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9861468509"
          target="_blank"
          class="decoration-none">
          <div
            class="flex flex-row items-center justify-between rounded-xl p-4"
            style="
              border: 1px solid #198754;
              background-color: #1987541a;
              color: #198754;
            ">
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-whatsapp" :class="'text-xl'"></i>
              <p class="m-0">WhatsApp Support</p>
            </div>
            <i class="pi pi-angle-right"></i>
          </div>
        </a>
        <a href="" class="decoration-none">
          <div
            class="flex flex-row items-center justify-between rounded-xl p-4"
            style="
              border: 1px solid #8d89b2;
              background-color: #8d89b21a;
              color: #8d89b2;
            ">
            <div class="flex flex-row items-center gap-4">
              <i class="pi pi-users" :class="'text-xl'"></i>
              <p class="m-0">Recharge Bill Payment Issue</p>
            </div>
            <i class="pi pi-angle-right"></i>
          </div>
        </a>
        <Accordion :activeIndex="0">
          <AccordionTab
            style="
              border: 1px solid #8d89b2;
              background-color: #8d89b21a;
              color: #8d89b2;
            ">
            <template #header>
              <span class="font-bold">Amy Elsner</span>
            </template>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Sidebar from "primevue/sidebar";

  const visibleRight = ref(false);
</script>
