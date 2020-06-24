import Vue from 'vue'
import mButton from './button'
import mIcon from './icon'

Vue.component('m-button', mButton)
Vue.component('m-icon', mIcon)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true,
    loading3: true
  }
})
