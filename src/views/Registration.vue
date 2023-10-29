<template>
  <div
    class="flex w-full h-[calc(100vh-160px)] bg-center bg-no-repeat bg-cover"
    style="background-image: url('./public/images/skyskipers.png')"
  >
    <div class="rounded-2xl w-fit m-auto text-blackC bg-whiteC">
      <form class="p-2" action="#">
        <h2 class="w-fit p-2 pb-4 text-3xl font-semibold m-auto">Registration</h2>

        <div class="text-xl px-1 space-y-1">
          <div class="flex space-x-1">
            <span>Full Name:</span>
            <input
              name="full_name"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Enter you full name"
              required
            >
          </div>

          <div class="flex space-x-1">
            <span>Company:</span>
            <input
              name="company"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Enter company name"
              required
            >
          </div>

          <div class="flex space-x-1">
            <span>Phone number:</span>
            <input
              name="phone_number"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Enter number"
              required
            >
          </div>

          <div class="flex space-x-1">
            <span>Email:</span>
            <input
              name="email"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Enter email"
              required
            >
          </div>

          <div class="flex space-x-1">
            <span>Password:</span>
            <input
              name="password"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Enter password"
              required
            >
          </div>

          <div class="flex space-x-1">
            <span>Confirm Password:</span>
            <input
              name="reply_password"
              class="grow rounded-md px-1"
              type="text"
              placeholder="Confirm password"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span class="">Gender:</span>
            <label class="flex justify-center space-x-1">
              <input name="gender" value="male" type="radio">
              <span>Male</span>
            </label>
            <label class="flex justify-center space-x-1">
              <input name="gender" value="female" type="radio">
              <span>Female</span>
            </label>
          </div>

        </div>

        <div class="flex flex-row-reverse">
          <input
            class="px-1 rounded-lg text-lg font-semibold text-whiteC bg-lightBlueC"
            type="submit"
            value="Sign Up"
          >
        </div>

      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>