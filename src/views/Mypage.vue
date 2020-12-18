<template>
  <v-container>
    <div style="margin: 100px">
      <flickity class="flickity" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">
          <img
            :src="require(`@/assets/1.png`)"
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="carousel-cell">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
            style="width: 100%; height: 100%"
            alt="Sample image"
          />
        </div>
        <div class="carousel-cell">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
            style="width: 100%; height: 100%"
            alt="Sample image"
          />
        </div>
        <div class="carousel-cell">
          <img
            class="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
            alt="Sample image"
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="carousel-cell"></div>
      </flickity>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import Flickity from "vue-flickity";
export default {
  data() {
    return {
      flickityOptions: {
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true,
        autoPlay: true,
        // any options from Flickity can be used
      },
    };
  },

  components: {
    Flickity,
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
<style>
/* external css: flickity.css */

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.carousel {
  background: #eee;
}

.carousel-cell {
  width: 500px;
  height: 500px;
  margin-right: 15px;
  background: #8c8;
  border-radius: 5px;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;

  line-height: 200px;
  font-size: 80px;
  color: white;
}

/* position dots in gallery */
.flickity-page-dots {
  bottom: 0px;
}
/* white circles */
.flickity-page-dots .dot {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid white;
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: white;
}
</style>
