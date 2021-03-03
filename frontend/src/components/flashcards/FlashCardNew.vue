<template>
<div class="card" @click="redirectTo()">
  <v-card rounded="lg" elevation="4" :color="color" dark ripple>
    <v-responsive :aspect-ratio="16/9">
      <div class="frontData d-flex flex-column justify-center align-center">
        <v-icon size="128">mdi-plus</v-icon>
      </div>
    </v-responsive>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'FlashCardBasic',

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
  },

  computed: {
    color() {
      const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'];
      return `${colors[Math.floor(Math.random() * colors.length)]} darken-2`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    transform-style: preserve-3d;
    transition: transform 0.3s ease-in-out;
    position: relative;
    perspective: 800px;
    height: fit-content;
}

.frontData {
    width: 100%;
    height: 100%;
}
</style>
