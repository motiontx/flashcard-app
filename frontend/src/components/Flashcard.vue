<template>
<v-card rounded="lg" elevation="4" :color="color" dark ripple>
  <v-responsive :aspect-ratio="16/9">
    <v-card-title class="headline">
      <v-icon>mdi-chevron-right</v-icon>...
    </v-card-title>
  </v-responsive>
</v-card>
</template>

<script>
export default {
  name: 'Flashcard',

  computed: {
    color() {
      const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'];
      return `${colors[Math.floor(Math.random() * colors.length)]} darken-1`;
    },
  },
};
</script>

<style lang="scss" scoped>
// ...
</style>
