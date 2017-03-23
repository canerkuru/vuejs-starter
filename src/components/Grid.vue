<template>
  <div class="demo">
    <input type="text" name="query" v-model="searchQuery" class="form-control" placeholder="search query">
    <br/>
    <customTable
    :data="gridData"
    :columns="gridColumns"
    :filterKey="searchQuery">
  </customTable>
</div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
     searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: 10000 },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 },
      { name: 'Brad Pitt', power: 4000 },
      { name: 'Tom Cruise', power: 3000 }
    ]          
    }
  }
}
</script>

<style scoped>

</style>
