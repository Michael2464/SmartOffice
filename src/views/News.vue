<template>
  <div class="w-full h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-baseColor text-baseWhite">
    <div class="flex justify-between space-x-8">
      <Option 
        title = "Компания Х решила нанять 500 новых сотрудников. Вот в чем причина" 
        image = "/images/newEmployees.jpg" 
        link = ""
      />

      <Option 
        title = "Продажи коктелей растут с каждым месяцем. Система Искусственного Интеллекта делает свою работу!" 
        image = "/images/drink.jpg"
        link = "" 
      />
    </div>

    <div class="flex justify-between space-x-8">
      <Option 
        title = "20 декабря 2023 года состоится собрание по поводу улучшения рекомендаций ИИ для продвижения продаж коктелей" 
        image = "/images/meeting.jpg" 
        link = ""
      />

      <Option 
        title = "Был проведен опрос об уровне удовлетворенности работников новым офисом. 85% рады работать в этом офисе" 
        image = "/images/happyEmployees.jpg"
        link = "" 
      />
    </div>

  </div>
</template>


<script setup lang="ts">
  import Option from '../components/Option.vue';
</script>

<style scoped>

</style>