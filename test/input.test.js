import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()

      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('1234')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()

      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
    })

    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()

      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '错误信息'
        }
      }).$mount()

      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')

      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.eq('错误信息')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ;['change', 'input', 'focus', 'blur'].map(evt => {
        vm = new Constructor().$mount()
        const cb = sinon.fake()
        // 给组件注册 change 事件
        vm.$on(evt, cb)

        // 触发 input 控件的 change 事件
        let event = new Event(evt, { bubbles: true, cancelable: false })
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)

        expect(cb).to.have.been.calledWith(event)
      })
    })
  })
})
