import dataCenter from '../index';

export default {
  state: {
    status: '',
    firstName: '',
    loginGood: false,
  },
  getters: {
    getLoginStatus: state => { return state.status; },
    getFirstName: state => { return state.firstName; },
  },
  mutations: {
    LOGIN_REQUEST_CHECK: (state, user) => {
      state.loginGood = false;
      for (let i = 0; i < dataCenter.state.userData.length; i++) {
        if (dataCenter.state.userData[i].email === user.email) {
          if (dataCenter.state.userData[i].password === user.password) {
            state.firstName = dataCenter.state.userData[i].firstName;
            state.loginGood = true;
            break;
          }
        }
      }      
    },
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
          resolve('Login Successful');
        } else {
          commit ('LOGIN_REQUEST_ERROR');
          reject ('Login failed');
        }
      })
    }, 
  }
};