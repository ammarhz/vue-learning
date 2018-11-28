import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    firstName: '',
    userExist: false,
    loginGood: false,
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
    getFirstName: state => { return state.firstName; },
    getStatus: state => { return state.status; },
  },
  mutations: {
    LOGIN_REQUEST_CHECK: (state, user) => {
      state.loginGood = false;
      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].email === user.email) {
          if (state.userData[i].password === user.password) {
            state.firstName = state.userData[i].firstName;
            state.loginGood = true;
            break;
          }
        }
      }      
    },
    REG_REQUEST_CHECK: (state, user) => {
      state.userExist = false;
      state.status = '';
      for (let i = 0; i < state.userData.length; i++) {
        if (user.email === state.userData[i].email) {
          state.userExist = true;
          break;
        }
      }
    },
    
    REG_REQUEST_LOADING: state => state.status = 'loading',
    REG_REQUEST_ERROR: state => state.status = 'error',
    REG_REQUEST_SUCCESS: state => state.status = 'success',

    LOGIN_REQUEST_LOADING: state => state.status = 'loading',
    LOGIN_REQUEST_ERROR: state => state.status = 'error',
    LOGIN_REQUEST_SUCCESS: state => state.status = 'success',
  },
  actions: {
    LOGIN_REQUEST: ({ state, commit }, user) => {
      return new Promise ((resolve, reject) => {
        commit ('LOGIN_REQUEST_CHECK', user);
        if (state.loginGood) {
          commit ('LOGIN_REQUEST_SUCCESS');
          resolve('login success');
        } else {
          commit ('LOGIN_REQUEST_ERROR');
          reject ('login failed');
        }
      })
    }, 
    REG_REQUEST: ({ state, commit }, user) => {
      return new Promise ((resolve, reject) => {
        commit ('REG_REQUEST_CHECK', user);
        if (state.userExist) {
          commit ('REG_REQUEST_ERROR');
          reject ('user exist');
        } else {
          commit ('REG_REQUEST_SUCCESS');
          state.userData.push(user);
          resolve ('user dont exist');
        }
      });
    },
  },
});
