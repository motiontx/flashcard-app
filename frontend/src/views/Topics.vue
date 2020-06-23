<template>
<v-row class="text-center">
  <v-col class="mb-4">
    <v-expansion-panels multiple flat hover>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header hide-actions>
          <v-row class="align-center">

            <h3 class="text-h4">
              Física I
            </h3>

            <v-btn x-small color="info" class="align-self-start ml-2">
              Train
            </v-btn>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn x-small fab color="deep-purple" dark v-bind="attrs" v-on="on" class="ml-auto">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" @click="">
                  <v-icon>{{ item.icon }}</v-icon>
                  <v-list-item-title class="ml-2">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-row>
        </v-expansion-panel-header>
        <v-divider class="mb-3"></v-divider>
        <v-expansion-panel-content class="ml-2">
          <v-row>
            <Flashcard v-for="(item,i) in randomNumber()" />
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</v-row>
</template>

<script>
import Flashcard from '@/components/Flashcard.vue'

export default {
  name: 'Topics',
  components: {
    Flashcard,
  },
  data: () => ({
    items: [{
      title: 'Delete',
      icon: 'mdi-delete'
    }, ],
  }),

  methods: {
    randomNumber() {
      return Math.floor(Math.random() * (20)) + 5
    },
  }
}
</script>


<style lang="scss" scoped>
  // ...
</style>
