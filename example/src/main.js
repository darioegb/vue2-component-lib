import Vue from 'vue';
import App from './App.vue';
import ComponentLibrary from 'vue-fakelib';

Vue.config.productionTip = false;
Vue.use(ComponentLibrary);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
