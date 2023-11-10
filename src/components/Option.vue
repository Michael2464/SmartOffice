<template>
  <div class="py-10">
    <nav>
			<router-link :to="link">
        <img class="w-auto h-48 rounded-lg aspect-4/3 border-solid border-baseWhite duration-75 hover:border-2" :src="image">
      </router-link>
		</nav>
    <p class="text-center mt-2 text-2xl w-64">{{title}}</p>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
defineProps<{
  title: string
  image: string
  link: string
}>();
</script>

<style></style>