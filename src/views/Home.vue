<template>
  <div class="home">
    <h1>Home</h1>
    Conter: {{counter.count}} {{counter.zz}}
    <br>
    <button @click="counter.inc()">Inc</button>
    <button @click="counter.in()">zz</button>

    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Desc</th>
      </tr>
      <tr v-for="item in post.posts" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.body}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { getModule } from "vuex-module-decorators";
import Counter from "@/store/counter";
import Post from "@/store/post";

@Component({})
export default class Home extends Vue {
  counter = Counter;
  post = Post;

  mounted() {
    Post.list();
  }
}
</script>
