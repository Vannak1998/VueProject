<template>
  <img class="m-auto" alt="Vue logo" src="./assets/logo.png">
  <Register msg="Registeration"/>
  <Login></Login>
</template>

<script>
import Register from './components/Register.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',

  components: {
    Register,
    Login
  }
}
</script>

<style>

</style>
