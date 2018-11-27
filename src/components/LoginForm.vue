<template>
  <div class="container-fluid">
    <div class="w-100 p-3 border">
      <div class="text-center">
        <h1>Login</h1>
      </div>
      <form @submit.prevent="login(); getUserData" class="card-body">
        <div class="form-group">
          <label for="email" class="control-label">Email:</label>
          <input v-model="User.email" id="email" class="input-md textInput form-control" type="email" autofocus="autofocus" tabindex="1" placeholder="..." required @input="isDisplaying"/>
        </div>
        <div class="form-group">
          <label for="password" class="control-label">Password:</label>
          <input v-model="User.password" id="password" class="input-md textInput form-control" type="password" autofocus="autofocus" tabindex="2" placeholder="..." required @input="isDisplaying"/>
        </div>
        <div v-show="showAlert">
          <p class="alert alert-success" v-if="userNameFromStore !=''">Welcome {{ userNameFromStore }}</p>
          <p class="alert alert-danger" v-else>User Does Not Exist</p>
        </div>
        <button id="submit" type="submit" class="btn btn-block btn-success">Login</button>
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
        email: '',
        password: '',
      },
      showAlert: false,
      userData: this.$store.getters.getUserData,
      userNameFromStore: '',
    };
  },
  methods: {
    login() {
      this.$data.showAlert = true;
    },
    isDisplaying() {
      this.$data.showAlert = false;
    },
    resetForm() {
      // this will reset only User object data
      var self = this;
      Object.keys(this.User).forEach(function(key, index) {
        self.User[key] = '';
      });
      // this will reset the whole data under return
      // Object.assign(this.$data, this.$options.data.call(this));
    },
  },
  computed: {
    getUserData() {
      for (let i = 0; i<this.$data.userData.length; i++) {
        if (this.$data.userData[i].email === this.$data.User.email) {
          this.$data.userNameFromStore = this.$data.userData[i].firstName;
          break;
        }
        this.$data.userNameFromStore = '';
      }
      this.resetForm();
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
