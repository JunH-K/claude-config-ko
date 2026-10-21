import { expect, test } from 'claude-code/testing'

import { TABLE, relabel } from '../hooks/table'
import { SEEN_ROWS } from './fixture'

const row = (label: string, description?: string) => ({ label, description, isHidden: false })

test('엔진 줄은 "한국어 (영어)" 이름과 한국어 설명을 받는다 (R-1, R-2)', () => {
  const out = relabel('autoCompact', true, row('Auto-compact'))

  expect(out.label).toBe('자동 압축 (Auto-compact)')
  expect(out.description).toBe(TABLE.autoCompact?.desc)
  expect(out.isHidden).toBe(false)
})

test('괄호 안은 엔진이 그 순간 준 이름이다 (R-1)', () => {
  const out = relabel('teammateMode', true, row('Teammate mode [overridden: tmux]'))

  expect(out.label).toBe('팀원 실행 방식 (Teammate mode [overridden: tmux])')
})

test('엔진이 준 설명은 그대로 둔다 (R-2)', () => {
  expect(relabel('model', true, row('Model', 'engine help')).description).toBe('engine help')
})

test('표에 없는 줄과 다른 플러그인의 줄은 손대지 않는다 (R-4)', () => {
  const unknown = row('Brand new setting')
  const plugin = row('파일을 여는 편집기', 'turn-panel help')

  expect(relabel('brandNewSetting', true, unknown)).toBe(unknown)
  expect(relabel('theme', false, plugin)).toBe(plugin)
})

test('숨김 여부는 그대로 둔다 (R-5)', () => {
  expect(relabel('tips', true, { label: 'Show tips', isHidden: true }).isHidden).toBe(true)
})

test('두 번 거쳐도 이름을 두 번 붙이지 않는다', () => {
  const once = relabel('theme', true, row('Theme'))

  expect(relabel('theme', true, once).label).toBe('테마 (Theme)')
})

test('집 맥에서 실제로 보인 줄은 모두 표에 있다', () => {
  const missing = SEEN_ROWS.filter(([key]) => TABLE[key] === undefined).map(([key]) => key)

  expect(missing).toEqual([])
})

test('표의 이름과 설명은 비어 있지 않고 한 줄이다', () => {
  for (const [key, entry] of Object.entries(TABLE)) {
    expect([key, entry.ko.trim().length > 0, entry.desc.trim().length > 0]).toEqual([key, true, true])
    expect([key, /\n/.test(entry.ko + entry.desc)]).toEqual([key, false])
  }
})
