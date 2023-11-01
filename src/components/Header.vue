<template>
	<header class="flex items-center w-full py-2 px-8 text-baseWhite bg-darkColor">
	  <img class="h-16 rounded-lg" src="../assets/icons/smart_office.png">

		<nav class="ms-8 px-6 space-x-8">
			<router-link to="/">Home</router-link>
			<router-link to="/registration">Registration</router-link>
			<router-link to="/login">Login</router-link>
			<router-link to="/a">Info</router-link>
			<router-link to="/b">Products</router-link>
			<router-link to="/c">Contact</router-link>
		</nav>
  
	  <!-- Later it might be an image -->
	  <button class="ml-auto p-4">Options</button>
	</header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router-link-active {
	text-decoration: underline;
}
</style>