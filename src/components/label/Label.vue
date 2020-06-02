<template>
  <label :for="htmlFor">
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Label extends Vue {
  @Prop({
    type: String
  })
  readonly htmlFor!: string;

  mounted() {
    console.log(this.htmlFor);
  }
}
</script>

<style scoped></style>
