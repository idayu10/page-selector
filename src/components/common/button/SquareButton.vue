<template>
  <button
    class="btn-square"
     @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class SquareButton extends Vue{

  created(): void {
  }

  onClick(): void {
    this.$emit('emit-click');
  }
}
</script>

<style scoped>
.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background:  rgb(0, 170, 165);;/*ボタン色*/
  color: #FFF;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}
</style>