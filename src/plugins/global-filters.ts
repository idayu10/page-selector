import Vue from 'vue'

/**
 * ３桁ごとカンマ区切り
 */
Vue.filter('commaSepareted', (value: string | number) => {
  let num = (typeof value === 'string') ? parseFloat(value) : value
  if (Number.isNaN(num)) {
    // NaNの場合は元の値を返す
    return value
  }
  const strValue = String(num)
  let natural
  let decimal
  const decimalPoint = strValue.indexOf('.')
  if (decimalPoint > 0) {
    // 小数点あり
    natural = strValue.substr(0, decimalPoint)
    decimal = strValue.substr(decimalPoint)
  } else {
    // 小数点なし
    natural = strValue
    decimal = ''
  }
  return natural.replace(/(\d)(?=(\d{3})+$)/g , '$1,') + decimal
})
