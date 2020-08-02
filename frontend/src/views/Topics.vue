<template>
<v-col class="mb-4 pa-5">
  <h2 class="mb-2">Topics</h2>
  <v-divider class="mb-4"></v-divider>
  <v-row>
    <div class="topicCard">
      <TopicCardNew />
    </div>
    <div v-for="i in 10" class="topicCard">
      <TopicCard />
    </div>
  </v-row>
</v-col>
</template>

<script>
import TopicCard from '@/components/TopicCard.vue'
import TopicCardNew from '@/components/TopicCardNew.vue'

export default {
  name: 'Topics',
  components: {
    TopicCard,
    TopicCardNew,
  },
}
</script>

<style lang="scss" scoped>
.topicCard {
    padding: 0.6rem;
    box-sizing: border-box;
    width: 33.33%;
}

@media (max-width: 960px) {
    .topicCard {
        width: 50%;
    }
}

@media (max-width: 600px) {
    .topicCard {
        width: 100%;
    }
}
</style>
