import { createApp } from 'vue'
import App from './App.vue'
import'./assets/tailwind.css'
import Vuelidate from 'vuelidate'
// import {extend,ValidationObserver, ValidationProvider} from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';

createApp(App).mount('#app')
App.user(Vuelidate);

// App.component('ValidationObserver', ValidationObserver);
// App.component('ValidationProvider', ValidationProvider);

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });