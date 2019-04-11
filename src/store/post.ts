import {
  VuexModule,
  Module,
  MutationAction,
  getModule
} from "vuex-module-decorators";
import store from "./index";

@Module({ namespaced: true, dynamic: true, name: "post", store: store })
class VuexSevice extends VuexModule {
  posts = [];

  @MutationAction({ mutate: ["posts"] })
  async list() {
    return { posts: await api.get(conf.api.posts) };
  }
}

export default getModule(VuexSevice);
