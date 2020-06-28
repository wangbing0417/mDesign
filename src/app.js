import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-col', Col)
Vue.component('m-row', Row)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true,
    loading3: true,
    message: 'hi'
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})
