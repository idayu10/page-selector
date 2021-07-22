<template>
  <div class="container">
    <h2>数値4が最大</h2>
    <p>{{$t('param.param1')}}:{{this.$route.query.param1}}</p>
    <p>{{$t('param.param2')}}:{{this.$route.query.param2}}</p>
    <p>{{$t('param.param3')}}:{{this.$route.query.param3}}</p>
    <p>{{$t('param.param4')}}:{{this.$route.query.param4}}</p>
    <p>{{$t('param.param5')}}:{{this.$route.query.param5}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
  components: {
  }
})
export default class Index extends Vue {

  async created(): Promise<void> {
  }
}
</script>

<style>
</style>
