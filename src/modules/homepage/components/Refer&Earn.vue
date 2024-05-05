<template>
  <div class="w-full bg-primary">
    <div class="container mx-auto p-4 md:p-8 block md:flex my-4 relative">
      <div
        class="w-full md:w-1/3 flex flex-col gap-2 rounded-md w-1/3 justify-center items-center">
        <div class="p-2">
          <img
            :src="'/images/tradgo_bg_image/Refer_And_Earn_Image.png'"
            alt=""
            srcset=""
            class="h-[250x] w-full mb-2" />
          <div class="flex flex-col justify-center text-white pb-2">
            <span class="text-center text-2xl">Refer & Earn</span>
            <span class="text-center text-lg"
              >Share the app and get rewarded</span
            >
          </div>
        </div>
      </div>
      <div
        class="w-full md:w-2/3 flex flex-col justify-between p-0 md:p-4 ml-0 md:ml-8">
        <div class="flex flex-col gap-8">
          <div v-for="(v, i) in instruction" :key="i" class="flex items-start">
            <div
              class="bg-white text-primary rounded-full h-10 w-10 p-[0.6rem]">
              0{{ i + 1 }}
            </div>
            <div class="ml-2 md:ml-4 text-white text-lg mt-1.5">{{ v }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const instruction = [
    "Share your referral code/link with your friends",
    "Your friend signs up using your code/link and receives",
    "You earn ₹150 when your friend completes login, such as making a purchase, taking a survey, or referring their own friends.",
  ];
</script>
