<template>
<v-card elevation="12" rounded="lg" ripple to="/topic">
  <v-img :src="randomImg" />
  <v-card-title>Física I</v-card-title>
  <v-card-subtitle>17 Cards</v-card-subtitle>
</v-card>
</template>

<script>
export default {
  name: 'TopicCard',

  computed: {
    randomImg() {
      return `https://picsum.photos/id/${Math.floor(Math.random() * (200))}/300/125`
    },
  },
};
</script>

<style lang="scss" scoped>
// ...
</style>
