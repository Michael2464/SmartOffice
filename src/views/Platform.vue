<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
    <div v-if="isAuthorized !== undefined && isAuthorized === true" class="space-y-12">
      <div class="flex items-center space-x-8">
        <Option image = "/images/news.png" link = "/news">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">News</p>
        </Option>
        <Option image = "/images/contacts.png" link = "/contacts">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">Contacts</p>
        </Option>
        <Option image = "/images/documents.png" link = "/documents">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">Documents</p>
        </Option>
      </div>
  
      <div class="flex items-center space-x-8">
        <Option image = "/images/surrounding.png" link = "">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">Surrounding</p>
        </Option>
        <Option image = "/images/navigation.png" link = "">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">Navigation</p>
        </Option>
        <Option image = "/images/localServices.png" link = "/services">
          <p class="text-center mt-2 text-md sm:text-xl md:text-2xl max-w-xl">Local Services</p>
        </Option>
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