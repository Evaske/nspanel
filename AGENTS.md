# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Lit 3 custom card for Home Assistant, bundled by Parcel (`npm run build` → `dist/card.js`; config in `package.json` `targets`). Entry `src/index.js` → `src/card.js` → `src/components/*.js`; shared `:host` tokens in `src/styles/variables.styles.js`.
- The source was reconstructed (Sep 2026) from a recovered build; the only reference is the read-only bundle at `firstmate/data/nspanel-recovery/card.built.js`. Until the captain moves on, `cmp dist/card.js <that file>` is the regression check.
- Parcel derives every `$<hash>$` identifier in the bundle from the project-relative file path and the export name. Renaming or moving a source file changes the bundle text (harmless at runtime, but it breaks the byte-identity check above).
- Children receive `hass`, `room` and `active` as plain attribute bindings (`hass=${this.hass}`, `room=${room}`, `active=${bool}`), not property bindings (`.hass=`, `.room=`, `?active=`). This looks wrong, and a plain-page test outside Home Assistant says it should fail (children get the string `"[object Object]"`), but the recovered bundle was copied off the live panel and works there. Do NOT "correct" these bindings without evidence from the panel itself; it is the single most likely way to break a working card.
- Known defects are deliberately preserved from the recovered build (`getTime` AM/PM, inverted shuffle/repeat icons, tab buttons that only `console.log`); see the recovery PR for the list. Do not "fix" them in passing without the captain's decision.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
