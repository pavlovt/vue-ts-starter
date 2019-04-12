import {
  VuexModule,
  Module,
  MutationAction,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "./index";

@Module({ namespaced: true, dynamic: true, name: "post", store: store })
class VuexSevice extends VuexModule {
  posts = [];
  post: any = {};

  @MutationAction({ mutate: ["posts"] })
  async list() {
    return { posts: await api.get(conf.api.posts) };
  }

  @Action({})
  async get(id: string) {
    return api.get(conf.api.posts + "/" + id);
  }

  @Action({})
  async save(data: any) {
    if (data.id) await api.put(conf.api.posts + "/" + data.id, data);
    else await api.post(conf.api.posts + "/" + data.id, data);
    msg.info("The record is saved");
  }

  @MutationAction({ mutate: ["posts"] })
  async remove(id: string) {
    await api.delete(conf.api.posts + "/" + id);
    msg.info("The record is deleted");
    return { posts: await api.get(conf.api.posts) };
  }
}
// console.log(getModule(VuexSevice));
export default getModule(VuexSevice);
