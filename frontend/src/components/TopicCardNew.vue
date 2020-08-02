<template>
<v-card elevation="12" rounded="lg" ripple to="/#" class="card">
  <v-responsive :aspect-ratio="16/9">
    <div class="content">
      <v-icon size="128">mdi-plus</v-icon>
    </div>
  </v-responsive>
</v-card>
</template>

<script>
export default {
  name: 'topicCardNew',

  computed: {
    randomImg() {
      return `https://picsum.photos/id/${Math.floor(Math.random() * (200))}/300/125`
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    height: 100%;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
