<template>
  <div class="home">
    <h1>Home</h1>
    Conter: {{counter.count}} {{counter.zz}}
    <br>
    <button @click="counter.inc()">Inc</button>
    <button @click="counter.in()">zz</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { getModule } from "vuex-module-decorators";
import Counter from "@/store/counter";

console.log(_.map([1, 2, 3], v => v * 2));

@Component({})
export default class Home extends Vue {
  counter = Counter;
}
</script>
