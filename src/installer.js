import VueScriptInsert from './components/VueScriptInsert.vue'
import OverlayAdvTop from './components/OverlayAdvTop.vue'
import OverlayAdvBottom from './components/OverlayAdvBottom.vue'

// Vue.use() によって実行される install 関数を定義
VueScriptInsert.install = function (Vue) {
  Vue.component( VueScriptInsert.name, VueScriptInsert)
}

OverlayAdvTop.install = function (Vue) {
  Vue.component( OverlayAdvTop.name, OverlayAdvTop)
}

OverlayAdvBottom.install = function (Vue) {
  Vue.component( OverlayAdvBottom.name, OverlayAdvBottom)
}


export {VueScriptInsert,OverlayAdvTop,OverlayAdvBottom}