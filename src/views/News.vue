<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center space-y-4 bg-baseColor text-baseWhite">
    <div class="flex items-start justify-between space-x-8">
      <Option image = "/images/newEmployees.jpg" link = "">
        <p class="text-center mt-2 text-sm sm:text-md md:text-lg max-w-sm">Компания Х решила нанять 500 новых сотрудников. Вот в чем причина</p>
      </Option>
      <Option image = "/images/drink.jpg" link = "" >
        <p class="text-center mt-2 text-sm sm:text-md md:text-lg max-w-sm">Продажи коктелей растут с каждым месяцем. Система Искусственного Интеллекта делает свою работу!</p>
      </Option>
    </div>

    <div class="flex items-start justify-between space-x-8">
      <Option image = "/images/meeting.jpg" link = "">
        <p class="text-center mt-2 text-sm sm:text-md md:text-lg max-w-md">20 декабря 2023 года состоится собрание по поводу улучшения рекомендаций ИИ для продвижения продаж коктелей</p>
      </Option>

      <Option image = "/images/happyEmployees.jpg" link = "">
        <p class="text-center mt-2 text-sm sm:text-md md:text-lg max-w-sm">Был проведен опрос об уровне удовлетворенности работников новым офисом. 85% рады работать в этом офисе</p>
      </Option>
    </div>

  </div>
</template>


<script setup lang="ts">
  import Option from '../components/Option.vue';
</script>

<style scoped>

</style>