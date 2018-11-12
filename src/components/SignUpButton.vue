<template>
  <div class="container">
    <router-link to="/signup">
      <button id="signUpBtn" type="submit" class="btn btn-primary btn-block">Sign Up</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SignUpButton',
  data() {

  },
};
</script>

<style scoped>
  .container {
    width: 10%;
  }
  #signUpBtn {
    width: 100%;
    margin: 30px auto;
    font-weight: bold;
  }
  a:hover {
    text-decoration: none;
  }
</style>
