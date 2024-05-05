<template>
  <div class="flex items-center justify-center p-4 shadow-xl rounded-3xl">
    <div class="text-gray-500 rounded-xl w-full overflow-hidden">
      <div class="md:flex w-full">
        <div class="hidden md:flex items-center w-1/2 bg-primary py-10 px-10">
          <img
            :src="'public/images/auth/Forget_Password_Secondary.png'"
            alt="Forget Password Image"
            class="w-full my-auto" />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-8">
            <h1 class="font-bold text-3xl text-gray-900 mb-2">
              Forgot Password
            </h1>
            <p>Lost Your Key? No Worries! Let's Retrieve It.</p>
          </div>
          <form action="">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-4 p-fluid">
              <div class="flex-auto col-span-1 xl:col-span-2">
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
              <div class="flex-auto col-span-1 xl:col-span-2">
                <Button label="Submit" class="p-4" />
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <p>
                  <a href="" class="text-primary text-base decoration-none"
                    >Return to Sign In</a
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
</script>
