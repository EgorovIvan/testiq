<script setup>

import RadioButtonList from "@/components/RadioButtonList.vue";
import {ref} from "vue";
import RadioButtonColorList from "@/components/RadioButtonColorList.vue";
import RadioButtonImgList from "@/components/RadioButtonImgList.vue";
import RadioButtonSelectList from "@/components/RadioButtonSelectList.vue";
import Loading from "@/components/Loading.vue";

const genders = ['Мужчина', 'Женщина'];
const listAges = ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36'];
const listExcess = ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'];
const numberSeries = ['62', '48', '74', '57', '60', '77'];
const cities = ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'];
const colorList_1 = ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC'];
const colorList_2 = ['#A8A8A8', '#46B2AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9'];
const imgList_1 = ['1', '2', '3', '4'];
const listImportances = [
    'Наслаждаться каждой минутой проведенного времени',
    'Быть устремленными мыслями в будущее',
    'Учитывать в ежедневной практике прошлый опыт'
];
const definitions = [
  'оно остроконечное',
  'оно устойчиво',
  'оно-находится в состоянии равновесия'
];
const imgList_2 = ['34', '36', '53', '44', '66', '42'];

const countResponses = ref(0)

const addCountResponses = () => {
  countResponses.value = countResponses.value + 1;
  // console.log('Test')
}
</script>

<template>
  <form class="form" action="" method="">
    <div class="form__wrapper" v-show="countResponses === 0">
      <RadioButtonList
          :title="'Ваш пол:'"
          :name="'gender'"
          :options="genders"
          :countResponses="countResponses"
          @add-count-responses="addCountResponses"
      />
    </div>
    <div class="form__wrapper" v-show="countResponses === 1">
    <RadioButtonList
        :title="'Укажите ваш возраст:'"
        :name="'age'"
        :options="listAges"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 2">
    <RadioButtonList
        :title="'Выберите лишнее:'"
        :name="'excess'"
        :options="listExcess"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 3">
    <RadioButtonList
        :title="'Продолжите числовой ряд: 18 20 24 32'"
        :name="'series'"
        :options="numberSeries"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 4">
    <RadioButtonColorList
        :title="'Выберите цвет, который сейчас наиболее Вам приятен:'"
        :name="'color_1'"
        :options="colorList_1"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 5">
    <RadioButtonColorList
        :title="'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:'"
        :name="'color_2'"
        :options="colorList_2"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 6">
    <RadioButtonList
        :title="'Какой из городов лишний? '"
        :name="'cities'"
        :options="cities"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 7">
    <RadioButtonImgList
        :title="'Выберите правильную фигуру из четырёх пронумерованных.'"
        :name="'img_1'"
        :options="imgList_1"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 8">
    <RadioButtonList
        :title="'Вам привычнее и важнее:'"
        :name="'importances'"
        :options="listImportances"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 9">
    <RadioButtonSelectList
        :title="'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:'"
        :name="'definitions'"
        :options="definitions"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper" v-show="countResponses === 10">
    <RadioButtonImgList
        :title="'Вставьте подходящее число'"
        :name="'img_2'"
        :options="imgList_2"
        :countResponses="countResponses"
        @add-count-responses="addCountResponses"
    />
    </div>
    <div class="form__wrapper-load" v-show="countResponses === 11">
      <Loading/>
    </div>
  </form>
</template>

<style scoped>
.form {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  max-width: 20rem;
  height: 32.63rem;
  background: url(../../public/images/bg-form.webp) no-repeat;
  background-size: cover;
  overflow: hidden;
}

@media (min-resolution: 2dppx) {
  .form {
    background: url(../../public/images/bg-form@2x.webp) no-repeat ;
    background-size: cover;
  }
}

.form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.form__wrapper-load {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
}

</style>