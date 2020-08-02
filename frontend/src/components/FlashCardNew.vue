<template>
<v-card rounded="lg" elevation="4" :color="color" dark ripple to="/#">
  <v-responsive :aspect-ratio="16/9">
    <div class="content">
      <v-icon size="128">mdi-plus</v-icon>
    </div>
  </v-responsive>
</v-card>
</template>

<script>
export default {
  name: 'FlashCardNew',

  computed: {
    color() {
      const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'];
      return `${colors[Math.floor(Math.random() * colors.length)]} darken-1`;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
