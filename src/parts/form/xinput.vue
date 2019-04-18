<template>
  <div class="form-group mb-5">
    <label class="input-label" :for="id">{{label}}</label>
    <input
      :type="type"
      ref="input"
      class="form-control"
      :class="{'input-error': errors && errors.has(this.name)}"
      :id="id"
      :placeholder="placeholder"
      @input="update($event.target.value)"
      v-bind="$attrs"
    >
    <span
      class="help is-danger failed-input-message"
      v-show="errors && errors.has(this.name)"
    >{{ errors && errors.first(this.name) }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

@Component
export class XInput extends Vue {
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
