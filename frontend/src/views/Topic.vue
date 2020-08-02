<template>
<v-col class="mb-4 pa-5">
  <div class="topicCard">
    <v-card elevation="12" rounded="lg">

      <v-img class="white--text align-end" src="https://picsum.photos/1200/250">
        <v-card-title class="display-1 font-weight-bold">
          {{topicName}}
        </v-card-title>
        <v-card-subtitle class="white--text">
          {{topicDescription}}
        </v-card-subtitle>
      </v-img>

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
                <v-btn color="error darken-1" class="ml-auto">
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-card-text class="pa-5">
        <h2 class="mb-2">
          <v-chip class="mr-1" color="pink" text-color="white">
            <v-icon left>mdi-cards</v-icon>
            17
          </v-chip> Flashcards:
        </h2>
        <v-row>
          <div class="flashcard">
            <FlashCardNew />
          </div>
          <div v-for="(item,i) in 17" class="flashcard">
            <FlashCard />
          </div>
        </v-row>
      </v-card-text>

    </v-card>
  </div>
</v-col>
</template>

<script>
import FlashCard from '@/components/FlashCard.vue'
import FlashCardNew from '@/components/FlashCardNew.vue'

export default {
  name: 'Topic',
  components: {
    FlashCard,
    FlashCardNew,
  },

  data: () => ({
    topicName: 'Física I',
    topicDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  }),
}
</script>


<style lang="scss" scoped>
.flashcard {
    padding: 0.6rem;
    box-sizing: border-box;
    width: 25%;
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
