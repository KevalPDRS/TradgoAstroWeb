<template>
  <div class="flex items-center justify-center p-4 shadow-xl rounded-3xl">
    <div class="text-gray-500 rounded-xl w-full overflow-hidden">
      <div class="md:flex w-full">
        <div class="hidden md:flex items-center w-1/2 bg-primary py-10 px-10">
          <img
            :src="'public/images/auth/OTP_Secondary.png'"
            alt="OTP Image"
            class="w-full my-auto" />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-8">
            <h1 class="font-bold text-3xl text-gray-900 mb-2">OTP</h1>
            <p>
              Success! Your OTP code has been sent to <br />
              +91 ******9898
            </p>
          </div>
          <form action="">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
              <div class="flex-auto col-span-1 xl:col-span-2">
                <div class="flex flex-col gap-1">
                  <InputOtp v-model="otpValue" :length="6" integerOnly />
                </div>
              </div>
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="password">Password</label>
                  <Password v-model="passwordValue" id="password" toggleMask />
                  <small id="password-error" classs="text-danger hidden"
                    >Enter your username.</small
                  >
                </div>
              </div>
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="confirmPassword">Confirm Password</label>
                  <Password
                    v-model="confirmPasswordValue"
                    id="confirmPassword"
                    toggleMask />
                  <small id="confirmPassword-error" classs="text-danger hidden"
                    >Enter your username.</small
                  >
                </div>
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <Button label="Proceed To Change" class="p-3" />
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <p class="text-center">
                  Not received your code?
                  <a href="" class="text-primary text-base decoration-none"
                    >Resend code</a
                  >.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  const otpValue = ref(null);
  const passwordValue = ref(null);
  const confirmPasswordValue = ref(null);
</script>
