<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">Change Password</h2>
    <hr class="" />
    <div class="px-4 py-2 flex flex-row gap-4">
      <div class="w-full md:w-4/6 flex flex-col gap-2">
        <form action="">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="CurrentPassword">Current Password</label>
                <InputText
                  v-model="CurrentPasswordValue"
                  id="CurrentPassword"
                  aria-describ
                  edby="CurrentPassword-error" />
                <small id="CurrentPassword-error" classs="text-danger hidden"
                  >Enter your CurrentPassword.</small
                >
              </div>
            </div>
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="NewPassword">New Password</label>
                <Password
                  v-model="NewPasswordValue"
                  id="NewPassword"
                  toggleMask />
                <small id="NewPassword-error" classs="text-danger hidden"
                  >Enter your New Password.</small
                >
              </div>
            </div>
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="ConfirmNewPassword">Confirm New Password</label>
                <Password
                  v-model="ConfirmNewPasswordValue"
                  id="ConfirmNewPassword"
                  toggleMask />
                <small id="ConfirmNewPassword-error" classs="text-danger hidden"
                  >Enter your Confirm New Password.</small
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
        <p class="m-0 text-title text-lg font-medium">Change Password</p>
        <p class="m-0 text-text">
          Secure access to your Tradgo account using a strong login password.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const CurrentPasswordValue = ref(null);
  const NewPasswordValue = ref(null);
  const ConfirmNewPasswordValue = ref(null);
</script>

<style lang="scss" scoped></style>
