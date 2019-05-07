<template>
  <div>
    <h1>Add /Edit Post</h1>

    <form @submit.prevent="submit" novalidate>
      <xinput name="title" v-model="form.title" label="Title" validate="required"/>
      <xinput name="body" v-model="form.body" label="Desc" validate="required"/>
      <img :src="form.image" v-if="form.image">
      <xinput name="image" v-model="form.image" label="Image" validate="required"/>

      <div>
        <input type="submit" value="Submit" class="btn-blue">
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

  // components = { xinput: xinput };

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
