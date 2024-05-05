<template>
  <div class="container mx-auto bg-white p-4 shadow-lg rounded-lg">
    <div class="flex flex-col gap-4">
      <p class="m-0 text-title font-bold text-lg">DTH Recharge</p>
      <div
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-fluid text-black">
        <div class="flex-auto">
          <div class="flex flex-col gap-1">
            <label for="mobileNumber">Select Your Operator</label>
            <Dropdown
              v-model="selectedOperator"
              :options="operatorData"
              filter
              placeholder="Select Your Subject"
              optionLabel="name"
              class="w-full">
              <template #value="slotProps" class="">
                <div v-if="slotProps.value" class="flex align-items-center">
                  <div class="border-red">{{ slotProps.value.name }}</div>
                </div>
              </template>
            </Dropdown>
            <small id="mobileNumber-error" classs="text-danger hidden"
              >Select Your Operator</small
            >
          </div>
        </div>
        <div class="flex-auto">
          <div class="flex flex-col gap-1">
            <label for="mobileNumber">Enter Mobile Number</label>
            <InputNumber
              v-model="mobileNumberValue"
              id="mobileNumber"
              placeholder="Enter Mobile Number"
              :useGrouping="false"
              aria-describedby="mobileNumber-error" />
            <small id="mobileNumber-error" classs="text-danger hidden"
              >Enter Your Mobile Number</small
            >
          </div>
        </div>
        <div class="flex-auto">
          <div class="flex flex-col gap-1">
            <label for="rechargeAmount">Enter Amount</label>
            <div class="flex relative">
              <InputNumber
                v-model="rechargeAmountValue"
                id="rechargeAmount"
                placeholder="Enter Amount"
                :useGrouping="false"
                aria-describedby="rechargeAmount-error" />
              <div client:load class="absolute right-0">
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
                  class="w-full md:w-2/3 md:max-w-[600px] lg:max-w-[650px] xl:max-w-[700px]">
                  <TabView>
                    <TabPanel
                      v-for="tab in recharge"
                      :key="tab.title"
                      :header="tab.title">
                      <div v-if="tab.extraDivs && tab.extraDivs.length">
                        <div
                          v-for="(extraDiv, index) in tab.extraDivs"
                          :key="index">
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
            </div>
            <small id="rechargeAmount-error" classs="text-danger hidden"
              >Enter Your Amount</small
            >
          </div>
        </div>
        <div
          class="flex-auto col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-0 xl:mt-6">
          <!-- <Button label="Continue" /> -->
          <ConfirmDetails client:load />
        </div>
        <!-- <div
          class="flex-auto col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-0 xl:mt-6">
          <ConfirmDetails client:load />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import ConfirmDetails from "./../models/ConfirmDetails.vue";
  const mobileNumberValue = ref(null);
  const rechargeAmountValue = ref(null);

  import Dropdown from "primevue/dropdown";
  const selectedOperator = ref();

  const operatorData = ref([
    { name: "Airtel DTH" },
    { name: "Dish DTH" },
    { name: "Sun Direct TV" },
    { name: "TATA PLAY" },
    { name: "Videocon DTH TV" },
  ]);

  // import ViewPlans from "./ViewPlans.vue";
  import Sidebar from "primevue/sidebar";
  const visibleRight = ref(false);

  const recharge = ref([
    {
      title: "Monthly Packs",
      extraDivs: [
        {
          amount: "101",
          validity: "30",
          detail: "STAR-SVP HD Tamil-Telugu(Rs.100.3) - Channels:12",
        },
        {
          amount: "101",
          validity: "28",
          detail: "STAR-SVP HD Tamil-Malayalam(Rs.100.3) - Channels:11",
        },
      ],
    },
  ]);
</script>

<style lang="scss" scoped></style>
