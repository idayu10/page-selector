<template>
  <button
    class="btn-round"
     @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class RoundButton extends Vue{

  created(): void {
  }

  onClick(): void {
    this.$emit('emit-click');
  }
}
</script>

<style scoped>
.btn-round {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 25px;
}
.btn-round:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border: none;/*線を消す*/
}
</style>