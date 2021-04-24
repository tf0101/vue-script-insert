# vue-script-insert
Module to dynamically load external js into spa

## Setup
```
npm install vue-script-insert
```

## Usage

### Vue.js
```
<script>
import VueScriptInsert from 'vue-script-insert'

export default {
  components: {
    VueScriptInsert
  },
  ・・・
}
</script>
```

### Nuxt.js
```
//plugins/vue-script-insert.js

import Vue from 'vue'
import VueScriptInsert from 'vue-script-insert/src/installer.js'

Vue.use(VueScriptInsert)
```

```
//nuxt.config.js

export default {
    plugins: [
        'plugins/vue-script-insert'
    ],
}
```

## Document
It works by setting prop to the <VueScriptInsert> tag.
The tag containing the script is passed to url, the id attribute of the html tag is passed to id, and the css style is passed to layout.

```
<VueScriptInsert :url="adv_url" :id="adv_id" :layout="adv_layout"></VueScriptInsert>
```

### Component props
| prop | type | description |
|:---|:---|:---|
|url |String |Tag strings containing <script>. |
|id |String |ID (unique identifier) for an element in the id attribute of an HTML tag. |
|layout |Object |CSS styles, passed as an associative array |

### Usage examples

```
//Vue

<template>
    <VueScriptInsert :url="adv_url" :id="adv_id" :layout="adv_layout"></VueScriptInsert>
</template>

<script>
import VueScriptInsert from 'vue-script-insert'

export default {
    components: {
        VueScriptInsert
    },
    data() {
        return {
            adv_url:'tag',
            adv_id:'id',
            adv_layout:{
                width: "1080px",
                height :"110px",
                },
            }
        }
    }
</script>
```

```
//Nuxt

<template>
    <VueScriptInsert :url="adv_url" :id="adv_id" :layout="adv_layout"></VueScriptInsert>
</template>

<script>
export default {
  data() {
    return {
      adv_url:'tag',
      adv_id:'id',
      adv_layout:{
          width: "1080px",
          height :"110px",
        },
    }
  }
}
</script>
```

### Detailed layout
Detailed layout can be specified by using ids in <style> tags.
※ At this point, you need to specify the layout of the iframe.

```
<style>
    #id iframe{
        ・・・
    }
</style>
```

## Contributing
Bug reports and pull requests are welcome on GitHub at [https://github.com/tf0101/vue-script-insert](https://github.com/tf0101/vue-script-insert).

## License
[MIT License](https://github.com/tf0101/vue-script-insert/blob/main/LICENSE.txt)

