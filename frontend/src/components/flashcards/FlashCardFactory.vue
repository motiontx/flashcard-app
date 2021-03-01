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
        flashcardData: {
            required: true,
        } 
    }
}
</script>

<style>

</style>