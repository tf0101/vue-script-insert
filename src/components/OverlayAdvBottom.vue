<template>
<div :id="this.overlayid">
    <div id="vuescriptinsert-overlay-block-bottom">
        <div class="vuescriptinsert-overlay-close-batsu" @click="close_overlay_bottom">×</div>
        <VueScriptInsert :url="this.url" :id="this.id" :layout="this.layout"></VueScriptInsert>
    </div>
</div>
</template>


<style>
#vuescriptinsert-overlay-block-bottom {
width: 100%;
z-index: 9999;
position: fixed;
left: 0;
bottom: 0;
padding-bottom: 10px;
height:auto;
transition: all .3s ease;
}



.vuescriptinsert-overlay-close-batsu{
    font-size: 150%;
    font-weight: bold;
}
</style>


<script>
import VueScriptInsert from './VueScriptInsert.vue'

export default {
    name:'OverlayAdvBottom',
    components: {
        VueScriptInsert
    },
    props:['overlayid','url','id','layout'],
    data(){
        return{
        }
    },
    methods: {
        close_overlay_bottom(){
            var elem = document.getElementById("vuescriptinsert-overlay-block-bottom")
            elem.style.display='none'
        }
    }
}
</script>

