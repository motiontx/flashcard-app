<template>
<v-app>

  <Sidebar :drawer="drawer" />

  <Navbar v-on:updateSidebar="onUpdateSidebar" />

  <v-main>
    <Breadcrumb />
    <v-container class="align-start" fluid>
      <router-view />
    </v-container>
  </v-main>

  <Footer />

</v-app>
</template>

<script>
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Sidebar,
    Navbar,
    Breadcrumb,
    Footer,
  },

  data: () => ({
    drawer: false,
  }),

  methods: {
    onUpdateSidebar: function(enlargeAmount) {
      this.drawer = !this.drawer
    },
  },

};
</script>

<style lang="scss">
</style>
