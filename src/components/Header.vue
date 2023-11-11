<template>
	<header class="flex items-center w-full py-2 px-8 text-baseWhite bg-darkColor">
	  <img class="h-16 rounded-lg" src="/images/smart_office.png">

		<nav class="ms-8 px-6 space-x-4">
			<router-link class="p-2" to="/">Home</router-link>
			<router-link class="p-2" to="/platform">Platform</router-link>
			<router-link class="p-2" to="/news">News</router-link>
			<!-- <router-link class="p-2" to="/a">Products</router-link> -->
			<!-- <router-link class="p-2" to="/b">Contact</router-link> -->
		</nav>
  
		<!-- Later it might be an image -->
		<div class="ml-auto space-x-2">
			<router-link class="p-2" to="/login">Login</router-link>
			<router-link class="p-2" to="/registration">Registration</router-link>
			<!-- <button class="p-2">Options</button> -->
		</div>

	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router-link-active {
	text-decoration: underline;
}
</style>