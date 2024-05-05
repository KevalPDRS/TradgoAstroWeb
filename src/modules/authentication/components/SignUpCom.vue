<template>
  <div class="flex items-center justify-center p-4 shadow-xl rounded-3xl">
    <div class="text-gray-500 rounded-xl w-full overflow-hidden">
      <div class="md:flex w-full">
        <div class="hidden md:flex items-center w-1/2 bg-primary py-10 px-10">
          <img
            :src="'public/images/auth/SignUp_Secondary.png'"
            alt="Sign Up Image"
            class="w-full my-auto" />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-8">
            <h1 class="font-bold text-3xl text-gray-900 mb-2">Sign Up</h1>
            <p>Join the Tradgo: Create Your Account Today!</p>
          </div>
          <form action="">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="mobileNumber">Mobile Number</label>
                  <InputNumber
                    v-model="mobileNumberValue"
                    id="mobileNumber"
                    :useGrouping="false"
                    aria-describedby="mobileNumber-error" />
                  <small id="mobileNumber-error" classs="text-danger hidden"
                    >Enter Your Mobile Number</small
                  >
                </div>
              </div>
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="emailId">Email Id</label>
                  <InputText
                    id="emailId"
                    type="email"
                    v-model="emailIdValue"
                    aria-describedby="emailId-help" />
                  <small id="emailId-help" classs="text-danger hidden"
                    >Enter Your Email Id</small
                  >
                </div>
              </div>
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="fullName">Full Name</label>
                  <InputText
                    id="fullName"
                    v-model="fullNameValue"
                    aria-describedby="fullName-help" />
                  <small id="fullName-help" classs="text-danger hidden"
                    >Enter Your Full Name</small
                  >
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
              <div class="flex-auto">
                <div class="flex flex-col gap-1">
                  <label for="referralCode">Referral Code</label>
                  <InputText
                    id="referralCode"
                    v-model="referralCodeValue"
                    aria-describedby="referralCode-help" />
                  <small id="referralCode-help" classs="text-danger hidden"
                    >Enter Your Referral Code</small
                  >
                </div>
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <Button label="Submit" class="p-4" />
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <p>
                  You have an account. Please log in to access your account.
                  <a href="" class="text-primary text-base decoration-none"
                    >Sign In</a
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
  const mobileNumberValue = ref(null);
  const emailIdValue = ref(null);
  const fullNameValue = ref(null);
  const passwordValue = ref(null);
  const confirmPasswordValue = ref(null);
  const referralCodeValue = ref(null);
</script>
