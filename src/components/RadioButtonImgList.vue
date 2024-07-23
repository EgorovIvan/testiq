<script setup>
import {ref} from "vue";
import { useRouter} from 'vue-router';

defineProps({
  title: String,
  name: String,
  options: Array,
  countResponses: Number
})

const emit = defineEmits(['addCountResponses'])

const checked = ref('');

const router = useRouter();

const transition = () => {
  setTimeout(() => {
    router.push({ path: 'info' })
  }, 6000)
}
</script>

<template>
  <div class="form__loading-bg">
    <div class="form__loading-bar"
         :style="{width: (1 + countResponses*1.1) + 'rem'}"
    ></div>
  </div>
  <div class="form__block">
    <h3 class="form__title">{{ title }}</h3>
    <img v-if="countResponses === 7" class="form__img" src="../../public/images/test_img_1.webp" alt="img_1">
    <img v-else class="form__img-2" src="../../public/images/test_img_3.webp" alt="img_1">
    <hr v-show="countResponses === 10"/>
    <div class="form__list"
         :style="countResponses === 10 ? {gap: '0.5rem'} : {gap: '1.5rem'}"
    >
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
        <p class="form__item-text">{{option}}</p>
      </label>
    </div>
  </div>
  <button v-if="countResponses === 10" type="submit"
          class="form__next"
          :class="checked ? 'next-active' : ''"
          :disabled="(checked === '')"
          @click="emit('addCountResponses'); transition()"
  >далее</button>
  <button v-else type="button"
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
  margin-bottom: 1.25rem;
  width: 19rem;
}

.form__img {
  margin-bottom: 1.75rem;
  width: 11.56rem;
  height: 14.69rem;
}

.form__img-2 {
  margin-bottom: 1.5rem;
  width: 14.25rem;
  height: 12.94rem;
}

hr {
  margin-bottom: 1.25rem;
  width: 20rem;
  height: 0.25rem;
  border: none;
  background: rgba(242, 243, 243, 0.15);
}

.form__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.875rem;
}



.form__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.56rem;
  height: 2.56rem;
  color: rgb(13, 12, 17);
  font-family: 'PT Serif', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 3.06rem;
  letter-spacing: 0%;
  text-align: center;
  text-transform: capitalize;
  background: #FFFFFF;
}

.item-active {
  box-sizing: border-box;
  border: 0.38rem solid rgb(255, 199, 0);
}

.form__item-input {
  display: none;
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