import { css, html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class Button extends LitElement {

  static properties = {
    active: {},
    text: {},
    icon: {},
  };

  constructor() {
    super();
    this.active = false;
    this.text = 'Button Text';
    this.icon = '';
  }

  render() {
    const classes = {
      active: this.active,
      'nspanel-button': true,
    };
    return html`
      <div class=${classMap(classes)}>
        ${this.icon ? html`<ha-icon icon="mdi:${this.icon}"></ha-icon>` : ''}
        ${this.text}
      </div>
    `
  }

  static get styles() {
    return css`
      .nspanel-button {
        align-items: center;
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        color: var(--nspanel-content-action);
        column-gap: 7px;
        display: flex;
        font-size: var(--nspanel-font-small);
        font-weight: var(--nspanel-font-weight-semiBold);
        height: 36px;
        justify-content: center;
        padding: 0 12px;
        white-space: nowrap;
        --mdc-icon-size: 18px;
        -webkit-tap-highlight-color: transparent;

        &.active {
          background: var(--nspanel-surface-action);
        }

        @media (hover: hover) {
          &:hover {
            background: var(--nspanel-surface-action);
            cursor: pointer;
          }
        }

        &:active {
          background: var(--nspanel-surface-action);
        }
      }
    `;
  }
}

customElements.define('nspanel-button', Button);
