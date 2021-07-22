import { ChartData, ChartOptions } from "chart.js";

export interface AllData {
  chartData: ChartData;
  option: ChartOptions;
  areaId: string;
  startDate: Date | null;
  endDate: Date | null;
}

export class AllDataImpl implements AllData {
  chartData = {} as ChartData;
  option = {} as ChartOptions;
  name = '';
  startDate = new Date();
  endDate = new Date();
  areaId = '';
}
