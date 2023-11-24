<template>
  <div
    class="flex w-full h-[calc(100vh-160px)] bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/skyskipers.png')"
  >
    <div class="rounded-xl w-fit m-auto text-baseWhite bg-baseColor">
      <div class="p-2" action="#">
        <div class="p-2">
          <h2 class="w-fit text-3xl font-semibold">Registration</h2>
          <p>Welcome!</p>
        </div>

        <div class="px-1 space-y-2">
          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Full Name:</span>
            <input
              v-model="full_name" 
              name="full_name"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="text"
              placeholder="Enter you full name"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Company:</span>
            <input
              v-model="company"
              name="company"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="text"
              placeholder="Enter company name"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Phone number:</span>
            <input
              v-model="phone_number"
              name="phone_number"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="text"
              placeholder="Enter number"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Email:</span>
            <input
              v-model="email"
              name="email"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="text"
              placeholder="Enter email"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Password:</span>
            <input
              v-model="password"
              name="password"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="password"
              placeholder="Enter password"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="w-fit h-fit">Confirm Password:</span>
            <input
              v-model="reply_password"
              name="reply_password"
              class="bg-lightColor grow rounded-md ps-1.5 py-0.5"
              type="password"
              placeholder="Confirm password"
              required
            >
          </div>

          <div class="flex items-center space-x-2">
            <span class="">Gender:</span>
            <label class="flex justify-center space-x-1">
              <input v-model="gender" name="gender" value="male" type="radio">
              <span class="w-fit h-fit">Male</span>
            </label>
            <label class="flex justify-center space-x-1">
              <input v-model="gender" name="gender" value="female" type="radio">
              <span class="w-fit h-fit">Female</span>
            </label>
          </div>

        </div>

        <div class="flex justify-center">
          <Button class="mt-3 mb-1" @click="submit" text="Sign Up" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient';

  import Button from '../components/Button.vue';

  const full_name = ref('');
  const company = ref('');
  const phone_number = ref('');
  const email = ref('');
  const password = ref('');
  const reply_password = ref('');
  const gender = ref('');

  async function submit() {
    if (password.value == reply_password.value) {
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
          data: {
            full_name: full_name.value,
            company: company.value,
            phone_number: phone_number.value,
            gender: gender.value
          }
        }
      });

      if (data.user !== null) {
        window.open("/platform", "_self");
      };
    } else {
      alert("Passwords must match!")
    };
  };
</script>

<style scoped>

</style>