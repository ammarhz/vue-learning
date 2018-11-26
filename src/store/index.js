import Vue from 'vue';
import Vuex from 'vuex';
import registeration from './modules/register';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  modules: {
    login: login,
    reg: registeration,
  },
});