import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '289119109585-g10sselftn3a0atuvivj72kij2a1i0fi.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)
new Vue({
  router,
  store,
  render() { return <App />; }
}).$mount('#app')