<template>
  <div class="flex flex-col items-center bg-baseColor text-baseWhite">

    <h1 class="text-center text-3xl font-semibold my-6">Company Contacts</h1>

    <div class="text-xl space-y-3 max-w-lg mt-3">
      <div class="flex space-x-2">
        <span>Search:</span>
        <input class="bg-lightColor grow rounded-md px-2 py-1" type="text"
                placeholder="Enter employee name">
      </div>
    </div>

    <!-- with 'for' loop add every company member
        for now it is just hard-written here to demonstrate -->
    <div class="flex justify-between space-x-8">
      <Option 
        title = "John Smith, 32 y.o., CEO" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />

      <Option 
        title = "John Smith, 30 y.o., engineer" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />

      <Option 
        title = "John Smith, 32 y.o., backend developer" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />
    </div>

    <div class="flex justify-between space-x-8">
      <Option 
        title = "John Smith, 32 y.o., engineer" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />

      <Option 
        title = "John Smith, 32 y.o., engineer" 
        image = "/images/shockedEmployee.jpg" 
        link = ""
      />

      <Option 
        title = "John Smith, 32 y.o., engineer" 
        image = "/images/shockedEmployee.jpg" 
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