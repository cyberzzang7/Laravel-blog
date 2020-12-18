<template>
  <v-layout class="login" wrap>
    <v-card
      class="text-md-center"
      rounded
      width="434"
      height="300"
      style="margin: 50px"
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              style="margin-top: 10px"
              tile
            >
              <v-img src="../assets/mypicture.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Kim Won Hyoung, 26
                </v-list-item-title>
                <v-list-item-subtitle>Yeungjin University</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
      <div style="padding: 10px">
        <p>
          <v-icon style="display: inline; color: red; float: left"
            >mdi-phone</v-icon
          >
          <strong> 010-9227-9243 </strong>
        </p>
        <v-divider class="mx-4"></v-divider>
        <p>
          <v-icon style="display: inline; color: red; float: left"
            >mdi-book</v-icon
          >
          <strong> https://github.com/cyberzzang7/Laravel-blog </strong>
        </p>
        <v-divider class="mx-4"></v-divider>
        <p>
          <v-icon style="display: inline; color: red; float: left"
            >mdi-email</v-icon
          >
          <strong> cyberzzang7@g.yju.ac.kr </strong>
        </p>
        <v-divider class="mx-4"></v-divider>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  data: () => ({}),

  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>