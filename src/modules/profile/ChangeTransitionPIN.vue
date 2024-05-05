<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">Change Transition PIN</h2>
    <hr class="" />
    <div class="px-4 py-2 flex flex-row gap-4">
      <div class="w-full md:w-4/6 flex flex-col gap-2">
        <form action="">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="CurrentPIN">Current PIN</label>
                <InputText
                  v-model="CurrentPINValue"
                  id="CurrentPIN"
                  aria-describ
                  edby="CurrentPIN-error" />
                <small id="CurrentPIN-error" classs="text-danger hidden"
                  >Enter your CurrentPIN.</small
                >
              </div>
            </div>
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="NewPIN">New PIN</label>
                <Password v-model="NewPINValue" id="NewPIN" toggleMask />
                <small id="NewPIN-error" classs="text-danger hidden"
                  >Enter your New PIN.</small
                >
              </div>
            </div>
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="ConfirmNewPIN">Confirm New PIN</label>
                <Password
                  v-model="ConfirmNewPINValue"
                  id="ConfirmNewPIN"
                  toggleMask />
                <small id="ConfirmNewPIN-error" classs="text-danger hidden"
                  >Enter your Confirm New PIN.</small
                >
              </div>
            </div>
            <div class="flex-auto col-span-1 xl:col-span-2">
              <Button label="Continue" class="" />
            </div>
          </div>
        </form>
      </div>
      <div class="w-2/6 hidden md:flex flex-col gap-2 p-4 bg-lightGrey h-fit">
        <p class="m-0 text-title text-lg font-medium">Change Transaction PIN</p>
        <p class="m-0 text-text">
          Secure access to your UPI linked account using a secure PIN
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const CurrentPINValue = ref(null);
  const NewPINValue = ref(null);
  const ConfirmNewPINValue = ref(null);
</script>

<style lang="scss" scoped></style>
