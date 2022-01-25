<template>
  <Nav></Nav>
  <banner v-if="$route.name !== 'TermsConditions'"></banner>
  <router-view />
  <Footer></Footer>
  <notifications position="bottom right" />
</template>
<script>
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
    Banner,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 */
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
  .foo {
    height: 1024px;
  }
}

/* 
     iPad landscape orientation.
    */
@media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
  .foo {
    height: 768px;
  }
}

/* También se pueden fijar por su "aspect ratio".
     iPhone 5
    */
@media screen and (device-aspect-ratio: 40/71) {
  .foo {
    height: 500px;
  }
}
</style>
