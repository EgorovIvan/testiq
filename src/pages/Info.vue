<script setup>

import {ref} from "vue";
import axios from "axios";
import Footer from "@/components/Footer.vue";

const items = ref({});
const fetch = async () => {

  try {
    const {data} = await axios.get(`https://swapi.dev/api/people/1`)
    items.value = data;
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="results">
    <div class="results__wrapper">
      <div class="container">
        <div class="results__title">
          Ваш результат рассчитан:
        </div>
        <p class="results__text">
          вы относитесь к 3% респондентов, чей <br>
          уровень интеллекта более чем на <br>
          15 пунктов отличается от среднего в <br>
          большую или меньшую сторону!
        </p>
        <div class="results__subtitle">
          Скорее получите свой результат!
        </div>
        <div class="results__information">
          В целях защиты персональных <br>
          данных результат теста, их <br>
          подробная интерпретация и <br>
          рекомендации доступны в виде <br>
          голосового сообщения по звонку с <br>
          вашего мобильного телефона
        </div>
        <p class="results__desc">
          Звоните скорее, запись доступна всего <br>
          <span>10:00 минут</span>
        </p>
        <button class="results__btn"
                type="button"
                @click="fetch"
        >
          <p class="results__btn-text">Позвонить и прослушать результат</p>
        </button>
        <div v-show="Object.keys(items).length !== 0" class="results__data">
          <h3>Имя: {{items.name}}</h3>
          <p>Характеристики персонажа:</p>
          <ul>
            <li>рост {{items.height}}</li>
            <li>вес {{items.mass}}</li>
            <li>цвет волос {{items.blond}}</li>
            <li>пол {{items.gender}}</li>
          </ul>
        </div>

      </div>
    </div>

    <Footer/>
  </div>

</template>

<style scoped>
.results {
  padding-top: 2rem;
  max-width: 20rem;
  height: 39rem;
  background: url(../../public/images/bg-result.webp) no-repeat;
  background-size: cover;
  overflow: scroll;
}

@media (min-resolution: 2dppx) {
  .results {
    background: url(../../public/images/bg-result@2x.webp) no-repeat ;
    background-size: cover;
  }
}

.results__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 36rem;
}

.results .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

}

.results__title {
  margin-bottom: 0.5rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 0.94rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;
}

.results__text {
  margin-bottom: 1.375rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 0%;
  text-align: center;
}

.results__subtitle {
  margin-bottom: 0.75rem;
  color: rgb(59, 222, 124);
  font-family: 'PT Serif', sans-serif;
  font-size: 1.13rem;
  font-weight: 700;
  line-height: 1.38rem;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;
}

.results__information {
  margin-bottom: 0.75rem;
  padding: 1rem 0.75rem 0.625rem;
  width: 16rem;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 0.88rem;
  letter-spacing: 0.13rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.38rem;
  background: rgb(28, 39, 65);
}

.results__desc {
  margin-bottom: 0.5rem;
  color: rgb(59, 222, 124);
  font-family: 'Roboto', sans-serif;
  font-size: 0.69rem;
  font-weight: 400;
  line-height: 0.88rem;
  letter-spacing: 10%;
  text-align: center;
}

.results__desc span {
  font-size: 0.75rem;
  letter-spacing: 10%;
}

.results__btn {
  margin-bottom: 2rem;
  position: relative;
  padding: 2rem 1.375rem 0.875rem 3.875rem;
  width: 100%;
  height: 5.75rem;
  border-radius: 0.31rem;
  background: rgb(235, 27, 0);
  border: none;
  cursor: pointer;
}

.results__btn-text {
  position: relative;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  font-size: 0.94rem;
  font-weight: 900;
  line-height: 1.13rem;
  letter-spacing: 5%;
  text-align: left;
}

.results__btn-text::before {
  content: '';
  position: absolute;
  top: 0.3rem;
  left: -2.9rem;
  width: 1.81rem;
  height: 1.81rem;
  background: url(../../public/images/tel.png) no-repeat;
  background-size: contain;
}

.results__data {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-bottom: 2rem;
  color: #FFFFFF;
}

.results__data ul {
  margin-left: 1rem;

}
</style>