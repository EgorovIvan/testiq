<script setup>
import {useRoute} from 'vue-router';
const route = useRoute();
import NavigateButton from "@/components/NavigateButton.vue";

</script>

<template>
  <header class="header">
    <div class="container">
      <NavigateButton/>
      <div v-if="route.name == 'Test'" class="header__block">
        <img  class="header__img" src="../../public/images/brain.webp" alt="brain">
        <h2 class="header__title">
          тест на определение IQ
        </h2>
      </div>
      <div v-if="route.name == 'Info'" class="header__block">
        <img  class="header__img" src="../../public/images/brain.webp" alt="brain">
        <h2 class="header__results-title">
          Готово!
        </h2>
      </div>

    </div>
  </header>
</template>

<style scoped>
.header {
  width: 20rem;
  height: 2.88rem;
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
  background: rgb(24, 24, 24);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5625rem;
  width: 100%;
  height: 100%;
}

.header__block {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5625rem;
}

.header__img {
  width: 3rem;
  height: 2.94rem;
}

.header__results-title {
  color: rgb(255, 199, 0);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.44rem;
  letter-spacing: 10%;
  text-align: left;
  text-transform: uppercase;
}
</style>