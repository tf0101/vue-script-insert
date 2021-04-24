import MyComponent from './components/VueScriptInsert.vue'

// Vue.use() によって実行される install 関数を定義
MyComponent.install = function (Vue) {
  Vue.component( MyComponent.name, MyComponent )
}

export default MyComponent