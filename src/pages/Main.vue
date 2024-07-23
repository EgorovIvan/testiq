<script setup>

import StartButton from "@/components/StartButton.vue";
import {ref} from "vue";

const newStyleBtn = ref(false);
</script>

<template>
  <main class="main">
    <section class="test">
      <div class="container">
        <p class="test__text">Пройдите точный и быстрый</p>
        <h1 class="test_title">
          тест на <br>
          определение <br>
          IQ
        </h1>
        <StartButton/>
        <p class="test__subtext">
          И получите рекомендации <br>
          по развитию своего интеллекта <br>
          <span>и улучшению финансового <br>
          благосостояния и личной жизни</span>
        </p>
        <a class="test__link-btn" href="#start">
          <img class="test__arrow" src="../../public/images/arrow.webp" alt="arrow">
          <p class="test__details">Подробнее</p>
        </a>
      </div>
    </section>

    <section class="quote">
      <div class="container">
        <p class="quote__text">
          Профессиональный <br>
          IQ-тест позволяет не только определить коэффициент вашего интеллекта, <br>
          но и выработать список рекомендаций для повышения этого показателя.
        </p>
      </div>
    </section>

    <section class="results">
      <div class="container">
        <p class="results__text">
          Также по результатам теста <br>
          <span>вы получите</span> подробные <br>
          <span>советы</span> по определению наиболее <br>
          перспективной <span>для вашего <br>
          типа</span> <strong>интеллекта</strong> <span>сферы <br>
          деятельности,</span> <br>
          которая принесет вам скорейший <br>
          финансовый результат.
        </p>
        <img class="results__img" src="../../public/images/info.webp" alt="info">
        <StartButton/>
      </div>
    </section>

    <section class="time">
      <div class="container">
        <p class="time__text">
          Прохождение теста займет у <br>
          вас не более <span>12 минут</span>, а его <br>
          результаты вы сможете <br>
          <span>использовать всю жизнь</span>.
        </p>
        <div class="time__subtext">
          Профессиональная <br>
          интерпретация и детально <br>
          <strong>проработанные <br>
            рекомендации</strong> позволят вам <br>
          качественно <strong>изменить все <br>
          аспекты своей жизни: </strong>от <br>
          финансового до любовного.
        </div>
        <StartButton :newStyleBtn="true"/>
      </div>
    </section>
  </main>
</template>

<style scoped>
.test {
  padding-top: 1.6875rem;
  max-width: 21.69rem;
  height: 32.625rem;
  background: url(../../public/images/bg-test.webp) no-repeat;
  background-size: cover;
  overflow: hidden;
}

@media (min-resolution: 2dppx) {
  .test {
    background: url(../../public/images/bg-test@2x.webp) no-repeat ;
    background-size: cover;
  }
}

.test .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 1.375rem;
}

.test__text {
  margin-bottom: 1rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 1.13rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 5%;
  text-align: center;
  text-transform: none;
}

.test_title {
  margin-bottom: 9.75rem;
}

.test__subtext {
  margin-bottom: 0.6875rem;
  color: #FFC700;
  font-family: 'PT Serif', sans-serif;
  font-size: 0.94rem;
  font-weight: 700;
  line-height: 1.19rem;
  letter-spacing: 5%;
  text-align: center;
}

.test__subtext span {
  color: #FFFFFF;
}

.test__link-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.test__arrow {
  margin-bottom: 0.1875rem;
  width: 1rem;
  height: 1rem;
}

.test__details {
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 0.5rem;
  font-weight: 400;
  line-height: 0.69rem;
  letter-spacing: 5%;
  text-align: center;
}

.quote {
  padding-top: 5.1875rem;
  max-width: 20rem;
  height: 21.19rem;
  background: url(../../public/images/bg-quote.webp) no-repeat;
  background-size: cover;
  overflow: hidden;
}

@media (min-resolution: 2dppx) {
  .quote {
    background: url(../../public/images/bg-quote@2x.webp) no-repeat;
    background-size: cover;
  }
}

.quote .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.quote__text {
  position: relative;
  width: 15.5rem;
  color: rgb(255, 255, 255);
  font-size: 1.13rem;
  font-weight: 400;
  line-height: 1.44rem;
  letter-spacing: 5%;
  text-align: center;
}

.quote__text::before {
  content: '';
  position: absolute;
  top: -2.4rem;
  left: -0.7rem;
  width: 1.44rem;
  height: 1.4rem;
  background: url(../../public/images/quote-start.svg) no-repeat;
  background-size: contain;
}

.quote__text::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  right: -0.3rem;
  width: 1.44rem;
  height: 1.4rem;
  background: url(../../public/images/quote-end.svg) no-repeat;
  background-size: contain;
}

.results {
  padding-top: 2.375rem;
  max-width: 20rem;
  height: 31.8125rem;
  background: #FFFFFF;
  overflow: hidden;
}

.results .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.results__text {
  align-self: start;
  margin-bottom: 1.25rem;
  color: rgb(39, 39, 39);
  font-family: 'PT Serif', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 5%;
  text-align: left;
}

.results__text span {
  font-weight: 700;
  text-transform: uppercase;
}

.results__img {
  width: 14.5rem;
  height: 11.25rem;
}

.time {
  padding-top: 3.5rem;
  max-width: 20rem;
  height: 33.31rem;
  background: url(../../public/images/bg-time.webp) no-repeat;
  background-size: cover;
  overflow: hidden;
}

@media (min-resolution: 2dppx) {
  .time {
    background: url(../../public/images/bg-time@2x.webp) no-repeat;
    background-size: cover;
  }
}

.time .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.time__text {
  align-self: start;
  margin-bottom: 1.25rem;
  color: #FFFFFF;
  font-family: 'Merriweather', sans-serif;
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 5%;
  text-align: left;
}

.time__text span {
  color: #FFC700;
}

.time__subtext {
  margin-bottom: 2.0625rem;
  padding: 1.875rem 0.875rem;
  width: 100%;
  height: auto;
  color: rgb(24, 24, 24);
  font-family: 'Merriweather', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.44rem;
  letter-spacing: 5%;
  text-align: left;
  border-radius: 1.25rem;
  background: rgba(243, 243, 242, 0.8);
}
</style>