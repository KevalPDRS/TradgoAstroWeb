<template>
  <div class="flex items-center justify-center p-4 shadow-xl rounded-3xl">
    <div class="text-gray-500 rounded-xl w-full overflow-hidden">
      <div class="md:flex w-full">
        <div class="hidden md:flex items-center w-1/2 bg-primary py-10 px-10">
          <img
            :src="'public/images/auth/LogIn_Secondary.png'"
            alt="Login Image"
            class="w-full" />
        </div>
        <div class="w-full md:w-1/2 py-4 md:py-10 px-0 md:px-10">
          <div class="text-center mb-8">
            <h1 class="font-bold text-3xl text-gray-900 mb-2">
              Log In / Sign In
            </h1>
            <p>Unlock Your Digital World: Welcome Back!</p>
          </div>
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
              <div class="flex-auto w-full col-span-1 xl:col-span-2">
                <div class="flex justify-end">
                  <a href="/" class="decoration-none text-primary"
                    >Forgot Password</a
                  >
                </div>
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <Button label="Continue" class="p-4" />
              </div>
              <div class="flex-auto col-span-1 xl:col-span-2">
                <p>
                  You don't have an account yet, but you can create one easily
                  by clicking on the
                  <a href="" class="text-primary text-base decoration-none"
                    >Sign Up</a
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
<script setup>
  import { ref } from "vue";
  const usernameValue = ref(null);
  const passwordValue = ref(null);
</script>
