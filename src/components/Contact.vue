<template>
  <div class="flex ">
    <div class="pt-10">
      <router-link :to="link">
        <img class="w-auto h-36 rounded-lg aspect-4/3 border-solid border-baseWhite duration-75 hover:border-2"
          :src="image">
      </router-link>
    </div>
    <div class="pt-10 px-4">
      <span class="flex space-between">
        <p>Name:</p>
        <p class="px-2">{{name}}</p>
      </span>
      <span class="flex space-between">
        <p>Age:</p>
        <p class="px-2">{{age}}</p>
      </span>
      <span class="flex space-between">
        <p>Email:</p>
        <p class="px-2">{{email}}</p>
      </span>
      <span class="flex space-between">
        <p>Phone:</p>
        <p class="px-2">{{phone}}</p>
      </span>
      <span class="flex space-between">
        <p>Post:</p>
        <p class="px-2">{{post}}</p>
      </span>
    </div>
  </div>
</template>
  
<script setup lang="ts">
// @ts-ignore
defineProps<{
  image: string
  name: string
  age: string
  email: string
  phone: string
  post: string // job title
  link: string
}>();
</script>
  
<style></style>