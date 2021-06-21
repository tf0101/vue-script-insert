<template>
  <div id="app">
    <div>
      <OverlayAdvTop :overlayid="adv_id_overlay_top" :url="adv_url_top" :id="adv_id_top" :layout="adv_layout"></OverlayAdvTop>
      <OverlayAdvBottom :overlayid="adv_id_overlay_bottom" :url="adv_url_top" :id="adv_id_bottom" :layout="adv_layout"></OverlayAdvBottom>
    </div>
  </div>
</template>

<style>
@media screen and (min-width:480px) {

  #overlay-topbanner{
    display: none;
  }

  #overlay-bottombanner{
    display: none;
  }

}

</style>

<script>
//import VueScriptInsert from './components/VueScriptInsert.vue'
import OverlayAdvTop from './components/OverlayAdvTop.vue'
import OverlayAdvBottom from './components/OverlayAdvBottom.vue'

export default {
  name: 'App',
  components: {
    OverlayAdvTop,
    OverlayAdvBottom
  },
  data() {
    return {
      adv_url_top:'<script>document.write("adv block");</scr'+'ipt>',

      adv_id_top:'toppage-topbanner',
      adv_id_overlay_top:'overlay-topbanner',

      adv_id_bottom:'toppage-botbanner',
      adv_id_overlay_bottom:'overlay-bottombanner',

      /*adv_layout:{
          display: "block",
          margin: "0 auto", 
          background: "white",
          width: "1080px",
          height :"110px",
        },*/
      
      adv_layout:{
          display: "block",
          margin: "0 auto", 
          background: "white",
          width: "360px",
          height :"70px",
        },
    }
  }
}
</script>