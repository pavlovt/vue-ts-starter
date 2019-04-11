import {
  VuexModule,
  Module,
  MutationAction,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import store from "./index";

@Module({ namespaced: true, dynamic: true, name: "counter", store: store })
class Counter extends VuexModule {
  count = 0;
  zz = "zz";

  // @MutationAction({ mutate: ["count"] })
  @Mutation
  increment() {
    // return { count: this.count + 1 };
    this.count++;
  }

  @Action({ commit: "increment" })
  inc() {
    console.log(this.count);

    return 5;
  }

  @MutationAction({ mutate: ["count"] })
  async in() {
    // console.log(this.state.count, this.state.zz);
    return { count: (this.state as any).count + 1 };
  }
}
console.log(getModule(Counter));

export default getModule(Counter);
