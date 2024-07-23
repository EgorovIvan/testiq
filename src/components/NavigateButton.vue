<script setup>
import {inject} from "vue";

const {openMenu} = inject('menu')
</script>

<template>
  <button type="button"
          class="header__nav"
          @click="openMenu"
  >
        <span class="header__line"></span>
        <span class="header__line"></span>
        <span class="header__line"></span>
  </button>
</template>

<style scoped>
.header__nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border: none;
  background: rgb(24, 24, 24);
  cursor: pointer;
}

.header__nav:hover {
  filter: brightness(1.25);
  transition: filter .2s;
}

.header__line {
  width: 1.5rem;
  height: 0.17rem;
  background: rgb(218, 218, 218);
}
</style>