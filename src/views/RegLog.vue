<template>
  <div id="customFont" class="box-border bg-gradient-to-br from-darkBlueC via-blackC to-darkBlueC">
    
    <!-- DOESN'T WORK -->
    <div class="bg-[url('../assets/images/skyskipers.png')] h-1/2 bg-center bg-no-repeat bg-cover"></div>
    
    <div class="m-auto text-blackC max-w-sm w-full h-[720px] 
    bg-whiteC rounded-2xl px-4">
    <form action="#">
        <div class="text-3xl text-center font-semibold relative pt-6 pb-8
        before:content-[] before:absolute before:left-0 before:bottom-0
        before:h-1 before:w-12 before:bg-darkBlueC">Registration</div>
        
        <div class="flex flex-wrap justify-between">
          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Full Name</span>
            <input class="h-9 w-full block pl-3 border-solid border rounded-xl 
            border-b-2 outline-none border-transparent transition ease-in-out 
            duration-150 focus:border-lightBlueC valid:border-lightBlueC" type="text" placeholder="Enter you full name" required>
          </div>

          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Company</span>
            <select class="h-9 w-full pl-3" name="Companies">
              <option value="vk">VK</option>
              <option value="yandex">Yandex</option>
              <option value="coolguys">Cool Guys</option>
            </select>
          </div>

          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Phone number</span>
            <input class="h-9 w-full block pl-3 border-solid border rounded-xl 
            border-b-2 outline-none border-transparent transition ease-in-out 
            duration-150 focus:border-lightBlueC valid:border-lightBlueC" type="text" placeholder="Enter you number" required>
          </div>

          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Email</span>
            <input class="h-9 w-full block pl-3 border-solid border rounded-xl 
            border-b-2 outline-none border-transparent transition ease-in-out 
            duration-150 focus:border-lightBlueC valid:border-lightBlueC" type="text" placeholder="Enter you email" required>
          </div>

          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Password</span>
            <input class="h-9 w-full block pl-3 border-solid border rounded-xl 
            border-b-2 outline-none border-transparent transition ease-in-out 
            duration-150 focus:border-lightBlueC valid:border-lightBlueC" type="text" placeholder="Enter password" required>
          </div>

          <div class="my-2 w-[calc(100% / 2 - 20px)]">
            <span class="font-medium text-lg">Confirm Password</span>
            <input class="h-9 w-full block pl-3 border-solid border rounded-xl 
            border-b-2 outline-none border-transparent transition ease-in-out 
            duration-150 focus:border-lightBlueC valid:border-lightBlueC" type="text" placeholder="Confirm your password" required>
          </div>
        </div>

        <div id="customFont" class="my-2">
          <span class="font-medium text-lg">Gender</span>
          <div class="flex w-3/6 justify-between">
            <label class="flex align-center" for="">
              <fieldset>
                <input class="mr-2" id="setG_male" type="radio">
              </fieldset>
              <span>Male</span>
            </label>
            <label class="flex align-center" for="">
              <fieldset>
                <input class="mr-2" id="setG_female" type="radio">
              </fieldset>
              <span>Female</span>
            </label>
          </div>
        </div>

        <div id="customFont">
          <input class="w-28 h-9 mt-6 text-whiteC outline-none border-none bg-lightBlueC 
          text-xl font-semibold rounded-2xl" type="submit" value="Sign Up">
        </div>

      </form>

    </div>

  </div>
  
</template>

<script setup lang="ts">

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&family=Raleway:wght@300;400&family=Work+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Raleway:wght@300;400&family=Work+Sans:wght@300&display=swap');

#customFont {
  font-family: 'Noto Sans', sans-serif;
}
</style>