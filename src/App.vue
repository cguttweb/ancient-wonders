<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/alexandria">Alexandria</router-link> | 
    <router-link to="/artemis">Artemis</router-link> | 
    <router-link to="/babylon">Babylon</router-link> | 
    <router-link to="/pyramid">Great Pyramid</router-link> | 
    <router-link to="/halicarnassus">Halicarnassus</router-link> | 
    <router-link to="/rhodes">Rhodes</router-link> | 
    <router-link to="/zeus">Zeus</router-link>
  </nav>
  <router-view />
  <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  line-height: 1.4rem;
  margin: auto;
  max-width: 60%;
}

/* main p {
  text-align: left;
} */

</style>