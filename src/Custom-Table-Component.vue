<template>
<div id="test">

<div class="table-responsive">
  <table class="table table-bordered table-hover table-condensed">
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)">
          {{key}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>

</div>
</div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'demogrid',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    var asc_desc = 'asc'
    this.columns.forEach(function (key) {
    sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: this.data
    }
  },
  computed: {
    filteredData: function () { 
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.sortOrders
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      if (this.asc_desc=='asc') this.asc_desc='desc'; else this.asc_desc='asc' 
      this.sortOrders=_.orderBy(this.data, key,this.asc_desc)
    }
  }
}

</script>

