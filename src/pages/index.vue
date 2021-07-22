<template>
  <div class="container">
    <input-param
      v-for="(rank, index) in ranks"
      :key="index"
      v-model="rank.value"
      :name="rank.paramName"
    ></input-param>
    <square-button
      @emit-click="move()"
    >
      {{ $t('common.move') }}
    </square-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Rank, RankImpl } from '@/resources/class/common/rank';
import NumberUtil from '@/util/number-util';
@Component({
  components: {
    InputParam :() => import('@/components/common/InputParam.vue'),
    SquareButton :() => import('@/components/common/button/SquareButton.vue')
  }
})
export default class Index extends Vue {

  ranks: Rank[] = [];

  async created(): Promise<void> {
    const param1 = new RankImpl();
    param1.paramName = 'param1';
    this.ranks.push(param1);
    const param2 = new RankImpl();
    param2.paramName = 'param2';
    this.ranks.push(param2);
    const param3 = new RankImpl();
    param3.paramName = 'param3';
    this.ranks.push(param3);
    const param4 = new RankImpl();
    param4.paramName = 'param4';
    this.ranks.push(param4);
    const param5 = new RankImpl();
    param5.paramName = 'param5';
    this.ranks.push(param5);
  }

  move(): void {
    const max: Rank = NumberUtil.maxObj(this.ranks, 'value');
    console.log(max);
    this.$router.push({ path: 'detail/'+max!.paramName.slice(-1) , query :{
      param1: this.ranks[0].value.toString(),
      param2: this.ranks[1].value.toString(),
      param3: this.ranks[2].value.toString(),
      param4: this.ranks[3].value.toString(),
      param5: this.ranks[4].value.toString()
    }});
  }
}
</script>

<style>
</style>
