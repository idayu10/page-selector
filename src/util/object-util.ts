import _ from 'lodash';
export default class ObjectUtil {

  /**
   * 同じフィールドをマッピングしたオブジェクトを作成する。
   * @param {any} target マッピングされるオブジェクト
   * @param {any} source マッピング元
   * @return {any} マッピングしたオブジェクト
   */
  public static map(target: any, source: any): any {
    const clone = _.cloneDeep(target);
    const sameFields = Object.keys(target).filter((item) => {
      return source.hasOwnProperty(item);
    });

    sameFields.forEach(field => {
      clone[field] = _.cloneDeep(source[field]);
    });

    return clone;
  }
}