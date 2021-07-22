export default class StringUtil {

  /**
   * 文字列がnullまたは空文字かどうか判定する。
   * @param {string} value 文字列
   * @return {boolean} nullまたは空文字:true
   */
  public static isEmpty(value: string): boolean {
    return value == null || value === '';
  }

  public static formatDate(date: Date | string, format: string) {
    const dateValue = date instanceof Date ? date : new Date(date);
    let retValue = format;
    retValue = retValue.replace(/YYYY/, dateValue.getFullYear().toString());
    retValue = retValue.replace(/MM/, (dateValue.getMonth() + 1).toString());
    retValue = retValue.replace(/DD/, dateValue.getDate().toString());

    return retValue;
  }
}
