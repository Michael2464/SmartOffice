<template>
	<div class="flex items-center justify-between space-x-8">

		<div class="w-auto h-fit space-y-2">
			<h3 class="font-semibold text-2xl">
				{{ title }}
			</h3>
			<div class="text-lg ms-6">
				<p v-for="(item, index) in descriptions " :key="index">
					{{ item }}
				</p>
			</div>
		</div>
		<img class="w-auto h-64 rounded-lg aspect-4/3" :src="image">
		
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
defineProps<{
	title: string
	descriptions: Array<string>
	image: string
}>();
</script>

<style>

</style>