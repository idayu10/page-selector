export default class NumberUtil {

  /**
   * number配列の最大値を返す
   * @param {number} array number配列
   * @return {number} 最大値
   * @return {null} 計算出来ない場合null
   */
  public static maxOfArray(array: number[]): number | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const aryMax = (a: number, b: number) => {
      return Math.max(a, b);
    }
    let max: number | null = null;
    try {
      max = array.reduce(aryMax);
    } catch (error) {
      console.log('max:not number')
      return null;
    }

    return max;
  }

  /**
   * number配列の最小値を返す
   * @param {number[]} array number配列
   * @return {number} 最小値
   * @return {null} 計算出来ない場合null
   */
  public static minOfArray(array: number[]): number | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const aryMin = (a: number, b: number) => {
      return Math.min(a, b);
    }
    let min: number | null = null;
    try {
      min = array.reduce(aryMin);
    } catch (error) {
      console.log('min:not number')
      return null;
    }
    return min;
  }

  /**
   * object配列のkeyの最大値を返す
   * @param {any[]} array オブジェクト配列
   * @param {string} key オブジェクトのプロパティ
   * @return {number} 最大値
   * @return {null} 計算出来ない場合null
   */
  public static max(array: any[], key: string): number | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const numArray: number[] = [];
    for (const item of array) {
      try {
        numArray.push(Number(item[key]));
      } catch (error) {
        console.log('max:not number')
        return null;
      }
    }
    return Math.max.apply(null, numArray);
  }

  /**
   * object配列のkeyが最大のオブジェクトを返す
   * @param {any[]} array オブジェクト配列
   * @param {string} key オブジェクトのプロパティ
   * @return {object} 最大値
   * @return {null} 計算出来ない場合null
   */
  public static maxObj(array: any[], key: string): any | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const max = array.reduce((a,b)=>a[key]>b[key]?a:b);
    return max;
  }

  /**
   * object配列のkeyの最小値を返す
   * @param {any[]} array オブジェクト配列
   * @param {string} key オブジェクトのプロパティ
   * @return {number} 最小値
   * @return {null} 計算出来ない場合null
   */
  public static min(array: any[], key: string): number | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const numArray: number[] = [];
    for (const item of array) {
      try {
        numArray.push(Number(item[key]));
      } catch (error) {
        console.log('min:not number')
        return null;
      }
    }
    return Math.min.apply(null, numArray);
  }

  /**
   * 数値をカンマ区切りにする
   * 数値でない場合はそのまま返す
   * @param {string | number} value 値
   * @return {string} カンマ区切りにした値
   */
  public static commaSepareted(value: string | number): string {
    let num = (typeof value === 'string') ? parseFloat(value) : value;
    if (Number.isNaN(num)) {
      // NaNの場合は元の値を返す
      return value.toString();
    }
    const strValue = String(num);
    let natural;
    let decimal;
    const decimalPoint = strValue.indexOf('.');
    if (decimalPoint > 0) {
      // 小数点あり
      natural = strValue.substr(0, decimalPoint);
      decimal = strValue.substr(decimalPoint);
    } else {
      // 小数点なし
      natural = strValue;
      decimal = '';
    }
    return natural.replace(/(\d)(?=(\d{3})+$)/g , '$1,') + decimal;
  }
}
