<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <a href="https://farm-fe.github.io/" target="_blank">
      <div class="logo1" />
      <div class="logo2" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Farm + Vue" />
</template>

<style scoped>
.logo1 {
  background-image: url('./assets/logo.png');
  width: 100px;
  height: 100px;
}

.logo2 {
  background-image: url('./assets/sub/logo.png');
  width: 100px;
  height: 100px;
}
</style>
