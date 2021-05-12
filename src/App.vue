<template>
  <div id="app">
    <div>
       <VueScriptInsert :url="adv_url_top" :id="adv_id_top" :layout="adv_layout"></VueScriptInsert>
    </div>
  </div>
</template>

<script>
import VueScriptInsert from './components/VueScriptInsert.vue'

export default {
  name: 'App',
  components: {
    VueScriptInsert
  },
  data() {
    return {
      adv_url_top:'<script>document.write("adv block");</scr'+'ipt>',
      adv_id_top:'toppage-topbanner',

      adv_layout:{
          display: "block",
          margin: "0 auto", 
          background: "white",
          width: "1080px",
          height :"110px",
        },
    }
  }
}
</script>