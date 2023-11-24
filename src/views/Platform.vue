<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
    <div v-if="isAuthorized !== undefined && isAuthorized === true">
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
          link = "/documents" 
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
    <div v-if="isAuthorized !== undefined && isAuthorized === false">
      <h3 class="text-3xl p-4 rounded-xl bg-darkColor">You must be authorized!</h3>
    </div>
  </div>
</template>



<script setup lang="ts">
  // @ts-nocheck
  import { ref, Ref } from 'vue';
  import Option from '../components/Option.vue';
  import { supabase } from '../lib/supabaseClient';

  const isAuthorized: Ref<boolean | undefined> = ref(undefined);

  supabase.auth.getUser().then(({ data, error }) => {
    if (data.user !== null) {
      isAuthorized.value = true;
    } else {
      isAuthorized.value = false;
    };
  });
</script>

<style scoped>

</style>