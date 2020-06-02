<template>
  <InputBase>
    <Label :htmlFor="id">
      <slot />
    </Label>
    <input v-model="input" @input="onInput" v-bind="$attrs" :type="type" :id="id" />
  </InputBase>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import InputBase from "./InputBase.vue";
import Label from "../label/Label.vue";
@Component({
  components: {
    InputBase,
    Label
  }
})
export default class InputText extends Vue {
  @Prop({
    type: String,
    required: true
  })
  readonly value!: string;

  @Prop({
    type: String
  })
  readonly error!: string;

  @Prop({
    type: String,
    required: true
  })
  readonly id!: string;

  // computed
  private get type(): string {
    return this.$attrs.type || "text";
  }

  private get input() {
    return this.value;
  }

  private set input(value: string) {
    this.emitChangeValue(value);
  }

  // methods
  onInput(event: UIEvent) {
    // 한글 대응을 위한 코드
    const value = (event.target as HTMLInputElement).value;
    this.emitChangeValue(value);
  }

  emitChangeValue(value: string) {
    this.$emit("input", value);
  }
}
</script>

<style scoped></style>
