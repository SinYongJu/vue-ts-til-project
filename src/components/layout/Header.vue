<template v-slot:header>
  <header class="header">
    <h1>Vue Til ts</h1>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/signup">Sign Up</router-link>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  text-align: right;
  background-color: #42b983;
}
.header:after {
  display: block;
  clear: both;
  height: 0;
  content: "";
}
.header >>> h1 {
  float: left;
}
.header >>> a {
  padding: 0 20px;
}
</style>
