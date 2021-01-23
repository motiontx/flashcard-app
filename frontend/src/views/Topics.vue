<template>
<v-col class="mb-4 pa-5">
  <h2 class="mb-2">Topics</h2>
  <v-divider class="mb-4"></v-divider>
  <v-row>
    <div class="topicCard">
      <TopicCardNew @onSubmit="getTopics" />
    </div>
    <div v-for="topic in topics" class="topicCard">
      <TopicCard :name="topic.name" :id="topic._id" @onDelete="getTopics" />
    </div>
  </v-row>
</v-col>
</template>

<script>
import axios from 'axios'

import TopicCard from '@/components/TopicCard.vue'
import TopicCardNew from '@/components/TopicCardNew.vue'

export default {
  name: 'Topics',
  components: {
    TopicCard,
    TopicCardNew,
  },

  data: () => ({
    topics: [],
  }),

  methods:{
    getTopics(){
      axios.get('/topics')
        .then((res) => {
          this.topics = res.data
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
    }
  },

  mounted() {
    this.getTopics();
  }
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
