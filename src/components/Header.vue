<template>
	<header class="flex items-center w-full py-2 px-8 text-baseWhite bg-darkColor">
	  <img class="h-16 rounded-lg" src="/images/smart_office.png">

		<nav class="ms-8 px-6 space-x-4">
			<router-link class="p-2" to="/">Home</router-link>
			<router-link class="p-2" to="/platform">Platform</router-link>
		</nav>
  
		<div class="relative h-10 ml-auto">
			<div id="header_unauthorized" class="absolute flex top-0 right-0 space-x-2">
				<router-link class="p-2" to="/login">Login</router-link>
				<router-link class="p-2" to="/registration">Registration</router-link>
			</div>
			<div id="header_authorized" class="absolute flex top-0 right-0 invisible">
				<p class="p-2">{{ email }}</p>
				<button class="w-max p-2" @click="signOut()">Sign Out</button>
			</div>
		</div>

	</header>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const email = ref("");
supabase.auth.getUser().then(({ data, _error }) => {
	if (data.user !== null) {
		email.value = `${data.user?.email}`;
		document.getElementById('header_authorized')?.classList.remove('invisible');
		document.getElementById('header_unauthorized')?.classList.add('invisible');
	} else {

	};
});

function signOut() {
	supabase.auth.signOut().then(() => {
		window.open("http://localhost:3000/", "_self");
	});
};
</script>

<style scoped>
.router-link-active {
	text-decoration: underline;
}
</style>