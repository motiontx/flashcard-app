<template>
<v-col class="mb-4 pa-5">
  <div class="topicCard">
    <v-card elevation="12" rounded="lg">

      <v-img class="white--text align-end" src="https://picsum.photos/1200/250">
        <v-card-title class="display-1 font-weight-bold">
          {{topic.name}}
        </v-card-title>
        <v-card-subtitle class="white--text">
          {{topic.description}}
        </v-card-subtitle>
      </v-img>

      <v-menu left top rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click.stop class="buttonOptions" icon color="white" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item @click="deleteTopic">
            <v-icon left>mdi-delete</v-icon>
            <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-row dense class="pa-5 mb-2">
        <v-col cols="12">
          <v-card color="indigo" dark>
            <v-card-title class="headline">Test</v-card-title>
            <v-card-actions>
              <v-row no-gutters class="pa-1">
                <v-btn color="success darken-1" to="/training">
                  <v-icon left>mdi-brain</v-icon>
                  Training
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-card-text class="pa-5">
        <h2 class="mb-2">
          <v-chip class="mr-1" color="pink" text-color="white">
            <v-icon left>mdi-cards</v-icon> {{countFlashcards}}
          </v-chip> Flashcards:
        </h2>
        <v-row>
          <div class="flashcard">
            <FlashCardNew :url="urlToNew" />
          </div>
          <div v-for="(flashcard, i) in flashcards" :key="i" class="flashcard">
            <FlashCardFactory :flashcardData="flashcard" showOptions/>
          </div>
        </v-row>
      </v-card-text>

    </v-card>
  </div>
</v-col>
</template>

<script>
import axios from 'axios'

import FlashCardFactory from '@/components/flashcards/FlashCardFactory.vue'
import FlashCardNew from '@/components/flashcards/FlashCardNew.vue'

export default {
  name: 'Topic',
  
  components: {
    FlashCardFactory,
    FlashCardNew,
  },

  data: () => ({
    topic: {},
    flashcards: [],
  }),

  methods:{
    getTopic(){
      axios.get(`/topics/${this.$route.params.id}`)
      .then((res) => {
        this.topic = res.data;
      })
      .catch((error) => {
        console.log(error.response.status);
      }).finally(() => {
        //Perform action in always
      });
    },

    deleteTopic(){
      axios.delete(`/topics/${this.$route.params.id}`)
        .then((res) => {
          this.$router.push({ name: 'Topics' });
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
    },

    getFlashcards(){
      axios.get(`/flashcards/topic/${this.$route.params.id}`)
      .then((res) => {
        this.flashcards = res.data;
      })
      .catch((error) => {
        console.log(error.response.status);
      }).finally(() => {
        //Perform action in always
      });
    },
  },

  mounted() {
    this.getTopic();
    this.getFlashcards();
  },

  computed: {
    urlToNew() {
      return `/topic/${this.$route.params.id}/new`;
    },

    countFlashcards() {
      return this.flashcards.length;
    }
  }
}
</script>


<style lang="scss" scoped>
.flashcard {
    padding: 0.6rem;
    box-sizing: border-box;
    width: 25%;
}

.buttonOptions {
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width: 1264px) {
    .flashcard {
        width: 33.33%;
    }
}

@media (max-width: 960px) {
    .flashcard {
        width: 50%;
    }
}

@media (max-width: 600px) {
    .flashcard {
        width: 100%;
    }
}
</style>
