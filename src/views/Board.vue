<template>
  <div>
    <table>
      <tr>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
        <td>{{ value.writer }}</td>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
      </tr>
    </table>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      @click:row="rowClick"
    ></v-data-table>
    <v-app>
      <v-btn large color="primary" dark @click="writeContent()">글쓰기</v-btn>
    </v-app>
  </div>
</template>

<script>
import data from "@/data/data.js";
import axios from "axios";

export default {
  name: "Read",
  data() {
    let items = data.Content.sort((a, b) => {
      return b.content_id - a.content_id;
    });

    items = items.map((contentItem) => {
      return {
        ...contentItem,
        user_name: data.User.filter(
          (userItem) => userItem.user_id === contentItem.user_id
        )[0].name,
      };
    });
    return {
      data: data,
      headers: [
        { text: "글번호", value: "content_id", align: "center" },
        { text: "이름", value: "title", align: "center" },
        { text: "날짜", value: "created_at", align: "center" },
        { text: "글쓴이", value: "user_name", align: "center" },
      ],
      desserts: items,
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "create",
      });
    },
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: index,
        },
      });
    },
    rowClick(item, index, e) {
      this.$router.push({
        path: `/ContentDetail/${item.content_id}`,
      });
    },
    writeContent() {
      // this.$router.push({
      //   path: "boardCreate",
      // });
      axios
        .get("http://127.0.0.1:8000/")
        .then((response) => {
          console.log(response.data);

          this.$router.push({
            path: "boardCreate",
          });
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
  },
};
</script>