<template>
<flashCardBasic>
  <template #front>
    Hola desde el Front
  </template>
</flashCardBasic>
</template>

<script>
import FlashCardBasic from './FlashCardBasic'

export default {
  name: 'FlashCardTrueOrFalse',

  components: {
    FlashCardBasic,
  },
};
</script>

<style lang="scss" scoped>

</style>
