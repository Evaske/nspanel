# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Lit 3 custom card for Home Assistant, bundled by Parcel (`npm run build` → `dist/card.js`; config in `package.json` `targets`). Entry `src/index.js` → `src/card.js` → `src/components/*.js`; shared `:host` tokens in `src/styles/variables.styles.js`.
- `dist/card.js` is committed on purpose: it is the installable artefact (the captain pastes it into Home Assistant by hand). Rebuild and commit it in the same change as any `src` edit, or the repo ships a card that does not match its source.
- The source was reconstructed (Sep 2026) from a recovered build. The read-only reference bundle lives in the sibling firstmate checkout at `~/Documents/Development/firstmate/data/nspanel-recovery/card.built.js`. The build matched it byte-for-byte until the Water tab change (Sep 2026) deliberately diverged; it is history now, not a regression check.
- Parcel derives every `$<hash>$` identifier in the bundle from the project-relative file path and the export name, and emits one line per import statement, so renames, moves and import edits all change the bundle text (harmless at runtime). `src/components/media-control.js` keeps an unused `styleMap` import for that reason; drop it only as its own deliberate change, not inside a feature.
- Children receive `hass`, `room` and `active` as plain attribute bindings (`hass=${this.hass}`, `room=${room}`, `active=${bool}`), not property bindings (`.hass=`, `.room=`, `?active=`). This looks wrong, and a plain-page test outside Home Assistant says it should fail (children get the string `"[object Object]"`), but the recovered bundle was copied off the live panel and works there. Do NOT "correct" these bindings without evidence from the panel itself; it is the single most likely way to break a working card. Tab clicks reach the card as native `click` events on the `nspanel-button` host, which does not depend on this question.
- `nspanel-card` owns `activeTab` (`music` | `water`); it swaps the `nspanel-button-card` grid contents and the whole bottom section. Water entities are hardcoded in `src/card.js` (the two switches) and `src/components/water-status.js` (sensors), the same way the music screen hardcodes `media_player.amplifier`; rooms come from card config.
- Known defects are deliberately preserved from the recovered build (`getTime` AM/PM, inverted shuffle/repeat icons); see the recovery PR (#1) for the list. Do not "fix" them in passing without the captain's decision.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
