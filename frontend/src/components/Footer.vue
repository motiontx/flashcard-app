<template>
<v-footer inset dark padless app absolute>
  <v-card flat tile width="100%" class="blue-grey lighten-1 text-center">
    <v-card-text class="pa-1">
      <v-btn v-for="item in items" text rounded :to="item.link" class="mx-1">
        <v-icon class="mr-2">
          {{ item.icon }}
        </v-icon>
        {{item.title}}
      </v-btn>
      <v-btn text rounded href="https://github.com/motiontx/flashcard-app" target="_blank" class="mx-1">
        <v-icon class="mr-2">mdi-github</v-icon>
        Code
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="pa-2">
      {{ new Date().getFullYear() }} — <strong>Flashcard APP</strong> —
    </v-card-text>
  </v-card>
</v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    items: [{
        title: 'Home',
        icon: 'mdi-home',
        link: '/',
      },
      {
        title: 'About',
        icon: 'mdi-help-box',
        link: '/about',
      },
      {
        title: 'Terms',
        icon: 'mdi-newspaper-variant-multiple',
        link: '/terms',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
// ...
</style>
