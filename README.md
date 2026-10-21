# config-ko

Claude Code의 `/config` 설정 메뉴를 한국어로 읽게 해 주는 모드(Claude Code 확장)다.

*A Claude Code mod that relabels the `/config` settings menu in Korean (`자동 압축 (Auto-compact)`) and adds a `/config-ko` pane with a Korean description of every setting.*

## 하는 일

- **메뉴 줄 이름을 `한국어 (English)`로** 바꾼다. 예: `Auto-compact` → `자동 압축 (Auto-compact)`, `Worktree base ref` → `워크트리 출발점 (Worktree base ref)`. 영어 원문을 남겨 두므로 문서를 찾거나 `/config key=value`를 칠 때 헷갈리지 않는다. 메뉴 검색은 한국어(`압축`)와 영어(`worktree`) 둘 다 된다.
- **`/config-ko`** 를 치면 옆 창(설정 도움말)에 줄마다 이름, 지금 값, 한국어 설명을 보인다. 선택지가 있는 줄은 값마다 뜻을 적어 두었다(예: `fresh=origin 기본 브랜치에서 깨끗하게 · head=지금 HEAD에서`). `/config`에서 값을 바꾸면 창도 바로 바뀐다. 창은 명령을 칠 때만 열린다.
- 설정 값, 키, 동작은 하나도 바꾸지 않는다. 보이는 이름과 설명만 바꾼다.

```
/config                                              /config-ko (옆 창)
❯ 자동 압축 (Auto-compact)              true          자동 압축 (Auto-compact)  켬
  쉬는 동안 압축 (Idle compaction)      true          대화가 컨텍스트 한도에 가까워지면 앞부분을 요약해 자동으로 줄인다
  팁 보기 (Show tips)                   true
  워크트리 출발점 (Worktree base ref)   fresh         워크트리 출발점 (Worktree base ref)  fresh
                                                      새 워크트리를 어디서 딸지. fresh=origin 기본 브랜치에서 깨끗하게 · …
```

## 안 되는 것

- **`/config` 메뉴 안에는 설명 줄을 넣을 수 없다.** 터미널 메뉴가 기본 설정 줄의 설명을 그리지 않고, 메뉴를 그리는 훅도 없다(엔진 2.1.306에서 확인). 이름 뒤에 설명을 덧붙이면 좁은 터미널에서 값이 잘려 보이지 않아서 쓰지 않는다. 설명은 `/config-ko` 창에서 본다.
- 메뉴 제목, 탭, 안내 문구와 선택지 값(`dark`, `acceptEdits` 등)은 바꿀 수 없다.
- Claude Code 업데이트로 새로 생긴 줄은 표에 넣기 전까지 영어로 보인다. 다른 플러그인이 더한 줄도 그대로 둔다.

## 요구 사항

- Claude Code **2.1.306** 이상, 터미널 세션. 모드 API는 early access라 버전에 따라 달라질 수 있다.

## 설치

터미널에서 연 Claude Code 세션의 입력란에:

```
/plugin install config-ko --marketplace JunH-K/claude-config-ko
```

마켓플레이스를 추가할지 물으면 `y`, 범위는 **user**를 고른다. 그 세션부터 바로 켜지고 이후 새 세션에도 켜진다. 설치하기 전부터 열려 있던 다른 세션에서는 `/reload-plugins`를 친다.

셸에서:

```bash
claude plugin marketplace add JunH-K/claude-config-ko
claude plugin install config-ko@claude-config-ko
```

`claude plugin list`에 `config-ko@claude-config-ko`가 `enabled`로 보이면 된 것이다.

## 업데이트

```bash
claude plugin update config-ko@claude-config-ko
```

열려 있는 세션에는 `/reload-plugins`.

## 끄기와 지우기

```bash
claude plugin disable config-ko@claude-config-ko
claude plugin uninstall config-ko@claude-config-ko
```

## 개발

- 요구사항: `docs/PRD.md`, 구조·확인 방법·표 늘리는 법: `docs/PLAN.md`
- 확인: `claude plugin validate .` · `claude plugin test .` · `tsc -p .`

## License

MIT
