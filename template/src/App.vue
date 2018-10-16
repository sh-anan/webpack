<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
  }{{/router}}
}
</script>

