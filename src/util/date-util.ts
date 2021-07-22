import _ from "lodash";

export default class DateUtil {

  /**
   * Dateの時間をその日の最初(00:00:00 000)にして返す
   * @param {Date} date Date
   * @return {Date} 時間を設定したDate
   */
   public static dateStart(date: Date): Date {
    const dateClone = _.cloneDeep(date);
    dateClone.setHours(0);
    dateClone.setMinutes(0);
    dateClone.setSeconds(0);
    dateClone.setMilliseconds(0);
    return dateClone;
  }

  /**
   * Dateの時間をその日の最後(23:59:59 999)にして返す
   * @param {Date} date Date
   * @return {Date} 時間を設定したDate
   */
   public static dateEnd(date: Date): Date {
    const dateClone = _.cloneDeep(date);
    dateClone.setHours(23);
    dateClone.setMinutes(59);
    dateClone.setSeconds(59);
    dateClone.setMilliseconds(999);
    return dateClone;
  }

  /**
   * Dateをフォーマットの文字列に変換
   * @param {Date} date Date
   * @param {string} format フォーマット
   * @return {string} 文字列日付
   */
  public static formatDate(date: Date, format: string): string {
    format = format.replace(/yyyy/g, date.getFullYear().toString());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
  };

  /**
   * Date配列の最大値を返す
   * @param {Date} array Date配列
   * @return {Date} 最大値
   * @return {null} 計算出来ない場合null
   */
   public static maxOfArray(array: Date[]): Date | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const newArray = array.map(item => {
      return Number(item);
    });
    const aryMax = (a: number, b: number) => {
      return Math.max(a, b);
    }
    let max: number | null = null;
    try {
      max = newArray.reduce(aryMax);
    } catch (error) {
      console.log('max:not number')
      return null;
    }

    if (max == null) {
      return null
    } else {
      return new Date(max);
    }
  }

  /**
   * Date配列の最小値を返す
   * @param {Date[]} array Date配列
   * @return {Date} 最小値
   * @return {null} 計算出来ない場合null
   */
  public static minOfArray(array: Date[]): Date | null {
    if (array == null || array.length == 0) {
      return null;
    }

    const newArray = array.map(item => {
      return Number(item);
    });
    const aryMin = (a: number, b: number) => {
      return Math.min(a, b);
    }
    let min: number | null = null;
    try {
      min = newArray.reduce(aryMin);
    } catch (error) {
      console.log('min:not number')
      return null;
    }

    if (min == null) {
      return null
    } else {
      return new Date(min);
    }
  }
}
