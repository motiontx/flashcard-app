<template>
<v-col class="mb-4 pa-5 new-and-edit">
  <div class="new-and-edit-header">
    <h2 class="mb-2 new-and-edit-title">Edit Flashcard</h2>
    <div class="new-and-edit-settings">
      <v-select hide-details :items="flashcardTypes" label="Type" outlined dense class="mb-2 mr-2" />
      <v-select hide-details :items="flashcardTypes" label="Color" outlined dense class="mb-2 mr-2"/>
      <v-btn color="error" class="mb-2 mr-2">
        <v-icon>mdi-close</v-icon> Clear
      </v-btn>
        <v-btn @click="addFlashcard()" color="success" class="mb-2">
        <v-icon>mdi-check</v-icon> Add
      </v-btn>
    </div>
  </div>
  <v-divider class="mb-4"></v-divider>
  <div class="pa-5 edit-container">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <StandardFlashcard class="flashcard" editable ref="flashcard"/>
          </li>
          <li v-for="i in 10" :key="i" class="glide__slide">
            <StandardFlashcard class="flashcard" editable/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</v-col>
</template>
<script>
import axios from 'axios'
import Glide from '@glidejs/glide'
import StandardFlashcard from '@/components/flashcards/StandardFlashcard.vue'

export default {
  name: 'NewAndEdit',
  
  components: {
    StandardFlashcard,
  },

  data: () => ({
    flashcardTypes: [],
    glideInstance: null,
  }),

  methods:{
    addFlashcard() {
      const data = {...this.$refs.flashcard.$data.fields}
      data.topic = this.$route.params.id;
        axios.post('/flashcards', data)
        .then((res) => {
          this.glideInstance.go('>')
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

    this.glideInstance = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      peek: 150,
    }).mount()
  }
}
</script>


<style lang="scss" scoped>

.new-and-edit {
  display: flex;
  flex-direction: column;
}

.new-and-edit-header {
  display: flex;
  justify-content: space-between;
}

.new-and-edit-title {
  display: inline;
}

.new-and-edit-settings {
  display: flex;
}

.edit-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flashcard {
  width: 90%;
  max-width: 1000px;
}

.glide, .glide__track {
  height: 100%;
  
}

.glide__slides {
  height: 100%;
    padding: 0;

}

.glide__slide {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

</style>
