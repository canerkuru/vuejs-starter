<template>
  <div id="app">
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Vuejs Starter</a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><router-link to="/">Home</router-link></li>
                <li><router-link to="/user">HTTP JSON</router-link></li>
                <li><router-link to="/grid">Custom Component</router-link></li>
                <li><router-link to="/list-rendering">List Rendering</router-link></li>
                <li><router-link to="/test">Test</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>      
            </div>
          </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
