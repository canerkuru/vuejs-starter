<template>
  <div class="test">
    <h1>{{ title }}</h1>
    <p>Name : {{ name }}</p>
    <p>EMail : {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: 'Contact Form',
      name: 'Caner Kuru',
      email: 'caner.kuru@yahoo.com'
    }
  }
}
</script>


<style scoped>

</style>
