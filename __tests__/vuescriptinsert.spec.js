import { mount } from '@vue/test-utils';
import VueScriptInsert from '@/components/VueScriptInsert.vue'

describe('AdvBlock', () => {

  it('is a AdvBlock html', () => {
    const wrapper = mount(VueScriptInsert,{
      propsData:{
        url:'<script>document.write("adv block");<\/script>',
        id:'toppage-topbanner',
        layout:{
          display: "block",
          margin: "0 auto", 
          background: "white",
          width: "1080px",
          height: "110px",
        },
      },
      //Attaching components to the DOM
      attachTo: document.body
    })

    expect(wrapper.html()).toBe('<div id="toppage-topbanner" class="vuescriptinsert-adv-block-defalt"><iframe></iframe></div>')
  })
  
})