<template>
	<header class="flex items-center w-full py-2 px-8 text-baseWhite bg-darkColor">
	  <img class="h-16 rounded-lg" src="/images/smart_office.png">

		<nav class="ms-8 px-6 space-x-4">
			<router-link class="p-2" to="/">Home</router-link>
			<router-link class="p-2" to="/platform">Platform</router-link>
		</nav>
  
		<div class="ml-auto">
			<div v-if="isAuthorized !== undefined && isAuthorized === true" class="flex space-x-2">
				<p class="p-2">{{ full_name }}</p>
				<button class="w-max p-2" @click="signOut()">Sign Out</button>
			</div>
			<div v-if="isAuthorized !== undefined && isAuthorized === false" class="flex space-x-2">
				<router-link class="p-2" to="/login">Login</router-link>
				<router-link class="p-2" to="/registration">Registration</router-link>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, Ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const full_name: Ref<string> = ref("");
const isAuthorized: Ref<boolean | undefined> = ref(undefined);

supabase.auth.getUser().then(({ data, error }) => {
	if (data.user !== null) {
		full_name.value = `${data.user.user_metadata.full_name}`;
		isAuthorized.value = true;
	} else {
		isAuthorized.value = false;
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