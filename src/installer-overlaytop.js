import OverlayTopComponent from './components/OverlayAdvTop.vue'

// Vue.use() によって実行される install 関数を定義
OverlayTopComponent.install = function (Vue) {
  Vue.component( OverlayTopComponent.name, OverlayTopComponent )
}

export default OverlayTopComponent