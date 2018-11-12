<template>
  <div class="container">
    <router-link to="/login">
      <button id="loginBtn" type="submit" class="btn btn-primary btn-block">Login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  data() {

  },
};
</script>

<style scoped>
  .container {
    width: 10%;
  }
  #loginBtn {
    width: 100%;
    margin: 30px auto;
    font-weight: bold;
  }
  a:hover {
    text-decoration: none;
  }
</style>
