import Vue from 'vue'
import axios from "axios";
import VueAxios from 'vue-axios'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
