<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');

  * {
	  font-family: 'Raleway', sans-serif;
  }
</style>
