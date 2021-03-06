<template>
<div class="card" :class="{'flipped': currentSide == 'back'}">

  <v-card rounded="lg" elevation="4" :color="color" dark ripple class="front">
    <v-responsive :aspect-ratio="16/9">

      <v-btn v-if="flippable" class="buttonFlip" icon @click="flipToBack()">
        <v-icon>mdi-redo</v-icon>
      </v-btn>

      <v-menu v-if="$showOptions" left top rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="buttonOptions" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item v-for="item in options" :key="item.title" :to="item.link">
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="frontData d-flex flex-column justify-center align-center">
        <slot name="front"/>
      </div>

    </v-responsive>
  </v-card>

  <v-card rounded="lg" elevation="4" :color="color" dark ripple class="back">
    <v-responsive :aspect-ratio="16/9">

      <v-btn v-if="flippable" class="buttonFlip" icon @click="flipToFront()">
        <v-icon>mdi-undo</v-icon>
      </v-btn>

      <v-menu v-if="$showOptions" left top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="buttonOptions" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list nav>
          <v-list-item v-for="item in options" :key="item.title" :to="item.link">
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="backData d-flex flex-column justify-center align-center">
        <slot name="back"/>
      </div>
    </v-responsive>
  </v-card>

</div>
</template>

<script>
export default {
  name: 'FlashCardBasic',

  data: () => ({
    currentSide: 'front',

    options: [{
        title: 'Edit',
        icon: 'mdi-square-edit-outline',
        link: '#',
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        link: '#',
      },
    ],
  }),

  props: {
    flippable: {
      type: Boolean,
      default: false,
    }
  },

  inject: ['$showOptions'],

  methods: {
    flipToFront() {
      this.currentSide = 'front';
    },
    flipToBack() {
      this.currentSide = 'back';
    },
  },

  computed: {
    color() {
      const colors = ['red lighten-4', 'pink lighten-4', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'];
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

.back,
.front {
    backface-visibility: hidden;
    transition: transform 0.3s ease-in-out;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.front {
    transform: rotateY(0deg);
    position: absolute;
}

.back {
    transform: rotateY(-180deg);
}

.card.flipped .front {
    transform: rotateY(180deg);
}
.card.flipped .back {
    transform: rotateY(0deg);
}

.backData,
.frontData {
    width: 100%;
    height: 100%;
}

.buttonOptions {
    z-index: 15;
    position: absolute;
    bottom: 0;
    right: 0;
}

.buttonFlip {
    z-index: 15;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
