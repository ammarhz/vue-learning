import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    firstName: '',
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
    ],
  },
  getters: {
    getFirstName: (state) => {
      return state.firstName;
    },
  },
  mutations: {
  },
  actions: {
    REG_REQUEST: ({state, commit}, user) => {
      for(let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].email === user.email) {
          if (state.userData[i].password === user.password) {
            state.firstName = state.userData[i].firstName;
            break;
          }
        }
      }
    },
  },
});
