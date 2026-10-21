import type { ConfigValue } from 'claude-code'

// 도움말 창에 보일 지금 값. 켬/끔은 한국어로, 나머지는 /config에 저장되는 값 그대로 둔다(R-3).
export const valueText = (value: ConfigValue): string => {
  if (typeof value === 'boolean') return value ? '켬' : '끔'
  if (Array.isArray(value)) return value.length === 0 ? '(없음)' : value.join(', ')
  const text = String(value)

  return text === '' ? '(없음)' : text
}
