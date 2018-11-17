<template>
  <div class="container-fluid">
    <div class="w-100 p-3 border">
      <div class="text-center">
        <h1>{{ heading }}</h1>
      </div>
      <form @submit.prevent="login" class="card-body" v-if="heading === 'Login'">
        <div class="form-group">
          <label for="email" class="control-label">Email:</label>
          <input v-model="User.email" id="email" class="input-md textInput form-control" type="email" autofocus="autofocus" tabindex="1" placeholder="..." required @input="isDisplaying"/>
        </div>
        <div class="form-group">
          <label for="password" class="control-label">Password:</label>
          <input v-model="User.password" id="password" class="input-md textInput form-control" type="password" autofocus="autofocus" tabindex="2" placeholder="..." required @input="isDisplaying"/>
        </div>
        <button id="submit" type="submit" class="btn btn-block btn-success">Login</button>
      </form>
      <div v-show="showAlert">
        <p class="alert alert-success text-center" v-if="heading === 'Login Successful'">Welcome {{ userNameFromStore }}</p>
        <p class="alert alert-danger" v-else>Invalid Username or Password</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      User: {
        email: '',
        password: '',
      },
      showAlert: false,
      userNameFromStore: '',
      heading: 'Login',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('REG_REQUEST', this.$data.User);
      this.$data.userNameFromStore = this.$store.getters.getFirstName;
      if (this.$data.userNameFromStore != '') {
        this.$data.heading = 'Login Successful';
      }
      this.$data.showAlert = true;
    },
    isDisplaying() {
      this.$data.showAlert = false;
      this.$data.userNameFromStore = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .container-fluid {
    width: 800px;
  }
  .border {
    display: inline-block;
    min-width: 200px;
    width: auto;
    height: auto;
    margin: 6px;
    border: 1px solid #868686;
    border-radius: 6px;
  }
  input {
    background-color: #eee;
  }
</style>
