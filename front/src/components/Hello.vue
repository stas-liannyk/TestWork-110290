<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <br>
    <router-link :to="'posts'" class="btn btn-success btn-lg">
      Get test
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'hello',
  data () {
    return {
      msg: 'TestWork 110290'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
</style>
