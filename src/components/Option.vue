<template>
  <div class="flex flex-col items-center justify-center">
		<router-link :to="link">
      <img class="w-auto h-16 sm:h-24 md:h-40 lg:h-48 rounded-lg aspect-4/3 mx-2 border-solid border-baseWhite duration-75 hover:border-2" :src="image">
    </router-link>
    <slot></slot>
    <!-- <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">{{title}}</p> -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string,
  link: string
}>();
</script>

<style></style>