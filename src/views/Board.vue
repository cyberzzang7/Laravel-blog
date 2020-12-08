<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
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