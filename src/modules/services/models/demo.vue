<template>
  <div>
    <Toast />
    <ConfirmDialog group="headless">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div
          class="flex flex-col items-center p-5 surface-overlay border-rounded">
          <div
            class="rounded-full bg-primary inline-flex justify-center items-center h-6rem w-6rem -mt-12">
            <i class="pi pi-question text-5xl"></i>
          </div>
          <span class="font-bold text-2xl block mb-2 mt-4">{{
            message.header
          }}</span>
          <p class="mx-0 mb-0">{{ message.message }}</p>
          <div class="flex items-center gap-2 mt-4">
            <Button
              label="Save"
              @click="acceptCallback"
              class="w-8rem"></Button>
            <Button
              label="Cancel"
              outlined
              @click="rejectCallback"
              class="w-8rem"></Button>
          </div>
        </div>
      </template>
    </ConfirmDialog>
    <Button @click="requireConfirmation()" label="Save"></Button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useConfirm } from "primevue/useconfirm";
  import { useToast } from "primevue/usetoast";

  const confirm = useConfirm();
  const toast = useToast();

  const requireConfirmation = () => {
    confirm.require({
      group: "headless",
      header: "Are you sure?",
      message: "Please confirm to proceed.",
      accept: () => {
        toast.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted",
          life: 3000,
        });
      },
      reject: () => {
        toast.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected",
          life: 3000,
        });
      },
    });
  };
</script>

<style lang="scss" scoped></style>
