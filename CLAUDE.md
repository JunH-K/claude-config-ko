# claude-config-ko

Claude Code의 `/config` 메뉴 줄 이름을 `한국어 (English)`로 바꾸고, `/config-ko` 창에 줄마다 한국어 설명을 보이는 모드(플러그인 이름 `config-ko`)다. 이 폴더가 곧 모드 폴더다.

## 문서

- `docs/PRD.md` — 요구사항(R-N), 결정 사항, 범위 밖, 확인된 사실
- `docs/PLAN.md` — 구조, 단계, 확인 방법(tmux 주의점 포함), 새 엔진 버전이 나왔을 때 표를 늘리는 법

## 작업 규칙

- 문서를 먼저 고치고 코드를 쓴다. PRD → PLAN → 코드 순서다.
- 모드 코드를 쓰기 전에 `plugin-authoring` 스킬을 불러온다.
- 고친 뒤 `claude plugin validate .`, `claude plugin test .`, `tsc -p .`를 돌리고, 화면이 바뀌면 `claude --plugin-dir .`로 실제 세션에서 본다.
- 번역 표(`hooks/table.ts`)의 설명은 엔진 설정 스키마의 `.describe()` 문구나 패널 코드로 확인한 것만 쓴다.
- `/config` 메뉴 안에 설명을 넣는 안은 2026-10-21 사용자가 쓰지 않기로 했다(PRD 4절). 다시 꺼내지 않는다.
- 커밋 작성자는 `JunH-K`다(레포 안 `git config`에 고정). push는 그때마다 사용자에게 묻는다.
