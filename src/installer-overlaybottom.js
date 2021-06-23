import OverlayBottomComponent from './components/OverlayAdvBottom.vue'

// Vue.use() によって実行される install 関数を定義
OverlayBottomComponent.install = function (Vue) {
  Vue.component( OverlayBottomComponent.name, OverlayBottomComponent )
}

export default OverlayBottomComponent