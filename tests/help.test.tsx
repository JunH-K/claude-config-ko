import type { ConfigRow } from 'claude-code'
import { expect, test } from 'claude-code/testing'

import { valueText } from '../hooks/help'

const PROVIDER = { plugin: 'engine', tier: 'core' } as const
const ROWS: ConfigRow[] = [
  {
    key: 'autoCompact', label: '자동 압축 (Auto-compact)', description: '대화가 길어지면 줄인다',
    kind: 'boolean', value: true, provider: PROVIDER, isLocked: false,
  },
  {
    key: 'theme', label: '테마 (Theme)', description: undefined,
    kind: 'choice', value: 'dark', options: ['dark', 'light'], provider: PROVIDER, isLocked: true,
  },
]

const PANE = {
  plugin: 'config-ko',
  component: 'Pane',
  requestId: 'config-ko',
  props: {
    title: '설정 도움말',
    isFocused: false,
    bodyColumns: 60,
    placement: 'dock',
    scroll: { offset: 0, bodyRows: 40 },
    view: {},
  },
} as const

test('값 글자: 켬/끔은 한국어, 나머지는 저장 값 그대로', () => {
  expect(valueText(true)).toBe('켬')
  expect(valueText(false)).toBe('끔')
  expect(valueText('acceptEdits')).toBe('acceptEdits')
  expect(valueText(3)).toBe('3')
  expect(valueText('')).toBe('(없음)')
  expect(valueText(['a', 'b'])).toBe('a, b')
})

test('도움말 창은 줄마다 이름·값·설명을 보인다, 모든 화면에서 (R-9)', async ($, on) => {
  on('config.list', () => ({ value: ROWS }))

  for (const surface of ['terminal', 'desktop'] as const) {
    const ui = await $.ui.mount({ ...PANE, surface })

    expect(await ui.find({ type: 'Text', text: /자동 압축 \(Auto-compact\)/ })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /켬/ })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /대화가 길어지면 줄인다/ })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /잠김/ })).toBeDefined()
    await ui.unmount()
  }
})

test('/config-ko는 대화형 세션에서만 등록되고, 창을 연다 (R-9)', async ($, on) => {
  const registered: string[] = []
  const opened: string[] = []
  on('command.register', (_, e) => {
    registered.push(e.name)
    return { value: { command: e.name } }
  })
  on('ui.open', (_, e) => {
    opened.push(e.id)
    return { value: { isPlaced: true } }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: '/', surface: null, isInteractive: false })
  expect(registered).toEqual([])

  await $.session.start({ cwd: '/', surface: 'terminal', isInteractive: true })
  expect(registered).toEqual(['config-ko'])

  const ran = await $.command.run({
    command: 'config-ko',
    args: '',
    origin: { kind: 'composer' },
    presentation: { isFullscreen: true, columns: 200 },
  })
  expect(opened).toEqual(['config-ko'])
  expect(ran.text).toContain('설정 도움말 창을 열었다')
})
