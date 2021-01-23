<template>
<v-dialog v-model="dialog" persistent max-width="600px">

  <template v-slot:activator="{ on, attrs }">
    <v-card elevation="8" rounded="lg" v-bind="attrs" v-on="on" ripple class="card">
      <v-responsive :aspect-ratio="16/9">
        <div class="content">
          <v-icon size="128">mdi-plus</v-icon>
        </div>
      </v-responsive>
    </v-card>
  </template>

  <v-card rounded="lg">

    <v-card-title>
      <span class="headline">New Topic</span>
    </v-card-title>

    <v-form class="pa-6 pb-0" v-on:submit.prevent="submitNewTopic">
      <v-row dense>
        <v-col cols="12" class="inputCol">
          <v-text-field label="Name" v-model="form.name" required outlined></v-text-field>
        </v-col>
        <v-col cols="12" class="inputCol">
          <v-text-field label="Description" v-model="form.description" rows="2" outlined></v-text-field>
        </v-col>
        <v-col cols="auto" class="ml-auto inputCol">
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
          <v-btn class="ml-2" type="submit" color="success" @click="dialog = false">Add</v-btn>
        </v-col>
      </v-row>
    </v-form>

  </v-card>

</v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  name: 'topicCardNew',

  data: () => ({
    dialog: false,
    form: {
      name: '',
      description: '',
    },
  }),

  computed: {
    randomImg() {
      return `https://picsum.photos/id/${Math.floor(Math.random() * (200))}/300/125`
    },
  },

  methods: {
    submitNewTopic() {
      axios.post('/topics', this.form)
        .then((res) => {
          this.$emit('onSubmit');
        })
        .catch((error) => {
          console.log(error.response.status);
        }).finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    height: 100%;
    display: flex;
    align-items: center;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inputCol {
    height: 5rem;
    display: flex !important;
    align-items: center !important;
}
</style>
