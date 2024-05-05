<template>
  <div class="p-4 flex flex-col gap-2 md:gap-4">
    <div
      class="flex flex-col items-center gap-4 md:flex-row py-2 md:py-4 lg:py-8">
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <img
          :src="'public/images/tradgo_bg_image/Refer_And_Earn_Image.png'"
          alt="Refer & Earn"
          class="max-w-96 w-full" />
      </div>
      <div class="w-full md:w-1/2 flex flex-col gap-4 items-center">
        <h2 class="m-0 text-title">Refer & Earn</h2>
        <p class="m-0 font-medium text-text text-center">
          Share the app and get rewarded
        </p>
        <Button
          label="Invite Code: TRADGO279194"
          class="max-w-96 w-full py-4"
          @click="copy" />
        <Toast position="top-center" group="tc" />
        <Button
          label="Share Referral"
          class="bg-secondary max-w-96 w-full py-4 border-none" />
        <Button
          label="Referral List"
          @click="referralList = true"
          class="bg-white max-w-96 w-full py-4 text-text border-gray" />
        <Button
          label="Know more >"
          @click="nowMore = true"
          class="bg-white max-w-96 w-full py-4 text-text border-none" />
      </div>
    </div>
  </div>
  <Sidebar
    v-model:visible="referralList"
    header="Referral List"
    position="right">
    <hr class="m-0 mb-4" />
    <div class="flex flex-col">
      <div v-for="tab in referList" :key="tab.referredUser">
        <div
          class="flex flex-row items-center gap-2 hover:bg-primary hover:text-white rounded-full px-1.5 py-1 cursor-pointer">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center bg-secondary">
            <p class="m-0 text-white">TG</p>
          </div>
          <div class="flex flex-col gap-1">
            <p class="m-0">{{ tab.referredUser }}</p>
            <p class="m-0">{{ tab.referredNumber }}</p>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>
  <Sidebar v-model:visible="nowMore" header="How it works?" position="right">
    <hr class="m-0 mb-4" />
    <div class="flex flex-col gap-4">
      <div v-for="tab in nowMoreSteps" :key="tab.id">
        <div class="flex flex-row gap-4">
          <p class="m-0 w-2">{{ tab.id }}</p>
          <p class="m-0">{{ tab.content }}</p>
        </div>
      </div>
    </div>
  </Sidebar>
</template>

<script setup>
  import { ref } from "vue";
  import { useToast } from "primevue/usetoast";
  const toast = useToast();
  const referCode = ref("TRADGO279194");

  const copy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = referCode.value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    toast.add({
      severity: "info",
      summary: "Clipboard",
      detail: "Referral code copied to clipboard",
      group: "tc",
      life: 3000,
    });
  };

  const referralList = ref(false);
  const nowMore = ref(false);

  const referList = ref([
    {
      referredUser: "John Doe",
      referredNumber: "******9898",
    },
    {
      referredUser: "Jane Smith",
      referredNumber: "******9898",
    },
    {
      referredUser: "Alex Johnson",
      referredNumber: "******9898",
    },
    {
      referredUser: "Emily Brown",
      referredNumber: "******9898",
    },
  ]);

  const nowMoreSteps = ref([
    {
      id: "1",
      content: "Share your referral code/link with your friends",
    },
    {
      id: "2",
      content: "Your friend signs up using your code/link and receives",
    },
    {
      id: "3",
      content:
        "When your friend signs up and starts mobile and DTH recharge, you will get 0.3% commission every time your friend does a transaction",
    },
  ]);
</script>

<style lang="scss" scoped></style>
