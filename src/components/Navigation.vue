<script setup>
const emit = defineEmits(['closeMenu'])
</script>

<template>
  <nav class="nav">
    <div class="container">
      <button type="button"
              class="nav__close"
              @click="emit('closeMenu')"
      ></button>
      <ul class="nav__list">
        <li class="nav__item" @click="emit('closeMenu')">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="nav__item" @click="emit('closeMenu')">
          <router-link to="/info">Информация о тесте</router-link>
        </li>
        <li class="nav__item" @click="emit('closeMenu')">
          <router-link to="/test">пройти тест</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 1.125rem;
  width: 20rem;
  height: 35.56rem;
  background: rgb(24, 24, 24);
  z-index: 999;
}

.nav .container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.nav__close {
  align-self: end;
  margin-bottom: 4rem;
  width: 1.75rem;
  height: 1.75rem;
  background: url(../../public/images/close.svg) no-repeat;
  background-size: contain;
  border: none;
}

.nav__item {
  margin-bottom: 1.6875rem;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38rem;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  list-style-type: none;
}

.nav__item:active {
  color: #F4CE0C;
}
</style>