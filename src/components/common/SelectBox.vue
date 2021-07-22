<template>
  <select  v-model="compValue">
    <option v-if="useBlank" value=""></option>
    <option
      v-for="(item, index) in items"
      :key="index"
      :value="item[valueProp]"
    >
      {{ item[labelProp] }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class SelectBox extends Vue{

  @Prop()
  value!: string;
  /** ラベルのプロパティ */
  @Prop()
  labelProp!: string;
  /** valueのプロパティ */
  @Prop()
  valueProp!: string;
  /** valueを数値として扱う */
  @Prop()
  isNumber?: boolean;
  /** 先頭に空白を入れる */
  @Prop()
  useBlank?: boolean;
  /** 選択肢 */
  @Prop()
  items!: any[];

  created(): void {
  }

  get compValue(): string  {
    return this.value;
  }

  set compValue(value: string) {
    const isNumber = this.isNumber == null ? false : this.isNumber;
    let retrunVal: string | number | null = null;
    if (this.isNumber) {
      if (value === '') {
        retrunVal = null;
      } else {
        retrunVal = Number(value);
      }
    } else {
      retrunVal = value;
    }
    this.$emit('input', retrunVal);
  }
}
</script>

<style scoped>
</style>
