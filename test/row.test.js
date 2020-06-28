import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  // 若不传入done，默认测试代码全是同步的，不会执行setTimeout中的代码
  // 想要异步就需要传入一个done，在异步代码结束之后写一个done()
  it('接收 gutter 属性', done => {
    let div = document.createElement('div')
    document.body.appendChild(div)

    Vue.component('m-row', Row)
    Vue.component('m-col', Col)

    div.innerHTML = `
        <m-row gutter="20">
            <m-col span="12"></m-col>
            <m-col span="12"></m-col>
        </m-row>
    `

    const vm = new Vue({
      el: div
    })

    // 这里写在异步里面是因为 gutter 是写到 mounted 里面的，而mounted是异步操作
    // 保证mounted后获取到的是最新的gutter, 不然获取的是mounted前的gutter
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')

      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('接收 align 属性', () => {
    let div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)

    expect(getComputedStyle(vm.$el).justifyContent).to.eq('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})
