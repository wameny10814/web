<script setup>
import Header from './components/Header.vue';
import MyHome from './components/MyHome.vue';


</script>

<template >
  <div class="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
.app {
  background-image: url('./assets/249518.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
body {
    display: block;
    margin: 0px;
}
</style>
