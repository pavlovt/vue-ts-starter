<template>
  <div class="form-group mb-5">
    <label class="input-label" :for="id">{{label}}</label>
    <input
      :type="type"
      ref="input"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="update($event.target.value)"
      v-bind="$attrs"
      :name="name"
      v-validate="validate"
      :class="{'input-error': errors && errors.has(this.name)}"
    >
    <div
      class="help error"
      v-show="errors && errors.has(this.name)"
    >{{ errors && errors.first(this.name) }}</div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

@Component({})
export default class CustomComponent extends Vue {
  @Inject() $validator;

  @Prop(String)
  name;

  @Prop([String, Number])
  value;

  @Prop(String)
  label;

  @Prop(String)
  placeholder;

  @Prop({ default: "text" })
  type;

  @Prop(String)
  validate;

  @Prop({
    default: function(val) {
      return val || `form-input-${(this as any).name}`;
    }
  })
  id;

  mounted() {}

  update(val) {
    this.$emit("input", val);
  }
}
</script>
