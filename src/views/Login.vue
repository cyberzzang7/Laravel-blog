<template>
  <v-container style="max-width: 450px; height: 900px">
    <v-layout class="login" row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>

        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            >
            </v-text-field>
            <v-btn
              color="primary"
              depressed
              block
              large
              @click="
                login({
                  email: email,
                  password: password,
                })
              "
              >로그인</v-btn
            >
            <!-- <v-btn @click="test">테스트</v-btn> -->
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
    test() {
      axios
        .get("https://reqres.in/api/user?ID=12345")
        .then(function (response) {
          console.log(response);

        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .then(() => {
          console.log("test");
          // always exeuted
        });
    },
  },
};
</script>

<style >
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 200px;
}
</style>