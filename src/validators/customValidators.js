export function lettersRusEng(val) {
  return (/^[A-zА-яЁё]*$/.test(val)) ? true : false
}

export function dateFormat(val) {
  return (/^[\d]{2}.[\d]{2}.[\d]{4}$/.test(val)) ? true : false
}

export function phoneFormat(val) {
  return (/^7\s[\d]{3}\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(val)) ? true : false
}

export function indexFormat(val) {
  return (/^([\d]{6})*$/.test(val)) ? true : false
}

export function namingFormat(val) {
  return (/^[A-zА-яЁё\-]*$/.test(val)) ? true : false
}

export function houseFormat(val) {
  return (/^([\d])*$/.test(val)) ? true : false
}

export function seriesFormat(val) {
  return (/^([\d]{2}\s[\d]{2})?$/.test(val)) ? true : false
}

export function numberFormat(val) {
  return (/^([\d]{3}\-[\d]{3})?$/.test(val)) ? true : false
}