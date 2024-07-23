<script setup>


import {ref} from "vue";

defineProps({
  newStyleBtn: Boolean,
});
</script>

<template>
  <button class="test__start-btn" :class="!newStyleBtn ? '' : 'new-style-btn'"  id="start">
    <router-link to="/test">пройти тест</router-link>
  </button>
</template>

<style scoped>
.test__start-btn {
  margin-bottom: 1.375rem;
  width: 12.5rem;
  height: 2.75rem;
  border: none;
  border-radius: 1.25rem;
  background: radial-gradient(50.00% 50.00% at 50% 50%,rgb(255, 199, 0),rgb(255, 199, 0) 100%);
  cursor: pointer;
  color: rgb(13, 12, 17);
  font-family: 'Merriweather', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.13rem;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;
}

.test__start-btn:hover {
  filter: brightness(1.25);
  transition: filter .2s;
}

.new-style-btn  {
  color: rgb(255, 255, 255);
  box-sizing: border-box;
  border: 0.06rem solid rgb(255, 255, 255);
  border-radius: 3.13rem;
  background: none;

}
</style>