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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&family=Raleway:wght@300;400&family=Work+Sans:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Raleway:wght@300;400&family=Work+Sans:wght@300&display=swap');

  * {
    font-family: 'Noto Sans', sans-serif;
  }
</style>
