import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    userData: [
      {
        firstName: 'Faizah',
        lastName: 'Ali',
        email: 'faizah@email.com',
        password: '123456',
        confirmPassword: '123456',
      },
      {
        firstName: 'Ammar',
        lastName: 'Hassan',
        email: 'ammar@email.com',
        password: '123456',
        confirmPassword: '123456',
      },
      {
        firstName: 'Anam',
        lastName: 'Batool',
        email: 'anam@email.com',
        password: '123456',
        confirmPassword: '123456',
      },
    ]
  },
  getters: {
    getUserData: (state) => {
      return state.userData;
    }
  },
  mutations: {

  },
  actions: {

  },
});
