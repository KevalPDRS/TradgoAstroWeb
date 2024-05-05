<template>
  <div class="p-4">
    <div class="shadow-xl border p-4 flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <img
          :src="props.data.profileUrl"
          alt="Profile Picture"
          class="w-12 h-12 rounded-full" />
        <span class="font-bold">{{ props.data.name }}</span>
      </div>
      <div class="flex">
        <img
          v-for="item in 5"
          :key="item"
          :src="`./../../../../../public/images/tradgo_icon/star-${props.data.starRating > item ? 'filled' : 'empty'}.png`"
          class="w-6 h-6"
          alt="star-filled"
          title="star-filled" />
      </div>
      <div>
        {{ props.data.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    data: {
      name: string;
      starRating: number;
      profileUrl: string;
      content: string;
    };
  };

  const props = defineProps<Props>();
</script>
