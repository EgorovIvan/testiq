<script setup>

import {ref} from "vue";

defineProps({
  title: String,
  name: String,
  options: Array,
  countResponses: Number
})

const emit = defineEmits(['addCountResponses'])

const checked = ref('');

</script>

<template>
  <div class="form__loading-bg">
    <div class="form__loading-bar"
         :style="{width: (1 + countResponses*1.1) + 'rem'}"
    ></div>
  </div>
  <div class="form__block">

    <h3 class="form__title"
        :class="countResponses === 3 ? 'title-resize' : countResponses === 6 ? 'title-width' : '' "
    >{{ title }}</h3>

    <label v-for="option of options"
           class="form__item"
           :class="checked == option ? 'item-active' : '' "
    >
      <input class="form__item-input"
             type="radio"
             :name="name"
             :value="option"
             v-model="checked"
      />
      <div class="form__item-btn"
           :class="checked == option ? 'btn-active' : '' "
      ></div>
      <div class="form__item-text"
         :class="countResponses === 3 || countResponses === 6 ?
         'min-text' : countResponses === 8 ? 'max-text' : '' ">{{ option }}

      </div>
    </label>
  </div>
  <button type="button"
          class="form__next"
          :class="checked ? 'next-active' : ''"
          :disabled="(checked === '')"
          @click="emit('addCountResponses')"
  >
    далее</button>
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

.form__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
}

.form__title {
  margin-bottom: 2.5rem;
  width: 17rem;
}

.title-resize {
  margin-bottom: 2rem;
}

.title-width {
  width: 14.81rem;
}

.form__item {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 0.5rem;
  padding-left: 2.1875rem;
  width: 100%;
  height: auto;
  background: rgba(242, 243, 243, 0.15);
}

.item-active {
  background: rgb(255, 199, 0);
}

.form__item-input {
  display: none;
}

.form__item-btn {
  margin-right: 1.5rem;
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(255, 255, 255);
}

.btn-active {
  border: 0.06rem solid rgb(39, 39, 39);
  background: rgb(41, 80, 194);
}

.form__item-text {
  display: flex;
  align-items: center;
  height: 3.13rem;
  color: rgb(255, 255, 255);
  font-family: 'PT Serif', sans-serif;
  font-size: 1.13rem;
  font-weight: 400;
  line-height: 1.13rem;
  letter-spacing: 5%;
  text-align: left;
}

.min-text {
  height: 2.5rem;
}

.max-text {
  height: 4.88rem;
}

.form__next {
  width: 11.81rem;
  height: 2.56rem;
  color: rgb(142, 142, 142);
  font-family: 'Merriweather', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.13rem;
  letter-spacing: 10%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 1.25rem;
  box-shadow: inset 0rem 0.25rem 0.63rem 0rem rgba(0, 0, 0, 0.25);
  background: rgb(218, 218, 218);
  border: none;
}

.next-active {
  color: rgb(13, 12, 17);
  background: radial-gradient(50.00% 50.00% at 50% 50%,rgb(255, 199, 0),rgb(255, 199, 0) 100%);
}
</style>