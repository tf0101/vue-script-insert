import { mount } from '@vue/test-utils';
import VueScriptInsert from '@/components/VueScriptInsert.vue'

describe('AdvBlock', () => {
    it('is a Vue instance', () => {
      const wrapper = mount(VueScriptInsert,{
          propsData:{
            url:'<script>document.write("adv block");</scr'+'ipt>',
            id:'toppage-topbanner',
            layout:{
                display: "block",
                margin: "0 auto", 
                background: "white",
                width: "1080px",
                height: "110px",
              },
          },
      })
      expect(wrapper.vm).toBeTruthy()
    })
  })