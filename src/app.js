import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: true,
    loading3: true
  }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount()

  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  }).$mount()

  const useElement = vm.$el.querySelectorAll('use')

  expect(useElement.length).to.eq(1)
  expect(useElement[0].getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount(div)

  const icon = vm.$el.querySelector('svg')
  expect(getComputedStyle(icon).order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  }).$mount(div)

  const icon = vm.$el.querySelector('svg')
  expect(getComputedStyle(icon).order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount()

  const spy = chai.spy(() => {})
  vm.$on('click', spy)

  vm.$el.click()
  expect(spy).to.have.been.called()
  vm.$destroy()
}
