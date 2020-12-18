<template>
  <v-app>
    <v-card
      class="mx-auto overflow-hidden text-center"
      height="100%"
      width="100%"
      style="background: #fffbe6"
    >
      <v-app-bar color="basil" height="100px">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer />

        <v-toolbar-title class="font-weight-bold display-1">
          Circle Blog
        </v-toolbar-title>

        <v-spacer />

        <!-- <v-toolbar-items class="hidden-sm-and-down">
          <v-menu open-on-hover offset-y v-if="isLogin">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-reorder-horizontal</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item router :to="{ name: 'Mypage' }">
                <v-list-item-title>마이페이지</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$store.dispatch('logout')">
                <v-list-item-title>로그아웃</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn text v-else router :to="{ name: 'Login' }">Log In</v-btn>
        </v-toolbar-items> -->
        <!-- <textarea
          name="ourtext"
          style="
            width: 18%;
            height: 100;
            border: 1;
            overflow: visible;
            text-overflow: ellipsis;
          "
          disabled
        >
          Tel : 010 - 9227 - 9243 ---------------------------------------
          Git Hub 주소 : https://github.com/cyberzzang7
        </textarea> -->
      </v-app-bar>

      <v-main>
        <v-tabs background-color="basil" color="red" fixed-tabs>
          <v-tab flat router :to="{ name: 'Mypage' }">Mainpage</v-tab>
          <v-tab router :to="{ name: 'Profile' }">Profile</v-tab>
          <v-tab router :to="{ name: 'Board' }">Board</v-tab>
          <v-tab router :to="{ name: 'Contact' }"> Contact</v-tab>
        </v-tabs>
        <router-view style="background: #fffbe6" />
      </v-main>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item router :to="{ name: 'Home' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item
              v-if="isLogin === false"
              router
              :to="{ name: 'Login' }"
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>로그인</v-list-item-title>
            </v-list-item>

            <v-list-item v-else router :to="{ name: 'Mypage' }">
              <v-list-item-icon>
                <v-icon>mdi-mail</v-icon>
              </v-list-item-icon>

              <v-list-item-title>메인페이지</v-list-item-title>
            </v-list-item>

            <v-list-item
              v-if="isLogin === true"
              @click="$store.dispatch('logout')"
            >
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>

              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <div id="app">
      <Footercom></Footercom>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Footercom from "./views/footer.vue";
export default {
  data: () => ({
    drawer: false,
    group: null,
    tab: null,
    items: ["MyPage", "Profile", "Board", "Contact"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
  components: {
    Footercom,
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>