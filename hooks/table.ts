// /config 줄 키 → 한국어 이름과 설명. 키는 엔진 2.1.306 설정 패널의 줄 id다.
// 설명은 엔진 설정 스키마의 .describe() 문구와 패널 코드를 읽고 썼다(docs/PLAN.md 5절).
// 선택지 값은 바꿀 수 없으므로 선택지가 있는 줄은 설명에 값의 뜻을 적는다(R-3).

export type Entry = { ko: string; desc: string }

export const TABLE: Readonly<Record<string, Entry>> = {
  theme: {
    ko: '테마',
    desc: '화면 색. auto=터미널 배경에 맞춤 · dark/light=어둡게/밝게 · daltonized=색각 이상 배려 · ansi=터미널 기본 색',
  },
  remoteControl: {
    ko: '모든 세션에서 원격 제어 켜기',
    desc: '세션마다 원격 제어(휴대폰·웹에서 이 세션 보기·조작)를 자동으로 연다. true=켬 · false=끔 · default=기본값',
  },
  defaultToAgentsView: {
    ko: '에이전트 화면을 기본으로 열기',
    desc: '시작할 때 대화 대신 에이전트(세션) 목록 화면을 먼저 연다',
  },
  leftArrowOpensAgents: {
    ko: '← 키로 에이전트 화면 열기',
    desc: '← 키로 에이전트(세션) 목록 화면을 연다',
  },
  agentsView: {
    ko: '에이전트 화면',
    desc: '에이전트(세션) 목록 화면을 쓰는지 보여 준다. 여기서는 바꿀 수 없다',
  },
  notifChannel: {
    ko: '로컬 알림 방식',
    desc: '입력이 필요하거나 일이 끝났을 때 이 맥에서 알리는 방법. auto=터미널 감지 · terminal_bell=벨 소리 · notifications_disabled=끔',
  },
  inputNeededNotifEnabled: {
    ko: '조치가 필요할 때 푸시',
    desc: '권한 확인이나 질문이 기다리고 있으면 휴대폰으로 푸시 알림을 보낸다',
  },
  agentPushNotifEnabled: {
    ko: 'Claude 판단으로 푸시',
    desc: 'Claude가 필요하다고 판단하면 휴대폰으로 먼저 알림을 보낼 수 있게 한다',
  },
  autoCompact: {
    ko: '자동 압축',
    desc: '대화가 컨텍스트 한도에 가까워지면 앞부분을 요약해 자동으로 줄인다',
  },
  idleCompaction: {
    ko: '쉬는 동안 압축',
    desc: '세션이 쉬고 있을 때 긴 대화를 미리 압축한다. 끄면 쉬는 동안에는 압축하지 않는다',
  },
  precomputeCompactionEnabled: {
    ko: '압축 미리 계산',
    desc: '압축에 쓸 요약을 필요해지기 전에 뒤에서 미리 만든다. 자동 압축이 켜져 있을 때만 쓰인다',
  },
  autoContinueAtUsageLimit: {
    ko: '사용 한도에서 자동으로 계속',
    desc: 'claude.ai 사용 한도에 걸리면 한도가 풀릴 때까지 기다렸다가 작업을 이어 간다. 끄면 기다릴지 묻는다',
  },
  remoteHomeSettings: {
    ko: '클라우드 세션에서 이 맥의 설정 쓰기',
    desc: '클라우드(웹) 세션이 이 컴퓨터의 Claude Code 설정을 넘겨받아 쓴다',
  },
  unattendedServing: {
    ko: '클라우드 세션의 무인 명령 허용',
    desc: '사람이 지켜보지 않을 때도 클라우드 세션이 이 컴퓨터에서 명령을 돌리게 할지 정한다',
  },
  switchModelsOnFlag: {
    ko: '메시지가 걸러지면 모델 바꾸기',
    desc: '안전장치가 메시지를 걸러 내면 다른 모델로 바꿔 대화를 잇는다. Switch automatically=자동 · Ask each time=매번 묻기',
  },
  tips: {
    ko: '팁 보기',
    desc: '작업하는 동안 사용 팁을 보인다',
  },
  feedbackDrafts: {
    ko: 'Claude가 쓴 피드백 초안',
    desc: 'Claude가 피드백 초안을 쌓는 기능. notify=쌓일 때 한 줄 알림 · quiet=아래 숫자만 · off=기능 끔',
  },
  reduceMotion: {
    ko: '움직임 줄이기',
    desc: '스피너 반짝임·깜박임 같은 애니메이션을 줄이거나 끈다',
  },
  thinking: {
    ko: '생각 모드',
    desc: '답하기 전에 모델이 깊게 생각(extended thinking)한다',
  },
  fast: {
    ko: '빠른 모드',
    desc: '같은 모델을 더 빠른 출력으로 쓴다. /fast와 같다',
  },
  promptSuggestionEnabled: {
    ko: '입력 제안',
    desc: '턴이 끝나면 다음에 보낼 만한 글을 입력란에 흐리게 띄운다. Tab으로 받는다',
  },
  recap: {
    ko: '세션 요약',
    desc: '5분 넘게 자리를 비웠다 돌아오면 그동안의 내용을 짧게 요약해 보여 준다',
  },
  checkpoints: {
    ko: '코드 되감기(체크포인트)',
    desc: '파일을 고치기 전 상태를 저장해 /rewind로 코드를 되돌릴 수 있게 한다',
  },
  orgMemoryRead: {
    ko: '동기화된 프로젝트 메모리',
    desc: '이 폴더에 대해 공유되는 프로젝트 메모리를 읽는다. 다음 세션부터 적용',
  },
  orgMemoryWrites: {
    ko: '동기화된 프로젝트 메모리 쓰기',
    desc: '이 폴더의 공유 프로젝트 메모리에 쓰기도 한다. 읽기를 먼저 켜야 한다. 다음 세션부터 적용',
  },
  workflows: {
    ko: '동적 워크플로',
    desc: 'Claude가 여러 에이전트를 묶어 돌리는 워크플로(Workflow 도구)를 쓸 수 있게 한다',
  },
  workflowKeywordTriggerEnabled: {
    ko: 'ultracode 키워드 트리거',
    desc: '요청에 "ultracode"를 넣으면 그 턴을 워크플로(여러 에이전트)로 돌린다',
  },
  workflowSizeGuideline: {
    ko: '동적 워크플로 크기',
    desc: 'Claude가 짜는 워크플로의 권장 크기. small=에이전트 5개 미만 · medium=10개 미만 · large=50개 미만 · unrestricted=안내 없음',
  },
  artifacts: {
    ko: '아티팩트',
    desc: 'Artifact 도구(claude.ai에 페이지 게시)를 켜고 끈다',
  },
  verbose: {
    ko: '자세한 출력',
    desc: '도구 출력을 요약하지 않고 전부 보인다',
  },
  progressBar: {
    ko: '터미널 진행 표시',
    desc: '긴 작업 동안 터미널 탭·제목줄에 진행 표시(OSC 9;4)를 보낸다',
  },
  showStatusInTerminalTab: {
    ko: '터미널 탭에 상태 보이기',
    desc: '터미널 탭 제목에 세션 상태를 보인다',
  },
  turnDuration: {
    ko: '턴 소요 시간 보이기',
    desc: '답이 끝날 때마다 걸린 시간("Cooked for 1m 2s")을 보인다',
  },
  timestamps: {
    ko: '메시지 시각 보이기',
    desc: '메시지마다 도착 시각을 붙인다',
  },
  timeFormat: {
    ko: '시각 형식',
    desc: '화면의 시각 형식. auto=지역 설정 따름 · 12-hour/24-hour · 24-hour-utc=UTC("18:05Z")',
  },
  permissionMode: {
    ko: '기본 권한 모드',
    desc: '세션이 시작할 때의 권한 모드. default=매번 묻기 · plan=계획만 · acceptEdits=파일 수정 자동 허용 · auto=분류기가 판단 · dontAsk=허용 목록 밖은 거절',
  },
  worktreeBaseRef: {
    ko: '워크트리 출발점',
    desc: '새 워크트리를 어디서 딸지. fresh=origin 기본 브랜치에서 깨끗하게 · head=지금 HEAD에서(push 안 한 커밋 포함)',
  },
  useAutoModeDuringPlan: {
    ko: '계획 모드에서 자동 모드 쓰기',
    desc: '자동 모드를 쓸 수 있으면 계획 모드에서도 자동 모드처럼 권한을 판단한다',
  },
  gitignore: {
    ko: '파일 선택기에서 .gitignore 따르기',
    desc: '@로 파일을 고를 때 .gitignore에 걸린 파일을 목록에서 뺀다',
  },
  copyFullResponse: {
    ko: '/copy 고르기 건너뛰기',
    desc: '/copy가 고르는 창 없이 마지막 답 전체를 바로 복사한다',
  },
  copyOnSelect: {
    ko: '선택하면 복사',
    desc: '화면에서 글을 드래그해 고르면 바로 클립보드에 복사한다',
  },
  autoScroll: {
    ko: '자동 스크롤',
    desc: '새 출력이 나오면 화면을 맨 아래로 따라 내린다',
  },
  autoUpdatesChannel: {
    ko: '자동 업데이트 채널',
    desc: '자동 업데이트를 받을 채널. latest=최신 · stable=안정판',
  },
  outputStyle: {
    ko: '출력 스타일',
    desc: '답하는 방식. default=기본 · Explanatory=설명 덧붙임 · Learning=직접 해 보게 함 · Concise=짧게 · Proactive=먼저 나서서',
  },
  defaultView: {
    ko: '기본 보기',
    desc: '대화 화면을 무엇으로 볼지. transcript=전체 기록 · chat=사용자에게 보낸 메시지만 · default=기본값',
  },
  language: {
    ko: '언어',
    desc: 'Claude가 답하고 음성 받아쓰기에 쓸 언어(예: korean)',
  },
  editor: {
    ko: '입력 편집 모드',
    desc: '입력란 키 조작. normal=일반 · vim=vim 키',
  },
  askUserQuestionTimeout: {
    ko: '질문 자동 진행 시간',
    desc: 'Claude가 낸 질문에 답이 없을 때, 그때까지 고른 답으로 자동 진행하기까지 기다리는 시간. never=자동 진행 안 함',
  },
  modelProposedGoals: {
    ko: 'Claude가 제안하는 목표',
    desc: 'Claude가 세션 목표를 제안하는 기능. auto=Claude가 승인 필요 여부를 정함 · alwaysAsk=매번 승인 · disabled=끔',
  },
  externalEditorContext: {
    ko: '외부 편집기에 마지막 답 보이기',
    desc: '외부 편집기나 IDE에서 입력을 쓸 때 Claude의 마지막 답을 함께 보여 준다',
  },
  prStatus: {
    ko: 'PR 상태 표시',
    desc: '지금 브랜치의 PR 상태를 화면 아래에 보인다',
  },
  model: {
    ko: '모델',
    desc: '기본으로 쓸 모델. [1m]=100만 토큰 컨텍스트 · opusplan=계획은 Opus, 실행은 Sonnet',
  },
  diffTool: {
    ko: '변경 비교 도구',
    desc: '변경 내용을 어디서 보여 줄지. terminal=터미널 안 · auto=연결된 IDE가 있으면 IDE',
  },
  autoConnectIde: {
    ko: 'IDE 자동 연결(외부 터미널)',
    desc: 'IDE 밖의 터미널에서 시작해도 열려 있는 IDE에 자동으로 연결한다',
  },
  autoInstallIdeExtension: {
    ko: 'IDE 확장 자동 설치',
    desc: 'IDE 안에서 실행하면 Claude Code 확장을 자동으로 설치한다',
  },
  chrome: {
    ko: 'Claude in Chrome 기본 켜기',
    desc: '세션을 Chrome 브라우저 조작 도구가 켜진 채로 시작한다',
  },
  teammateMode: {
    ko: '팀원 실행 방식',
    desc: '에이전트 팀의 팀원을 어디서 돌릴지. auto=자동 · tmux/iterm2=창을 나눠서 · in-process=이 세션 안에서',
  },
  dialogExpiry: {
    ko: '대화상자 만료',
    desc: '원격(휴대폰·웹)으로 넘긴 권한·질문 창이 답을 기다리는 최대 시간. 지나면 안전하게 취소된다. never=기한 없음',
  },
  crossSessionInbound: {
    ko: '다른 세션에서 온 메시지',
    desc: '내 다른 세션이 보낸 메시지를 받는 방법. accept=받음 · hold=보관 후 검토 · refuse=거절 · default=권한 모드가 같을 때만 자동',
  },
  showExternalIncludesDialog: {
    ko: '외부 CLAUDE.md 포함',
    desc: '프로젝트 밖 파일을 불러오는 CLAUDE.md include를 허용했는지 보여 준다',
  },
}

type Row = { label: string; description?: string; isHidden: boolean }

// 엔진이 소유한 줄만 바꾼다. 표에 없거나 다른 플러그인의 줄은 그대로 둔다(R-4).
// 괄호 안 영어는 엔진이 그 순간 준 이름을 쓴다(R-1).
export const relabel = <R extends Row>(key: string, isEngine: boolean, base: R): R => {
  const entry = isEngine ? TABLE[key] : undefined
  if (entry === undefined || base.label.startsWith(`${entry.ko} (`)) return base

  return {
    ...base,
    label: `${entry.ko} (${base.label})`,
    description: base.description ?? entry.desc,
  }
}
