<template>
	<div>
		<button class="w-fit h-fit px-8 py-1.5 hover:mt-0.5 rounded-md shadow-sm font-semibold border-b-2 hover:border-b-0 border-baseAccent hover:shadow-darkAccent shadow-baseAccent hover:bg-darkAccent bg-baseAccent text-baseBlack">
			{{ text }}
		</button>
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
defineProps<{
	text: string
}>();
</script>

<style>

</style>