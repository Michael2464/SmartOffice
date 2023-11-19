<template>
  <div class="relative w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
    <div id="platform_authorized" class="absolute invisible">
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
          link = "/services" 
        />
      </div>
    </div>
    <div id="platform_unauthorized" class="absolute">
      <h3 class="text-3xl p-4 rounded-xl bg-darkColor">You must be authorized!</h3>
    </div>
  </div>
</template>



<script setup lang="ts">
  // @ts-nocheck
  import Option from '../components/Option.vue';
  import { supabase } from '../lib/supabaseClient';

  supabase.auth.getUser().then(({ data, error }) => {
    if (data.user !== null) {
      document.getElementById('platform_authorized')?.classList.remove('invisible');
      document.getElementById('platform_unauthorized')?.classList.add('invisible');
    };
  });
</script>

<style scoped>

</style>