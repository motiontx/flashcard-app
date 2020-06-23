<template>
<v-app-bar app dense color="blue-grey darken-3" dark>
  <v-app-bar-nav-icon v-on:click.stop="$emit('updateSidebar')"></v-app-bar-nav-icon>
  <v-toolbar-title class="ml-auto">
    <v-chip  color="blue-grey" label>
      Flashcard APP
    </v-chip>
  </v-toolbar-title>
</v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
// ...
</style>
