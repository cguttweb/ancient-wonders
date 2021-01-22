<template>
  <div>
   <footer>
     <p>Built by <a href="https://github.com/cguttweb" target="_blank" rel="noopener noreferrer">Chloe</a> in {{ getYear() }} using <img alt="Vue logo" src="../assets/logo.png" /> and <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Vite</a></p>
   </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getYear(){
      return new Date().getFullYear()
    }
  }
};
</script>

<style scoped>

footer {
  display: flex;
  justify-content: center;
}

p {
  bottom: 0;
  position: absolute;
}


img {
  width: 20px;
  vertical-align: bottom;
}

a {
  color: #42b983;
}
</style>
