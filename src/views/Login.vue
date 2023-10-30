<template>
	<div
    class="flex w-full h-[calc(100vh-160px)] bg-center bg-no-repeat bg-cover"
    style="background-image: url('./images/skyskipers.png')"
  >
		<div class="rounded-lg space-y-2 p-4 m-auto bg-baseColor text-baseWhite">
			<div class="space-y-0.5">
				<h2 class="text-2xl font-semibold">Login</h2>
				<p>We missed you</p>
			</div>
			<div class="flex flex-col place-items-center content-center rounded-md bg-lightColor ps-1">
				<span class="w-full p-0.5 text-left">Login:</span>
				<input class="w-full rounded-md p-1 bg-lightColor" type="text">
			</div>
			<div class="flex flex-col place-items-center content-center rounded-md bg-lightColor ps-1">
				<span class="w-full p-0.5 text-left">Password:</span>
				<input class="w-full rounded-md p-1 bg-lightColor" type="password">
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
			<div class="flex justify-center">
				<button
					class="rounded-md px-8 py-1.5 shadow-sm font-semibold hover:shadow-darkAccent shadow-baseAccent hover:bg-darkAccent bg-baseAccent text-baseBlack"
				>
					<p>Login</p>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

// const passwordVisible = ref(false);
</script>

<style>

</style>