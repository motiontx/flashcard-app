<template>
<v-col class="mb-4 pa-5">
    <h2 class="mb-2">Edit Flashcard</h2>
    <v-divider class="mb-4"></v-divider>
    <div class="pa-5 editView">
      <div class="flashcardEdit">
        <StandardFlashcard class="flashcard" editable ref="flashcard"/>
        <v-col class="pa-0 pl-3">
          <v-select hide-details :items="flashcardTypes" label="Type" outlined class="mb-2" />
          <v-select hide-details :items="flashcardTypes" label="Color" outlined class="mb-2"/>
          <v-btn color="error" class="mb-2">
            <v-icon>mdi-close</v-icon> Clear
          </v-btn>
          <v-btn @click="addFlashcard()" color="success" class="mb-2">
            <v-icon>mdi-check</v-icon> Add
          </v-btn>
        </v-col>
      </div>
    </div>
</v-col>
</template>

<script>
import axios from 'axios'

import StandardFlashcard from '@/components/flashcards/StandardFlashcard.vue'

export default {
  name: 'NewAndEdit',
  
  components: {
    StandardFlashcard,
  },

  data: () => ({
    flashcardTypes: [],
  }),

  methods:{
    addFlashcard() {
      const data = {...this.$refs.flashcard.$data.fields}
      data.topic = this.$route.params.id;
        axios.post('/flashcards', data)
        .then((res) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
    },
  },

  mounted() {
      axios.get(`/flashcards/types`)
        .then((res) => {
          this.flashcardTypes = res.data;
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
  }
 
}
</script>


<style lang="scss" scoped>
.editView {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.flashcardEdit {
  width: 70%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
}

.flashcard {
  width: 80%;
}
</style>
