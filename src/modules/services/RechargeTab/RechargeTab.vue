<template>
  <section class="container mx-auto text-white">
    <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
      <div v-for="service in services" :key="service.id" class="">
        <div
          @click="activeTab = service.id"
          class="flex flex-col items-center justify-start">
          <img
            :src="
              'public/images/all_services_light_icon/' + service.url + '.png'
            "
            :alt="service.title"
            class="h-12 hover:scale-90 transition duration-300" />
          <p class="text-center">{{ service.title }}</p>
        </div>
      </div>
      <div class="group relative">
        <div class="flex flex-col items-center justify-start">
          <img
            :src="'public/images/all_services_light_icon/More.png'"
            alt="More"
            class="h-12" />
          <p>More</p>
        </div>
        <div class="absolute right-0 hidden group-hover:block -m-4 z-100">
          <div class="flex flex-col items-end">
            <div
              class="mr-16"
              style="
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 4px solid #d6d6d6;
              "></div>
            <div
              class="bg-white p-4 rounded-xl shadow-xl w-96"
              style="border-top: 2px solid #d6d6d6">
              <div class="grid grid-cols-4 gap-4">
                <div v-for="service in moreServices" :key="service.id" class="">
                  <div
                    @click="activeTab = service.id"
                    class="flex flex-col gap-1 items-center justify-start">
                    <img
                      :src="
                        'public/images/all_services_dark_icon/' +
                        service.url +
                        '.png'
                      "
                      :alt="service.title"
                      class="h-12 hover:scale-90 transition duration-300" />
                    <p class="m-0 text-secondary text-center">
                      {{ service.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component :is="activeTab" client:load />
  </section>
</template>

<script setup>
  const services = [
    { id: "Mobile", url: "Mobile", title: "Mobile" },
    { id: "DTH", url: "DTH", title: "DTH" },
    { id: "Electricity", url: "Electricity", title: "Electricity" },
    { id: "GasCylinder", url: "GasCylinder", title: "Gas Cylinder" },
    { id: "RedeemCode", url: "RedeemCode", title: "Redeem Code" },
    { id: "PipedGas", url: "PipedGas", title: "Piped Gas" },
    { id: "Water", url: "Water", title: "Water" },
    // { id: "More", url: "More", title: "More" },
  ];
  const moreServices = [
    { id: "Postpaid", url: "Postpaid", title: "Postpaid" },
    { id: "FastTAG", url: "FastTAG", title: "Fast TAG" },
    { id: "LoanRepayment", url: "LoanRepayment", title: "Loan Repayment" },
    { id: "Landline", url: "Landline", title: "Landline" },
    { id: "Insurance", url: "Insurance", title: "Insurance" },
    { id: "CableTV", url: "CableTV", title: "Cable TV" },
    { id: "Broadband", url: "Broadband", title: "Broadband" },
    { id: "CreditCard", url: "CreditCard", title: "Credit Card" },
    { id: "MunicipalTax", url: "MunicipalTax", title: "Municipal Tax" },
    { id: "HousingSociety", url: "HousingSociety", title: "Housing Society" },
    {
      id: "ClubsAndAssociations",
      url: "ClubsAndAssociations",
      title: "Clubs & Associations",
    },
    { id: "EducationFees", url: "EducationFees", title: "Education Fees" },
    {
      id: "HospitalAndPathology",
      url: "HospitalAndPathology",
      title: "Hospital & Pathology",
    },
    {
      id: "SubscriptionFees",
      url: "SubscriptionFees",
      title: "Subscription Fees",
    },
  ];
</script>

<script>
  import Mobile from "./Mobile.vue";
  import DTH from "./DTH.vue";
  import Electricity from "./Electricity.vue";
  import GasCylinder from "./GasCylinder.vue";
  import RedeemCode from "./RedeemCode.vue";
  import PipedGas from "./PipedGas.vue";
  import Water from "./Water.vue";
  import Postpaid from "./Postpaid.vue";
  import FastTAG from "./FastTAG.vue";
  import LoanRepayment from "./LoanRepayment.vue";
  import Landline from "./Landline.vue";
  import Insurance from "./Insurance.vue";
  import CableTV from "./CableTV.vue";
  import Broadband from "./Broadband.vue";
  import CreditCard from "./CreditCard.vue";
  import MunicipalTax from "./MunicipalTax.vue";
  import HousingSociety from "./HousingSociety.vue";
  import ClubsAndAssociations from "./ClubsAndAssociations.vue";
  import EducationFees from "./EducationFees.vue";
  import HospitalAndPathology from "./HospitalAndPathology.vue";
  import SubscriptionFees from "./SubscriptionFees.vue";
  // import More from "./More.vue";

  export default {
    components: {
      Mobile,
      DTH,
      Electricity,
      GasCylinder,
      RedeemCode,
      PipedGas,
      Water,
      Postpaid,
      FastTAG,
      LoanRepayment,
      Landline,
      Insurance,
      CableTV,
      Broadband,
      CreditCard,
      MunicipalTax,
      HousingSociety,
      ClubsAndAssociations,
      EducationFees,
      HospitalAndPathology,
      SubscriptionFees,
      // More,
    },
    data() {
      return {
        activeTab: "Mobile",
      };
    },
  };
</script>

<style lang="scss" scoped></style>
