<template>
  <VueSlickCarousel v-bind="settings">
    <div><img src="https://picsum.photos/300/300" /></div>
    <div><img src="https://picsum.photos/300/300" /></div>
    <div><img src="https://picsum.photos/300/300" /></div>
    <div><img src="https://picsum.photos/300/300" /></div>
    <div><img src="https://picsum.photos/300/300" /></div>
    <div><img src="https://picsum.photos/300/300" /></div>
  </VueSlickCarousel>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    };
  },
  name: "MyComponent",
  components: { VueSlickCarousel },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>