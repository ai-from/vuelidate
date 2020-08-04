export function lettersRusEng(val) {
  return /^[A-zА-яЁё]*$/.test(val)
}

export function dateFormat(val) {
  return /^[\d]{2}.[\d]{2}.[\d]{4}$/.test(val)
}

export function phoneFormat(val) {
  return /^7\s[\d]{3}\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(val)
}

export function indexFormat(val) {
  return /^([\d]{6})*$/.test(val)
}

export function namingFormat(val) {
  return /^[A-zА-яЁё\-]*$/.test(val)
}

export function houseFormat(val) {
  return /^([\d])*$/.test(val)
}

export function seriesFormat(val) {
  return /^([\d]{2}\s[\d]{2})?$/.test(val)
}

export function numberFormat(val) {
  return /^([\d]{3}-[\d]{3})?$/.test(val)
}