<template>
  <div class="test">
    <h1>{{ title }}</h1>

<span>Example 1</span>
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
<hr/>
<span>Example 2</span>
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<hr/>
<span>Example 3</span>
<div v-for="(value, key) in items">
  {{ key }} : {{ value }}
</div>
<hr/>
<span>Example 4</span>
<div>
  <span v-for="n in 10">{{ n }}</span>
</div>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: 'Lists',
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  }
}
</script>


<style scoped>

</style>
