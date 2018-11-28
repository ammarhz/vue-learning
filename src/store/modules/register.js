import dataCenter from '../index';

export default {
  state: {
    status: '',
    userExist: false,
  },
  getters: {
    getRegStatus: state => { return state.status; },
  },
  mutations: {
    REG_REQUEST_CHECK: (state, user) => {
      state.userExist = false;
      state.status = '';
      for (let i = 0; i < dataCenter.state.userData.length; i++) {
        if (user.email === dataCenter.state.userData[i].email) {
          state.userExist = true;
          break;
        }
      }
    },
    
    REG_REQUEST_LOADING: state => state.status = 'loading',
    REG_REQUEST_ERROR: state => state.status = 'error',
    REG_REQUEST_SUCCESS: state => state.status = 'success',
  },
  actions: {
    REG_REQUEST: ({ state, commit }, user) => {
      return new Promise ((resolve, reject) => {
        commit ('REG_REQUEST_CHECK', user);
        if (state.userExist) {
          commit ('REG_REQUEST_ERROR');
          reject ('Registeration error!');
        } else {
          commit ('REG_REQUEST_SUCCESS');
          dataCenter.state.userData.push(user);
          resolve ('! Thank you for registeration');
        }
      });
    },
  },
};
