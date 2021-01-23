<template>
<v-card elevation="8" rounded="lg" ripple :to="topicURL">
  <v-img :src="randomImg"/>
  <v-menu left top rounded="lg">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click.stop class="buttonOptions" icon color="white" v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list nav>
      <v-list-item @click="deleteTopic">
        <v-icon left>mdi-delete</v-icon>
        <v-list-item-title>Delete</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-card-title>{{name}}</v-card-title>
  <v-card-subtitle>17 Cards</v-card-subtitle>
</v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TopicCard',

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    deleteTopic(){
      axios.delete(`/topics/${this.id}`)
        .then((res) => {
          this.$emit('onDelete');
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
    },
  },

  computed: {
    randomImg() {
      return `https://picsum.photos/id/${Math.floor(Math.random() * (200))}/300/125`;
    },

    topicURL(){
      return `/topic/${this.id}`;
    }
  },
};
</script>

<style lang="scss" scoped>
.buttonOptions {
    z-index: 15;
    position: absolute;
    top: 0;
    right: 0;
}
</style>
