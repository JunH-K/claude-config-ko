import type { Register } from 'claude-code'
import { valueText } from './help'
import { relabel } from './table'

const PANE = 'config-ko'
const TITLE = '설정 도움말'

export const register: Register = on => {
  on('config.describe', async (_, e, next) =>
    relabel(e.key, e.provider.plugin === 'engine', await next(e)),
  )

  on('session.start', async ($, e, next) => {
    if (e.isInteractive) {
      await $.command.register({
        name: 'config-ko',
        description: '/config 설정 줄마다 한국어 설명과 지금 값을 옆 창에 보인다',
      })
    }

    return next(e)
  })

  on('command.run', { command: 'config-ko' }, async $ => {
    const { isPlaced } = await $.ui.open({ id: PANE, title: TITLE })

    return {
      text: isPlaced
        ? '설정 도움말 창을 열었다. 값은 /config에서 바꾼다.'
        : '설정 도움말 창을 놓을 자리가 없다. 터미널을 넓히면 열린다.',
    }
  })

  // 값이 바뀌면 창의 값을 다시 그린다(R-9). 바꾸는 일 자체에는 끼어들지 않는다.
  on('config.set', async ($, e, next) => {
    const result = await next(e)
    $.ui.invalidate('ui.render')

    return result
  }).catch((_, e, next) => next(e))

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const rows = await $.config.list()

    return (
      <Box flexDirection="column">
        {rows.map(row => (
          <Box flexDirection="column" marginBottom={1}>
            <Text>
              <Text bold>{row.label}</Text>
              <Text color="suggestion">{`  ${valueText(row.value)}`}</Text>
              {row.isLocked && <Text dimColor>  (잠김)</Text>}
            </Text>
            {row.description !== undefined && <Text dimColor>{row.description}</Text>}
          </Box>
        ))}
      </Box>
    )
  })
}
