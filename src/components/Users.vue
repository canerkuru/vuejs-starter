<template>
  <div class="users">
    <h1>{{ title }}</h1>

    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" v-focus placeholder="Enter Name">
      <br/>
      <input type="text" v-model="newUser.email"  placeholder="Enter Email">
      <br/>
      <input type="submit" value="Save">
      <button v-on:click="loadUsers()">Get Users</button>
    </form>

    <ul>
        <li v-for="user in users">
        <span>
        {{user.name}} : {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      title: 'Users',
      newUser: {},
      users: []
    }
  },
  methods: {
      addUser: function(e){
        this.users.push({
          name:this.newUser.name,
          email:this.newUser.email
        });
        e.preventDefault();
      },
      deleteUser: function(user){
        this.users.splice(this.users.indexOf(user),1);
      },
      loadUsers: function(){
          this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then(function(data){
            this.users=data.body;
            console.log(data.body);
          });
      }
  }
}
</script>

