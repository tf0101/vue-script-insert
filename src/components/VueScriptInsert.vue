<template>
<div :id="this.id" :style="styles" class="vuescriptinsert-adv-block-defalt">
</div>
</template>

<style>
.vuescriptinsert-adv-block-defalt iframe{
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
        this.css_style=this.parse_layout(this.layout)
        this.create_advblock(this.id,this.url)
    },
    methods:{
        parse_layout(layout){
            if (layout === undefined){
                return {}
            }
            return layout
        },
        create_advblock(id,url){
            var adv_point=document.getElementById(id)
            var iframe = document.createElement('iframe')
            adv_point.appendChild(iframe)

            var iframeDocument = iframe.contentWindow.document
            iframeDocument.open()
            iframeDocument.write(url)
            iframeDocument.close()
            return iframeDocument
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