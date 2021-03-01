<template>
<flashCardBasic @click.native="redirectTo()">
  <template #front>
    <v-icon size="128">mdi-plus</v-icon>
  </template>
</flashCardBasic>
</template>

<script>
import FlashCardBasic from './FlashCardBasic'

export default {
  name: 'FlashCardNew',

  components: {
    FlashCardBasic,
  },

  props: {
    url: {
      type: String,
      required: true,
    }
  },
  
  methods: {
    redirectTo(){
      this.$router.push(this.url);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
