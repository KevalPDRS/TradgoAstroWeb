<template>
  <div>
    <h2 class="text-2xl font-medium m-0 text-title">My Profile</h2>
    <hr class="" />
    <div class="card">
      <Toast />
      <FileUpload
        name="demo[]"
        url="/api/upload"
        @upload="onAdvancedUpload($event)"
        :multiple="true"
        accept="image/*"
        :maxFileSize="1000000">
        <template #empty>
          <p>Drag and drop files to here to upload.</p>
        </template>
      </FileUpload>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useToast } from "primevue/usetoast";
  const toast = useToast();

  const onAdvancedUpload = () => {
    toast.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
      life: 3000,
    });
  };
</script>

<style lang="scss" scoped></style>
