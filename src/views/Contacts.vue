<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
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
      <Contact 
        image = "/images/shockedEmployee.jpg" 
        name = "John Smith"
        age = "32 y.o."
        email = "johntheceo@gmail.com"
        phone = "+79999999999"
        post = "CEO" 
        link = ""
      />

      <Contact 
        image = "/images/michaelZyryanovImage.jpg" 
        name = "Michael Zyryanov"
        age = "18 y.o."
        email = "mzyranov26@gmail.com"
        phone = "+79512139110"
        post = "frontend developer" 
        link = ""
      />
    </div>

    <div class="flex justify-between space-x-8">
      <Contact 
        image = "/images/man.jpg" 
        name = "Tom Right"
        age = "34 y.o."
        email = "tom_right_email@gmail.com"
        phone = "+7999 999 99 99"
        post = "Backend developer" 
        link = ""
      />

      <Contact 
        image = "/images/man2.jpg" 
        name = "Tim Coke"
        age = "23 y.o."
        email = "idontgiveu@gmail.com"
        phone = "+7 909 999 99 99"
        post = "AI engineer" 
        link = ""
      />
    </div>

  </div>
</template>


<script setup lang="ts">

  import Contact from '../components/Contact.vue';

</script>

<style scoped>

</style>