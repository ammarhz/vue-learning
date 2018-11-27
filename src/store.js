import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    firstName: '',
    userExist: false,
    userData: [
      {
        firstName: 'Faizah',
        lastName: 'Ali',
        email: 'faizah@email.com',
        password: '123456',
      },
      {
        firstName: 'Anam',
        lastName: 'Batool',
        email: 'anam@email.com',
        password: '123456',
      },
    ],
  },
  getters: {
    getFirstName: (state) => {
      return state.firstName;
    },
    getStatus: (state) => {
      return state.status;
    },
  },
  mutations: {
  },
  actions: {
    LOGIN_REQUEST: ({ state }, user) => {
      state.firstName = '';
      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].email === user.email) {
          if (state.userData[i].password === user.password) {
            state.firstName = state.userData[i].firstName;
            break;
          }
        }
      }
    },
    REG_REQUEST: ({ state }, user) => {
      state.status = '';
      state.userExist = false;
      for (let i = 0; i < state.userData.length; i++) {
        if (user.email === state.userData[i].email) {
          state.userExist = true;
          state.status = 'error';
          break;
        }
      }
      if (!state.userExist) {
        state.userData.push(user);
        state.status = 'success';
      }
    },
  },
});
