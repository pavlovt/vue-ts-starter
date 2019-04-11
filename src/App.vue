<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as lodash from "lodash";
import conf from "./core/conf";
import msg from "./core/notify";
import core from "./core/core";
import api from "./core/api";

// assign all global here and define them in global.d.ts
// https://stackoverflow.com/questions/47736473/how-to-define-global-function-in-typescript
let glob = window as any;
glob._ = lodash;
glob.msg = msg;
glob.conf = conf;
glob.core = core;
glob.api = api;

@Component
export default class App extends Vue {}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
