<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- navbar  -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/testing">Testing<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/exercise">Exercise</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">Cart
                <span class="badge badge-danger" v-if="cartCount>0">{{cartCount}}</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/orders'>Order</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
        <!-- <div class="col-md-6">
          <Testing msg="This is inheritance data."></Testing>
        </div>
        <div class="col-md-6">
          <Exercise></Exercise>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  /*import Testing from './components/Testing.vue'
  import Exercise from './components/Exercise.vue'*/

  export default {
    name: 'App',
    mounted(){
      //this.$router.replace('/testing')
    },
    computed:{
      cartCount(){
        this.$store.dispatch('getData')
        return this.$store.state.cart.length
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
