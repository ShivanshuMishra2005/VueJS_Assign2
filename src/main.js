// main.js
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { welcomeMessage, convertMeasurement, mathOperation, customFunction, reverseString, isPrime, getRandomNumber } from './utilities'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
