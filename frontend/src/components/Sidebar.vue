<template>
<v-navigation-drawer class="blue-grey accent-4" dark v-model="drawer" app>

  <v-list-item>
    <v-list-item-avatar>
      <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>Motiontx</v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-divider></v-divider>

  <v-list dense nav>
    <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>

      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>

    </v-list-item>

    <v-list-group no-action color="blue-gray">
      <template v-slot:activator>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Topics</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item @click="" link>
        <v-list-item-content>
          <v-list-item-title>Test I</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="" link>
        <v-list-item-content>
          <v-list-item-title>Test II</v-list-item-title>
        </v-list-item-content>
      </v-list-item>


    </v-list-group>
  </v-list>

  <template v-slot:append>
    <div class="pa-2">
      <v-btn color="black" dark block>Logout</v-btn>
    </div>
  </template>

</v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',

  props: ['drawer'],

  data: () => ({
    items: [{
        title: 'Home',
        icon: 'mdi-home',
        link: '/',
      },
      {
        title: 'Topics',
        icon: 'mdi-image',
        link: '/topics',
      },
      {
        title: 'Profile',
        icon: 'mdi-account-circle',
        link: '/profile',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
// ...
</style>
