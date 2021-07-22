export interface Rank {
  paramName: string;
  value: number;
}

export class RankImpl implements Rank {
  paramName = '';
  value = 0;
}
