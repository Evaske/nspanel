import { css, html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class ToggleSwitch extends LitElement {

  static properties = {
    active: {},
  };

  render() {
    const classes = {
      active: this.active,
      'nspanel-toggle-switch': true,
    };
    return html`
      <div class=${classMap(classes)}></div>
    `
  }

  static get styles() {
    return css`
      .nspanel-toggle-switch {
        background: var(--nspanel-surface-tertiary);
        border-radius: 999px;
        height: 24px;
        position: relative;
        transition: background-color 250ms linear;
        width: 40px;

        &:before {
          content: '';
          background: var(--nspanel-surface-secondary);
          border-radius: 50%;
          height: 16px;
          left: 4px;
          position: absolute;
          top: 4px;
          transition: background-color 250ms linear;
          transition: left 250ms linear;
          width: 16px;
        }

        &.active {
          background: var(--nspanel-surface-action);

          &:before {
            background: var(--nspanel-surface-actionOverlay);
            left: 20px;
          }
        }
      }
    `;
  }
}

customElements.define('nspanel-toggle-switch', ToggleSwitch);
