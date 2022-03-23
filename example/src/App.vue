<template>
  <div id="app">
    <base-button @click="handleClick">Test Button</base-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick: () => console.log('click event'),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
