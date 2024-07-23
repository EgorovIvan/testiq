<script setup>
import Header from "@/components/Header.vue";
import {provide, ref} from "vue";
import Navigation from "@/components/Navigation.vue";

const showMenu = ref(false);

const openMenu = () => {
  showMenu.value = true
}

const closeMenu = () => {
  showMenu.value = false
}

provide('menu', {
  openMenu
})

</script>

<template>
  <Header/>

  <Navigation v-show="showMenu" @close-menu="closeMenu"/>
  <router-view></router-view>

</template>

<style scoped>


</style>
