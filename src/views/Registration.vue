<template>
  <div
    class="flex w-full h-[calc(100vh-160px)] bg-center bg-no-repeat bg-cover"
    style="background-image: url('./public/images/skyskipers.png')"
  >
    <div class="rounded-2xl w-fit m-auto text-baseWhite bg-baseColor">
      <form class="p-2" action="#">
        <div class="p-2">
          <h2 class="w-fit text-3xl font-semibold">Registration</h2>
          <p>Welcome!</p>
        </div>

        <div class="text-xl px-1 space-y-2">
          <div class="flex space-x-2">
            <span>Full Name:</span>
            <input
              name="full_name"
              class="bg-lightColor grow rounded-md px-2 py-1"
              type="text"
              placeholder="Enter you full name"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span>Company:</span>
            <input
              name="company"
              class="bg-lightColor grow rounded-md px-2 py-1"
              type="text"
              placeholder="Enter company name"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span>Phone number:</span>
            <input
              name="phone_number"
              class="bg-lightColor grow rounded-md px-2 py-1"
              type="text"
              placeholder="Enter number"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span>Email:</span>
            <input
              name="email"
              class="bg-lightColor grow rounded-md px-2 py-1"
              type="text"
              placeholder="Enter email"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span>Password:</span>
            <input
              name="password"
              class="bg-lightColor grow rounded-md px-2 py-1"
              type="text"
              placeholder="Enter password"
              required
            >
          </div>

          <div class="flex space-x-2">
            <span>Confirm Password:</span>
            <input
              name="reply_password"
              class="bg-lightColor grow rounded-md px-2 py-1"
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

        <div class="flex justify-center">
          <input
            class="rounded-md px-8 py-1.5 shadow-sm font-semibold hover:shadow-darkAccent shadow-baseAccent hover:bg-darkAccent bg-baseAccent text-baseBlack"
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