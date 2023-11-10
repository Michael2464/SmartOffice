<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
    <div class="flex justify-between space-x-8">
      <Option 
        title = "Employees were shocked when they found out that their boss makes 500% of their salary" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />

      <Option 
        title = "Our local AI has been significantly improved and now can give recommendations" 
        image = "/images/AI.png"
        link = "" 
      />
    </div>
  </div>
</template>


<script setup lang="ts">
  import Option from '../components/Option.vue';
</script>

<style scoped>

</style>