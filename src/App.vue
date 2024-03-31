<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">

#app {
  body {
  overflow-x: hidden;
  }
  a {
        text-decoration: none;
        font-family: "Jost", sans-serif;
  }
  .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
    body, button {
        font-family: "Jost", sans-serif;
    }
    h1, h2, h3 {
        font-family: "DM Serif Display", serif;;
    }
}
</style>
