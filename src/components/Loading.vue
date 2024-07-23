<script setup>

</script>

<template>
  <div class="form__loading-bg">
    <div class="form__loading-bar"
         :style="{width: '16rem'}"
    ></div>
  </div>
  <h3 class="form__title">Обработка <br>результатов</h3>
  <img class="form__img" src="../../public/images/load.webp">
  <p class="form__text">Определение стиля мышления........... .... .....................................</p>
</template>

<style scoped>
.form__loading-bg {
  position: relative;
  width: 16.25rem;
  height: 0.69rem;
  border-radius: 0.66rem;
  background: rgba(242, 243, 243, 0.59);
}

.form__loading-bar {
  position: absolute;
  width: 1rem;
  height: 0.69rem;
  left: 0rem;
  top: 0rem;
  border-radius: 0.66rem;
  background: rgb(59, 222, 124);
}

.form__title {
  margin-top: 3.125rem;
  margin-bottom: 2rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 1.44rem;
  font-weight: 400;
  line-height: 1.88rem;
  letter-spacing: 5%;
  text-align: center;
}

.form__img {
  margin-bottom: 1.75rem;
  width: 4.06rem;
  height: 4.27rem;
  animation: moveAround 3s linear infinite;
}

@keyframes moveAround {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.form__text {
  width: 17.25rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.19rem;
  letter-spacing: 5%;
  text-align: left;
}
</style>