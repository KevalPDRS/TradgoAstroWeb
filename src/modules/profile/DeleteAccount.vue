<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">Delete Account</h2>
    <hr class="" />
    <div class="px-4 py-2 flex flex-row gap-4">
      <div class="w-full md:w-4/6 flex flex-col gap-2">
        <form action="">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="username">Username</label>
                <InputNumber
                  v-model="usernameValue"
                  id="username"
                  :useGrouping="false"
                  aria-describedby="username-error" />
                <small id="username-error" classs="text-danger hidden"
                  >Enter your username.</small
                >
              </div>
            </div>
            <div class="flex-auto">
              <div class="flex flex-col gap-1">
                <label for="password">Password</label>
                <Password v-model="passwordValue" id="password" toggleMask />
                <small id="password-error" classs="text-danger hidden"
                  >Enter your password.</small
                >
              </div>
            </div>
            <div class="flex-auto col-span-1 xl:col-span-2">
              <Button label="Continue" />
            </div>
          </div>
        </form>
      </div>
      <div class="w-2/6 hidden md:flex flex-col gap-2 p-4 bg-lightGrey h-fit">
        <p class="m-0 text-title text-lg font-medium">Delete Account</p>
        <p class="m-0 text-text">Why are you deleting this account?</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const usernameValue = ref(null);
  const passwordValue = ref(null);
</script>

<style lang="scss" scoped></style>
