<template>
  <!-- Information -->
  <div class="flex flex-col items-center bg-baseColor text-baseWhite">
    <Welcome />

    <div class="w-4/5 space-y-2">
      <div class="mb-8">
        <p class="text-center font-semibold text-5xl">Technology is transforming the workplace, and smart office solutions are at the forefront of this new change</p>
      </div>
  
      <Right
        title="Internet of Things (IoT)"
        :descriptions="[
          `Smart office IoT solutions are on the rise and can support you in every area of business.`,
          `From lights and thermostats to employee management and access control, IoT smart technology is at the heart of the smart office.`
        ]"
        image="/images/internet_of_things.png"
      />
  
      <Left
        title="Interconnectivity"
        :descriptions="[
          `One of the key components of smart offices is that all of your systems work together to make working environments more efficient, improve productivity and increase safety.`,
          `You can easily access any company related document, get in touch with your colleages, ...`
        ]"
        image="/images/interconnectivity.png"
      />
  
      <Right
        title="Machine learning (AI)"
        :descriptions="[
          `Smart office AI provides deep, data-driven insights that you can utilize to further improve your ways of working in the future.`,
          `Machine learning capabilities should be built into any smart office design, with real-time data collection to support analysis and future strategy creation.`
        ]"
        image="/images/machine_learning.jpg"
      />
  
      <Left
        title="Office Navigation"
        :descriptions="[
          `Indoor positioning through a combination of GPS, Bluetooth beacon and inertial sensor information.`,
          `Superb accuracy and battery-efficience`
        ]"
        image="/images/machine_learning.jpg"
      />
    </div>

    <div class="w-full flex justify-center py-8 mt-8 bg-darkColor">
      <div class="w-4/5 h-fit flex justify-between">
        <div class="space-y-2">
          <p class="text-xl font-semibold">The functionality of the platform is limitless and, by adapting to the company's tasks,<br>can provide the employee with all the services he or she needs.</p>
          <p class="text-lg">It combines autonomous engineering systems and<br>a convenient digital environment into one platform and offers:</p>
          <p class="text-lg ml-4">1. A system to handle climate, lighting</p>
          <p class="text-lg ml-4">2. Dealing with working tasks</p>
          <p class="text-lg ml-4">3. Navigation inside the office, face id access, AI and other</p>
        </div>

        <div class="space-y-2">
          <p>If you'd like to purchase our SmartOffice platform, fill the form below, we'll contact you soon!</p>
          <!-- Registration here -->
        
          <div class="text-xl space-y-2">
            <div class="flex space-x-2">
              <span>Full Name:</span>
              <input name="full_name" class="bg-lightColor grow rounded-md px-2 py-1" type="text"
                placeholder="Enter you full name" required>
            </div>
          
            <div class="flex space-x-2">
              <span>Company:</span>
              <input name="company" class="bg-lightColor grow rounded-md px-2 py-1" type="text"
                placeholder="Enter company name" required>
            </div>
          
            <div class="flex space-x-2">
              <span>Phone number:</span>
              <input name="phone_number" class="bg-lightColor grow rounded-md px-2 py-1" type="text"
                placeholder="Enter number" required>
            </div>
          
            <div class="flex space-x-2">
              <span>Email:</span>
              <input name="email" class="bg-lightColor grow rounded-md px-2 py-1" type="text" placeholder="Enter email"
                required>
            </div>
          </div>
        
          <div class="flex justify-center">
            <input
              class="rounded-md mt-2 px-8 py-1.5 shadow-sm font-semibold hover:shadow-darkAccent shadow-baseAccent hover:bg-darkAccent bg-baseAccent text-baseBlack"
              type="submit" value="Submit"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center py-12 bg-baseColor">
      <p class="text-xl">For more information about the product and company, see</p>
      <input
        class="rounded-md m-auto mt-2 px-8 py-1.5 shadow-sm font-semibold hover:shadow-darkAccent shadow-baseAccent hover:bg-darkAccent bg-baseAccent text-baseBlack"
        type="submit" value="Info"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import Welcome from '../components/Welcome.vue';
  import Left from '../components/Left.vue';
  import Right from '../components/Right.vue';
</script>

<style scoped></style>