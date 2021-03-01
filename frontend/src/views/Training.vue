<template>
<div class="training">
  <v-card class="mx-auto pa-1 topBar" rounded="b-xl">
    <v-btn class="buttonExit" icon to="/#">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-progress-linear class="progressBar" color="light-blue" height="10" :value="progress" striped rounded></v-progress-linear>
    <v-btn class="buttonExit" icon>
      <v-icon>mdi-restart</v-icon>
    </v-btn>
  </v-card>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="i in 15" :key="i" class="glide__slide">
          <div class="flashcardBox">
            <FlashCardBasic class="flashcard" />
          </div>
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="pl-4 arrowLeft" data-glide-dir="<">
        <v-btn fab x-large color="white" class="mx-2">
          <v-icon>mdi-arrow-left-thick</v-icon>
        </v-btn>
      </button>
      <button class="pr-4 arrowRight" data-glide-dir=">">
        <v-btn fab x-large color="white" class="mx-2">
          <v-icon>mdi-arrow-right-thick</v-icon>
        </v-btn>
      </button>
    </div>
  </div>

  <div class="mx-auto controls">
    <v-btn fab small color="error" class="mx-2">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-btn fab small color="warning" class="mx-2">
      <v-icon>mdi-check</v-icon>
    </v-btn>
    <v-btn fab small color="success" class="mx-2">
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
  </div>
</div>
</template>

<script>
import FlashCardBasic from '@/components/flashcards/FlashCardBasic.vue'
import Glide from '@glidejs/glide'
export default {
  name: 'Training',

  components: {
    FlashCardBasic,
  },

  data: () => ({
    glideInstance: null,
  }),

  created: function() {
    this.$store.commit('joinTraining');
  },

  mounted: function() {
    this.glideInstance = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      peek: 150,
    }).mount()
  },

  destroyed: function() {
    this.$store.commit('exitTraining');
  },

  computed: {
    progress() {
      return this.glideInstance && this.glideInstance.index * 100 / 15;
    }
  }

};
</script>

<style lang="scss" scoped>
.training {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(#c4c4c4 0.5px, transparent 0.5px);
    background-size: calc(10 * 0.5px) calc(10 * 0.5px);
    background-repeat: repeat;
}

.topBar {
    position: absolute;
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    left: 0;
    right: 0;
}

.progressBar {
    width: 80%;
}

.controls {
    position: absolute;
    width: 0;
    bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    left: 0;
    right: 0;
}

.glide__slides {
    padding: 0;
}

.glide__slide {
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrowLeft,
.arrowRight {
    position: absolute;
    z-index: 50;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    outline: 0;
}
.arrowLeft {
    left: 0;
}
.arrowRight {
    right: 0;
}

.flashcardBox {
    width: 100%;
    max-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flashcard {
    width: 95%;
}
</style>
