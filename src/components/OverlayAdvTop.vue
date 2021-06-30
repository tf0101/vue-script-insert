<template>
<div :id="this.overlayid">
    <div id="vuescriptinsert-overlay-block-top">
        <VueScriptInsert :url="this.url" :id="this.id" :layout="this.layout"></VueScriptInsert>
        <div class="vuescriptinsert-overlay-close-batsu" @click="close_overlay_top">×</div>
    </div>
</div>
</template>


<style>
#vuescriptinsert-overlay-block-top {
width: 100%;
z-index: 9999;
position: fixed;
left: 0;
top: 0;
padding-top: 10px;
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
    name:'OverlayAdvTop',
    components: {
        VueScriptInsert
    },
    props:['overlayid','url','id','layout'],
    data(){
        return{
        }
    },
    methods: {
        close_overlay_top(){
            var elem = document.getElementById("vuescriptinsert-overlay-block-top")
            elem.style.display='none'
        }
    }
}
</script>

