<template>
  <div class="flex flex-col items-center bg-baseColor text-baseWhite">

    <div class="flex items-center justify-between space-x-8">

      <Option 
        title = "News" 
        image = "/images/news.png" 
      />

      <Option 
        title = "Contacts" 
        image = "/images/contacts.png" 
      />

      <Option 
        title = "Documents" 
        image = "/images/documents.png" 
      />

    </div>

    <div class="flex items-center justify-between space-x-8">

      <Option 
        title = "Surrounding" 
        image = "/images/surrounding.png" 
      />

      <Option 
        title = "Navigation" 
        image = "/images/navigation.png" 
      />

      <Option 
        title = "Local Services" 
        image = "/images/localServices.png" 
      />

    </div>

  </div>
</template>



<script setup lang="ts">

import Option from '../components/Option.vue';

</script>

<style scoped></style>