<template>
<v-col class="mb-4 pa-5">
  <v-card elevation="12" rounded="lg">

    <v-img class="white--text align-center" src="https://picsum.photos/600/125">
      <div class="profileHeader">
        <v-avatar size="128" class="ma-1">
          <img src="https://picsum.photos/200/200" alt="user">
        </v-avatar>
        <v-card-title class="ma-1 pa-0 justify-center display-1 font-weight-bold">Motiontx</v-card-title>
      </div>
    </v-img>

    <v-form class="pa-5">
      <v-row dense>
        <v-col cols="12" md="6">
          <v-text-field value="Vittorio" label="Name" outlined readonly></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field value="Retrivi" label="Surname" outlined readonly></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="3">
          <v-text-field value="xx/xx/xxxx" label="Birthday" outlined readonly></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field value="test.flashcard@test.com" label="Email" outlined readonly></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field value="Argentina" label="Country" outlined readonly></v-text-field>
        </v-col>
      </v-row>
    </v-form>

  </v-card>
</v-col>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style lang="scss" scoped>
.profileHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>
