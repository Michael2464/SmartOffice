<template>
  <div class="py-10">
    <button>
      <img class="w-auto h-48 rounded-lg aspect-4/3" :src="image">
    </button>
    <p class="text-center text-2xl">{{title}}</p>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
defineProps<{
  title: string
  image: string
}>();
</script>

<style></style>