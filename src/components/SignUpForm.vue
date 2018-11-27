<template>
  <div class="container-fluid">
    <div class="w-100 p-3 border">
      <div class="text-center">
        <h1>Sign Up</h1>
      </div>
      <form @submit.prevent="addNewUser(); resetForm()" class="card-body">
        <div class="form-group">
          <label for="firstName" class="control-label">First Name:</label>
          <input v-model="User.firstName" id="firstName" class="input-md textInput form-control" type="text" autofocus="autofocus" tabindex="1" placeholder="..." required/>
        </div>
        <div class="form-group">
          <label for="lastName" class="control-label">Last Name:</label>
          <input v-model="User.lastName" id="lastName" class="input-md textInput form-control" type="text" autofocus="autofocus" tabindex="2" placeholder="..." required/>
        </div>
        <div class="form-group">
          <label for="email" class="control-label">Email:</label>
          <input v-model="User.email" id="email" class="input-md textInput form-control" type="email" autofocus="autofocus" tabindex="3" placeholder="..." required/>
        </div>
        <div class="form-group">
          <label for="password" class="control-label">Password:</label>
          <input v-model="User.password" id="password" class="input-md textInput form-control" type="password" autofocus="autofocus" tabindex="4" placeholder="6-16 characters" required @input="isDisplaying"/>
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="control-label">Confirm Password:</label>
          <input v-model="User.confirmPassword" id="confirmPassword" class="input-md textInput form-control" type="password" autofocus="autofocus" tabindex="5" placeholder="..." required @input="isDisplaying"/>
        </div>
        <div v-show="showAlert">
          <p class="text-danger" v-if="passwordMismatch">Password do not match!!</p>
        </div>
        <button id="submit" type="submit" class="btn btn-block btn-success">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      User: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      showAlert: false,
      passwordMismatch: false,
    };
  },
  methods: {
    addNewUser() {
      if (this.$data.User.password === this.$data.User.confirmPassword) {
        console.log(JSON.stringify(this.$data.User));
      } else {
        this.$data.showAlert = true;
        this.$data.passwordMismatch = true;
      }
    },
    isDisplaying() {
      this.$data.showAlert = false;
      this.$data.passwordMismatch = false;
    },
    resetForm() {
      Object.assign(this.$data, this.$options.data.call(this));
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
