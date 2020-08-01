<template>
<v-col class="mb-4 pa-5">
  <v-card elevation="12" rounded="lg">

    <v-img class="white--text align-center" src="https://picsum.photos/600/80">
      <div class="profileHeader ma-4">
        <v-btn small class="buttonOptions ma-1" color="white" icon>
          <v-icon>mdi-square-edit-outline</v-icon>
        </v-btn>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-avatar size="128" class="ma-1">
              <img src="https://picsum.photos/200/200" alt="user">
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="indigo">
                  <v-btn x-large icon @click="openAvatarLoader()">
                    <v-icon>mdi-image-edit</v-icon>
                  </v-btn>
                  <input class="d-none" type="file" id="avatarLoader" name="avatar" accept="image/png, image/jpeg">
                </v-overlay>
              </v-fade-transition>
            </v-avatar>
          </template>
        </v-hover>
        <v-card-title class="mt-1 pa-0 justify-center display-1 font-weight-bold">
          <input type="text" spellcheck="false" v-model="username" class="username" maxlength="25">
        </v-card-title>
      </div>
    </v-img>

    <v-form class="pa-6 pb-0">
      <h2 class="mb-2">Account</h2>
      <v-divider class="mb-6"></v-divider>
      <v-row dense>
        <v-col cols="12" md="6" class="inputCol">
          <v-text-field value="Vittorio" label="Name" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="inputCol">
          <v-text-field value="Retrivi" label="Surname" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="3" class="inputCol">
          <v-text-field type="date" label="Birthday" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="5" class="inputCol">
          <v-text-field value="test.flashcard@test.com" label="Email" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="inputCol">
          <v-text-field value="Argentina" label="Country" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="auto"class="ml-auto">
            <v-btn class="mx-1">Cancel</v-btn>
            <v-btn class="mx-1" color="success" type="submit">Update Account</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-form class="pa-6">
      <h2 class="mb-2">Change Password</h2>
      <v-divider class="mb-6"></v-divider>
      <v-row dense>
        <v-col cols="12" class="inputCol">
          <v-text-field type="password" label="Old password" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="6" class="inputCol">
          <v-text-field type="password" label="New password" outlined></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="inputCol">
          <v-text-field type="password" label="Confirm new password" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="auto"class="ml-auto">
            <v-btn class="mx-1" type="submit">Update Password</v-btn>
        </v-col>
      </v-row>
    </v-form>

  </v-card>
</v-col>
</template>

<script>
export default {
  name: 'Profile',

  data: () => ({
    username: 'Motiontx',
  }),

  methods: {
    openAvatarLoader() {
      document.getElementById('avatarLoader').click()
    },
  },
};
</script>

<style lang="scss" scoped>
.profileHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.buttonOptions {
    z-index: 15;
    position: absolute;
    top: 0;
    right: 0;
}

.username{
  color: #fff;
  outline: none;
  text-align: center;
}

.inputCol {
   height: 5rem;
   display: flex !important;
   align-items: center !important;
 }
</style>
