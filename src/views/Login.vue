<template>
	<div
    class="flex w-full h-[calc(100vh-160px)] bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/skyskipers.png')"
  >
		<div class="rounded-lg space-y-2 p-4 m-auto bg-baseColor text-baseWhite">
			<div class="space-y-0.5">
				<h2 class="text-2xl font-semibold">Login</h2>
				<p>We missed you</p>
			</div>
			<div class="flex flex-col place-items-center content-center rounded-md bg-lightColor ps-1">
				<span class="w-full p-0.5 text-left">Login:</span>
				<input v-model="login" class="w-full rounded-md p-1 bg-lightColor" type="text">
			</div>
			<div class="flex flex-col place-items-center content-center rounded-md bg-lightColor ps-1">
				<span class="w-full p-0.5 text-left">Password:</span>
				<div class="flex w-full">
					<input v-model="password" id="password" class="w-[calc(100%-32px)] rounded-md p-1 bg-lightColor" type="password">
					<div class="w-8 h-8 shrink-0 me-0.5" @click="passwordVisible">
						<div id="visible" class="w-7 h-7 p-0.5 m-0.5 absolute bg-center bg-contain bg-origin-content hover:bg-origin-padding bg-no-repeat visible" style="background-image: url('/icons/visibility.svg');"></div>
						<div id="invisible" class="w-7 h-7 p-0.5 m-0.5 absolute bg-center bg-contain bg-origin-content hover:bg-origin-padding bg-no-repeat invisible" style="background-image: url('/icons/visibility_off.svg');"></div>
					</div>
				</div>
			</div>
			<div class="flex space-x-8">
				<div class="space-x-1">
					<input type="checkbox" name="remember">
					<span>Remember me</span>
				</div>
				<div>
					<button class="text-lightColor">Forgot password</button>
				</div>
			</div>
			<div>
				<p id="uncorrect_text" class="font-bold text-red-500 text-center h-0 invisible">Uncorrect password of login</p>
			</div>
			<div class="flex justify-center">
	    	<Button @click="submit" text="Login" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	// @ts-nocheck
  import { ref } from 'vue';
	import { supabase } from '../lib/supabaseClient';

	import Button from '../components/Button.vue';

  const login = ref('');
  const password = ref('');

  async function submit() {
		if ( login.value !== '' && password.value !== '' ) {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: login.value,
				password: password.value
			});

			if (data.session !== null) {
				window.open("http://localhost:3000/platform", "_self");
			} else {
				document.getElementById('uncorrect_text').classList.remove('h-0', 'invisible');
			};

			login.value = '';
			password.value = '';
    } else {
      alert('Нельзя оставлять поля пустыми!')
    };
  };

	function passwordVisible(_e) {
		if (document.getElementById('visible')?.classList.contains('visible')) {
			document.getElementById('password')?.removeAttribute("type")
		} else {
			document.getElementById('password')?.setAttribute("type", "password")
		}

		document.getElementById('visible')?.classList.toggle('visible');
		document.getElementById('visible')?.classList.toggle('invisible');

		document.getElementById('invisible')?.classList.toggle('visible');
		document.getElementById('invisible')?.classList.toggle('invisible');
	};
</script>

<style>

</style>