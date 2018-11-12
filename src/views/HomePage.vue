<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/imgs/logo.png">
    <Null msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Null from '../components/Null.vue';

export default {
  name: 'home',
  components: {
    Null,
  },
};
</script>
