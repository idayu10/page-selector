<template>
  <input
    type="datetime-local"
    v-model="compValue"
    @blur="onBlur"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import DateUtil from '@/util/date-util';

@Component({})
export default class InputDateTime extends Vue{

  @Prop()
  value!: Date;

  created(): void {
  }

  get compValue(): string  {
    return DateUtil.formatDate(this.value, 'yyyy-MM-ddThh:mm:ss.SSS');
  }

  set compValue(value: string) {
    this.$emit('input', new Date(value));
  }

  onBlur(): void {
    this.$emit('emit-blur', this.value);
  }
}
</script>

<style scoped>
</style>
