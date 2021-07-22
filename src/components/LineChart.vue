<script lang="ts">
import { Component, Prop, mixins as Mixins, Watch } from 'nuxt-property-decorator';
import { Line, mixins } from 'vue-chartjs';
import Chart from "chart.js";

@Component({
  components: {}
})
export default class LineChart extends Mixins(Line, mixins.reactiveProp) {

  @Prop()
  chartData!: Chart.ChartData;
  @Prop()
  options!: Chart.ChartOptions;

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }

  @Watch('options')
  watchOptions() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style>
</style>
