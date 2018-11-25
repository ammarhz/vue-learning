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
    
    REG_REQUEST_LOADING: state => state.status = 'loading',
    REG_REQUEST_ERROR: state => state.status = 'error',
    REG_REQUEST_SUCCESS: state => state.status = 'success',

    LOGIN_REQUEST_LOADING: state => state.status = 'loading',
    LOGIN_REQUEST_ERROR: state => state.status = 'error',
    LOGIN_REQUEST_SUCCESS: state => state.status = 'success',
  },
  actions: {
    LOGIN_REQUEST: ({ state, commit }, user) => {
      commit ('LOGIN_REQUEST_CHECK', user);
      if (state.loginGood) {
        commit ('LOGIN_REQUEST_SUCCESS');
      } else {
        commit ('LOGIN_REQUEST_ERROR');
      }
    }, 
    REG_REQUEST: ({ state, commit }, user) => {
      state.userExist = false;
      return new Promise ((resolve, error) => {
        for (let i = 0; i < state.userData.length; i++) {
          if (user.email === state.userData[i].email) {
            resolve('user exist');
            commit ('REG_REQUEST_ERROR');
            state.userExist = true;
            break;
          } else {
            error ('user dont exist');
            commit ('REG_REQUEST_SUCCESS');
          }
        }
        if (!state.userExist) {
          state.userData.push(user);
        }
      })
      .then ((anyValue) => {  // anyValue = 'user exist'
        // Not using right now
      })
      .catch ((anyValue) => { // anyValue = 'user dont exist'
        // Not using right now
      });
    },
  },
});
