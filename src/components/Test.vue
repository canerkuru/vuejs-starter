<template>
  <div class="test">
    <h1>{{ title }}</h1>
    <p v-if="showName">{{ user.firstName }} {{ user.lastName }}</p>
    <ul>
        <li v-for="item in items">{{ item.title }}</li>
    </ul>
    <button v-on:click="greet('Welcome World')">Greeting</button>
    <br>
    <input type="text" v-focus placeholder="v-focus custom directive">
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit" placeholder="open console (chrome->F12)">
    <hr/>
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
<hr/>

    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br/>
    <label>Last Name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: 'Test Page',
      selected: '',
      user: {
          firstName : 'Caner',
          lastName : 'Kuru'
      },
      showName : true,
      items : [
          {title : 'Item One'},
          {title : 'Item Two'},
          {title : 'Item Three'}
      ]
    }
  },
  methods: {
      greet : function(greeting) {
          alert(greeting);
      },
      pressKey: function(e){
          console.log(e.target.value);
      },
      enterHit: function(){
          console.log('Enter pressed');
      }
  },
  computed: {
      fullName: function(){
          return this.user.firstName+' '+this.user.lastName;
      }
  }
}
</script>


<style scoped>

</style>
