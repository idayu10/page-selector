<template>
  <div>
    {{ $t("param."+name)}}
    <input type="number" v-model="compValue">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class InputParam extends Vue{

  @Prop()
  value!: string;
  @Prop()
  name!: string;

  created(): void {
  }

  get compValue(): string  {
    return this.value;
  }

  set compValue(value: string) {
    this.$emit('input', value);
  }
}
</script>

<style scoped>
</style>
