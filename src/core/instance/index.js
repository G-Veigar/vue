import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// QS：Vue构造函数为什么用function而不是class
// 答：因为可以按模块划分，动态修改prototype，class定义只能一次性定义
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    // TAG: 判断函数是否为构造调用
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 设置Vue.prototype._init
initMixin(Vue)

/**
 * Vue.prototype.$data
 * Vue.prototype.$props
 * Vue.prototype.$set
 * Vue.prototype.$delete
 * Vue.prototype.$watch
 */
stateMixin(Vue)

/**
 * Vue.prototype.$on
 * Vue.prototype.$once
 * Vue.prototype.$off
 * Vue.prototype.$emit
 */
eventsMixin(Vue)

/**
 * Vue.prototype.$destroy
 * Vue.prototype._update
 * Vue.prototype.$forceUpdate
 */
lifecycleMixin(Vue)

/**
 * Vue.prototype.$nextTick
 * Vue.prototype._render
 */
renderMixin(Vue)

export default Vue
