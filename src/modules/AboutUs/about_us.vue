<template>
  <div class="p-4 sm:p-6">
    <h3 class="text-3xl m-0">About Us</h3>
    <hr class="my-2 sm:my-4" />
    <p>
      Tradgo is a well-known name in the world of payment app serving over 1
      Lakh users across the country. Over the years Tradgo has transformed to
      become one of the leading financial services and investment apps in India.
      From recharge & bill payments to investment & lending, Tradgo lets you do
      it all effortlessly. Tradgo has always been known for offering safe and
      seamless UPI payments, utility bill payments, mobile/DTH recharges, Pay
      Later solutions etc. With a robust infrastructure supporting multiple
      payment methods, Tradgo users can choose to pay via Wallet, UPI, Net
      Banking, Debit Cards and Credit Cards to spend across categories at their
      favourite offline or online merchant. On the lending front.
    </p>
    <div class="mt-2 sm:mt-4">
      <Accordion :activeIndex="0">
        <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
          <ul class="list-disc">
            <li
              v-for="(item, index) in tab.content"
              :key="index"
              v-html="item"></li>
          </ul>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import Accordion from "primevue/accordion";
  import AccordionTab from "primevue/accordiontab";
  import { tabsData } from "./data";
  const tabs = ref(tabsData);
</script>
