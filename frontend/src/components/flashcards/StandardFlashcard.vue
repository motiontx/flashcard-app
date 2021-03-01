<template>
<flashCardBasic flippable>
  <template #front>
    <editableText class="sideA" v-if="editable" :content="fields.sideA" @update="fields.sideA = $event"></editableText>
    <div v-else class="sideA">{{fields.sideA}}</div>
  </template>
  <template #back>
    <editableText class="sideB" v-if="editable" :content="fields.sideB" @update="fields.sideB = $event"></editableText>
    <div v-else class="sideB">{{fields.sideB}}</div>
  </template>
</flashCardBasic>
</template>

<script>
import EditableText from '../common/EditableText'
import FlashCardBasic from './FlashCardBasic'

export default {
  name: 'StandardFlashcard',

  components: {
    EditableText,
    FlashCardBasic
  },

  data: () => ({
    fields: {
      sideA: 'Testing',
      sideB: 'Testing',
      kind: 'StandardFlashcard',
    }
  }),

  computed: {
    rawFields(){
      return JSON.stringify(this.fields);
    }
  },

  props: {
    flashcardData: {},
    editable: {
      type: Boolean,
    },
  },

  mounted(){
    if (this.flashcardData) {
      this.fields = this.flashcardData;
    }
  }
};
</script>

<style lang="scss" scoped>
.sideA, .sideB {
  padding: 3rem;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.sideB {
  font-weight: bold;
}
</style>
