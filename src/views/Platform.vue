<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">

    <div class="flex items-center space-x-8">
      <Option 
        title = "News" 
        image = "/images/news.png" 
        link = "/news"
      />
      <Option 
        title = "Contacts" 
        image = "/images/contacts.png" 
        link = "/contacts"
      />
      <Option 
        title = "Documents" 
        image = "/images/documents.png"
        link = "" 
      />
    </div>

    <div class="flex items-center space-x-8">
      <Option 
        title = "Surrounding" 
        image = "/images/surrounding.png"
        link = "" 
      />
      <Option 
        title = "Navigation" 
        image = "/images/navigation.png"
        link = "" 
      />
      <Option 
        title = "Local Services" 
        image = "/images/localServices.png"
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