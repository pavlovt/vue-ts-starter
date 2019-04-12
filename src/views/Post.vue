<template>
  <div>
    <h1>Add /Edit Post</h1>

    <form @submit.prevent="submit">
      <div>
        <label for>Title</label>
        <input v-model="form.title">
      </div>
      <div>
        <label for>Desc</label>
        <input v-model="form.body">
      </div>
      <img :src="form.image" v-if="form.image">
      <div>
        <label for>Image</label>
        <input v-model="form.image">
      </div>
      <div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { getModule } from "vuex-module-decorators";
import Counter from "@/store/counter";
import Post from "@/store/post";

// Register the router hooks with their names
// Component.registerHooks(["beforeRouteEnter"]);

@Component({})
export default class CustomComponent extends Vue {
  counter = Counter;
  post = Post;
  core = core;
  form: any = {};

  watch = {
    // call again the method if the route changes
    $route: "created"
  };

  async submit() {
    this.form.qty = 0;
    await Post.save(this.form);
    core.goto("/");
  }

  async created() {
    this.form = await Post.get(this.$route.params.id);
  }
}
</script>
