<template>
<v-app>

  <!-- Drawer -->
  <v-navigation-drawer v-if="!training" class="drawer" v-model="drawer" clipped :mini-variant="miniVariant" app>
    <v-list dense nav>
      <v-list-item to="/profile">
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Motiontx</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mb-1"></v-divider>
      <v-list-item v-for="item in itemsDrawer" :key="item.title" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- App Bar -->
  <v-app-bar v-if="!training" color="deep-purple accent-4" dense dark clipped-left app>
    <v-app-bar-nav-icon class="navIcon" @click.stop="miniVariant = !miniVariant"></v-app-bar-nav-icon>
    <v-toolbar-title>Flashcard APP</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom rounded="lg">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list nav>
        <v-list-item v-for="item in itemsAppBarMenu" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- Bottom Nav -->
  <v-bottom-navigation v-if="!training" class="bottomNav" v-model="bottomNav" color="deep-purple accent-4" grow shift app>
    <v-btn v-for="item in itemsBottomNav" :key="item.title" :to="item.link" link>
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>

  <!-- Main -->
  <v-main>
    <v-breadcrumbs v-if="!training" :items="itemsBreadcrumb" class="pb-0 breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container class="align-start" fluid>
      <v-row class="justify-center">
        <router-view />
      </v-row>
    </v-container>
  </v-main>

  <!-- Footer -->
  <v-footer v-if="!training" class="footer" inset padless app absolute>
    <v-card tile width="100%" class="text-center">
      <v-card-text class="pa-1">
        <v-btn v-for="item in itemsFooter" :key="item.title" text rounded :to="item.link" class="mx-1">
          <v-icon left>
            {{ item.icon }}
          </v-icon>
          {{item.title}}
        </v-btn>
        <v-btn text rounded href="https://github.com/motiontx/flashcard-app" target="_blank" class="mx-1">
          <v-icon left>mdi-github</v-icon>
          Code
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="pa-2">
        {{ new Date().getFullYear() }} — <strong>Flashcard APP</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    miniVariant: true,
    bottomNav: 3,

    itemsDrawer: [{
        title: 'Home',
        icon: 'mdi-home',
        link: '/',
      },
      {
        title: 'Topics',
        icon: 'mdi-cards',
        link: '/topics',
      },
      {
        title: 'Training',
        icon: 'mdi-brain',
        link: '/training',
      },
    ],

    itemsAppBarMenu: [{
        title: 'Profile',
        icon: 'mdi-account-circle',
        link: '/profile',
      },
      {
        title: 'Logout',
        icon: 'mdi-logout',
        link: '#',
      },
    ],

    itemsFooter: [{
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

    itemsBottomNav: [{
        title: 'Home',
        icon: 'mdi-home',
        link: '/',
      },
      {
        title: 'Topics',
        icon: 'mdi-cards',
        link: '/topics',
      },
      {
        title: 'Training',
        icon: 'mdi-brain',
        link: '/training',
      },
    ],

    itemsBreadcrumb: [{
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Topics',
        disabled: true,
        href: '/topics',
      },
    ],

  }),

  computed: {
    ...mapState(['training']),
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: "Forgetica";
    src: url("../public/fonts/SansForgetica-Regular.otf");
}

@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

.bottomNav {
    display: none !important;
    position: absolute !important;
}

@media (max-width: 1264px) {
    .breadcrumbs,
    .drawer,
    .footer,
    .navIcon {
        display: none !important;
    }

    .bottomNav {
        display: flex !important;
        position: fixed !important;
    }
}
</style>
