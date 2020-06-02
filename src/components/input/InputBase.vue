<template>
  <div class="input_base">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class InputBase extends Vue {}
</script>

<style scoped></style>
