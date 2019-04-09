<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

console.log(_.map([1,2,3], v => v*2));

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
