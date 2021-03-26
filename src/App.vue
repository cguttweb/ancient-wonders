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
:root {
--bg-color: #ffffff;
--text-color: #333333;
}

#app {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1rem 0;
}

nav a {
  color: #ffffff;
}

nav a:hover {
  font-weight: bold;
}

main {
  line-height: 1.4rem;
  margin: auto;
  max-width: 60%;
}

main p {
  text-align: left;
}

img {
  margin: auto;
  max-width: 600px;
}

.attribution {
  font-size: 0.9rem;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #333333;
    --text-color: #ffffff;
  }
}

</style>