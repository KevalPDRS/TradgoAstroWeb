<template>
  <div class="card">
    <div class="flex gap-2 justify-content-center cursor-pointer">
      <p
        @click="visibleRight = true"
        class="m-2 text-primary decoration-underline text-sm">
        View Plans
      </p>
    </div>

    <Sidebar
      v-model:visible="visibleRight"
      header="Browse Plans"
      position="right"
      class="w-full md:w-2/3 md:max-w-[600px] lg:max-w-[650px] xl:max-w-[700px] rounded-l-2xl">
      <TabView>
        <TabPanel v-for="tab in recharge" :key="tab.title" :header="tab.title">
          <div v-if="tab.extraDivs && tab.extraDivs.length">
            <div v-for="(extraDiv, index) in tab.extraDivs" :key="index">
              <div
                class="flex flex-col rounded-lg mb-2"
                style="border: 1px solid #e1ebff">
                <div
                  class="bg-[#FAFBFF] flex justify-between gap-2 items-center rounded-t-2xl px-8 py-3"
                  style="border-bottom: 1px solid #e1ebff">
                  <div class="w-full">
                    <h4 class="text-black text-2xl m-0">
                      ₹{{ extraDiv.amount }}
                    </h4>
                    <p class="text-text m-0">Amount</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-black text-2xl m-0">
                      {{ extraDiv.validity }} Day
                    </h4>
                    <p class="text-text m-0">Validity</p>
                  </div>
                  <div class="w-full">
                    <Button label="APPLY" class="w-full py-2" />
                  </div>
                </div>
                <div class="rounded-b-2xl px-8 py-3">
                  <p class="m-0">{{ extraDiv.detail }}</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </Sidebar>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Sidebar from "primevue/sidebar";
  const visibleRight = ref(false);

  import { recharge } from "./ViewPlans.ts";
</script>
