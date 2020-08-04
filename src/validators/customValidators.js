export function dateFormat(val) {
  const format = /^[\d]{2}.[\d]{2}.[\d]{4}$/.test(val)
  const day = Number(val.slice(0,2))
  const month = Number(val.slice(3,5))
  const year = Number(val.slice(6,10))
  let days = 0

  const monthStatus = month > 0 && month <= 12
  const yearStatus = year > 1899 && year <= new Date().getFullYear()

  if (monthStatus && yearStatus) {days = new Date(year, month, 0).getDate()}

  const dayStatus = day > 0 && day <= days

  return format && dayStatus
}

export function phoneFormat(val) {
  return /^7\s[\d]{3}\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(val)
}

export function indexFormat(val) {
  return /^([\d]{6})*$/.test(val)
}

export function namingFormat(val) {
  return /^([^\-\s]{2}[A-zА-яЁё\-\s]*)*$/.test(val)
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