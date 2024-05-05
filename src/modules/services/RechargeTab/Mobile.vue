<template>
  <div class="container mx-auto bg-white p-4 shadow-lg rounded-lg">
    <div class="flex flex-col gap-4">
      <p class="m-0 text-title font-bold text-lg">Mobile Recharge</p>
      <div class="flex flex-wrap gap-3 text-black">
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient1"
            value="Prepaid" />
          <label for="ingredient1" class="ml-2">Prepaid</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient2"
            value="Postpaid" />
          <label for="ingredient2" class="ml-2">Postpaid</label>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-fluid text-black">
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
          class="flex-auto col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-1 mt-0 xl:mt-6">
          <!-- <Button label="Continue" /> -->
          <ConfirmDetails client:load />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import ConfirmDetails from "./../models/ConfirmDetails.vue";

  const ingredient = ref("Prepaid");
  const mobileNumberValue = ref(null);
  const rechargeAmountValue = ref(null);

  import Dropdown from "primevue/dropdown";
  const selectedOperator = ref();

  const operatorData = ref([
    { name: "Airtel" },
    { name: "Jio" },
    { name: "BSNL-STV" },
    { name: "BSNL-TOPUP" },
    { name: "Vodafone" },
  ]);

  // import ViewPlans from "./ViewPlans.vue";
  import Sidebar from "primevue/sidebar";
  const visibleRight = ref(false);

  const recharge = ref([
    {
      title: "Unlimited",
      extraDivs: [
        {
          amount: "149",
          validity: "20",
          detail:
            "1 GB/day data + Unlimited calls + 100 SMS/day + JioTV, JioCinema, JioCloud apps subscriptions",
        },
        {
          amount: "239",
          validity: "28",
          detail:
            "1 GB/day data + Unlimited calls + 100 SMS/day + JioTV, JioCinema, JioCloud apps subscriptions",
        },
      ],
    },
    {
      title: "5G Upgrade",
      extraDivs: [
        {
          amount: "61",
          validity: "existing",
          detail: "6GB Data",
        },
      ],
    },
    {
      title: "Talktime",
      extraDivs: [
        {
          amount: "10",
          validity: "N/A",
          detail: "7.47 Talktime",
        },
        {
          amount: "20",
          validity: "N/A",
          detail: "14.95 Talktime",
        },
        {
          amount: "50",
          validity: "N/A",
          detail: "39.37 Talktime",
        },
        {
          amount: "100",
          validity: "N/A",
          detail: "81.75 Talktime",
        },
        {
          amount: "500",
          validity: "N/A",
          detail: "420.73 Talktime",
        },
        {
          amount: "1000",
          validity: "N/A",
          detail: "844.46 Talktime",
        },
      ],
    },
  ]);
</script>

<style lang="scss" scoped></style>
s
