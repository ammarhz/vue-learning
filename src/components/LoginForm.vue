<template>
  <div class="container-fluid">
    <div class="w-100 p-3 border">
      <div class="text-center">
        <h1>{{ heading }}</h1>
      </div>
      <form @submit.prevent="login" class="card-body" v-if="status != 'success'">
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
        <p class="alert alert-success text-center" v-if="status == 'success'">Welcome {{ userNameFromStore }}</p>
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
      status: '',
    };
  },
////  mounted(), created(), and beforeMount() methods runs on page load
  
//  mounted() {
//    this.test();
//  },
//  created() {
//    this.test();
//  },
//  beforeMount() {
//    this.test();
//  },
  methods: {
//    test() {
//      console.log(':::::::::::::::::');
//    },
    login() {
      this.$store.dispatch('LOGIN_REQUEST', this.$data.User)
      .then ((response) => {
        this.$data.showAlert = true;
        this.$data.userNameFromStore = this.$store.getters.getFirstName;
        this.$data.heading = response;
        this.$data.status = this.$store.getters.getLoginStatus;
      })
      .catch ((error) => {
        this.$data.status = this.$store.getters.getLoginStatus;
        this.$data.heading = error;
        this.$data.showAlert = true;
      })
    },
    isDisplaying() {
      this.$data.heading = 'Login';
      this.$data.showAlert = false;
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
