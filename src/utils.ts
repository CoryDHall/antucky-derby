export function timeFormat(time?: number) {
  if (typeof time === 'undefined') return ''
  return new Date(time).toLocaleTimeString()
}
