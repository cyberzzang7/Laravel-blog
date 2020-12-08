<template></template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>