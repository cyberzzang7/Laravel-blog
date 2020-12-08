
<template >
  <v-footer
    class="foot"
    style="background: #fffbe6; position: absolute; padding: 0"
  >
    <v-spacer></v-spacer>
    <div style="background: #fffbe6">
      <p style="display: inline">
        <strong> E-mail </strong> : cyberzzang7@g.yju.ac.kr /
        <strong> 2WDJ / 영진전문대학교 컴퓨터정보계열/ 320호 /</strong>
      </p>
      <strong> &copy; {{ new Date().getFullYear() }} </strong>
    </div>
  </v-footer>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>




<style>
.foot {
  bottom: 0px;
  width: 100%;
  text-align: center;
}
</style>