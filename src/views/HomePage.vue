<template>
  <div class="home">
    <SignUpButton/> <LoginButton/>
  </div>
</template>

<script>
import SignUpButton from '../components/SignUpButton.vue';
import LoginButton from '../components/LoginButton.vue';

export default {
  name: 'home',
  components: {
    SignUpButton,
    LoginButton,
  },
};
</script>

<style scoped>
</style>
