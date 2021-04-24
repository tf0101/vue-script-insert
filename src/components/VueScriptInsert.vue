<template>
<div :id="this.id" :style="styles" class="adv-block-layout">
</div>
</template>

<style>
.adv-block-layout iframe{
    /*default layout*/
    display: block;
    margin: 0 auto;
    background: white;
    
    /*css style var*/ 
    display: var(--display);
    margin: var(--margin);
    background: var(--background);
    width: var(--width);
    height: var(--height);
}
</style>

<script>
export default {
    name: 'VueScriptInsert',
    data(){
        return{
            css_style:{},
        }
    },
    props:['url','id','layout'],
    computed: {
        styles () {
            return this.create_advstyle(this.css_style)
        }
    },
    mounted(){
        this.parse_layout(this.layout)
        this.create_advblock()
    },
    methods:{
        parse_layout(layout){
            if (layout === undefined){
                return
            }
            this.css_style=layout
        },
        create_advblock(){
            var adv_point=document.getElementById(this.id)
            var iframe = document.createElement('iframe')
            adv_point.appendChild(iframe)
            
            var html = this.url
            var iframeDocument = iframe.contentWindow.document
            iframeDocument.open()
            iframeDocument.write(html)
            iframeDocument.close()
        },
        create_advstyle(css_style){
            var css_style_var={}
            Object.keys(css_style).forEach(function(key){
                css_style_var["--"+key]=css_style[key]
            })
            return css_style_var
        },

    }
}
</script>