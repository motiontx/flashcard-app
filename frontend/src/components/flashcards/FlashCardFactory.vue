<template>
  <component :is="flashcardData.kind" :flashcardData="flashcardData" />
</template>

<script>
import StandardFlashcard from './StandardFlashcard'
import TrueOrFalse from './TrueOrFalse'

export default {
  name: 'flashCardFactory',
  components: {
    StandardFlashcard,
      TrueOrFalse,
  },

  props: {
    showOptions: {
      type: Boolean,
      default: false,
    },
    flashcardData: {
      required: true,
    } 
  },

  provide() {
    return {
      $showOptions: () => this.showOptions,
    };
  },
}
</script>

<style>

</style>