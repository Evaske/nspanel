import { css, html, LitElement } from 'lit';
import { ToggleSwitch } from './toggle-switch';

export class ButtonCard extends LitElement {

  static properties = {
    hass: {},
    room: {},
  };

  constructor() {
    super();
  }

  render() {
    const { room } = this.room;
    this._roomName = room.name;
    this._roomIcon = room.icon;
    this._audioFlowDevice = room.audioFlowDevice;
    this._state = this.hass.states[room.audioFlowDevice].state;
    return html`
      <div class="nspanel-button-card" @click=${() => this.toggleButton()}>
        <div class="header">
          <div class="icon">
            <ha-icon icon=${this._roomIcon}></ha-icon>
          </div>
          <nspanel-toggle-switch active=${this._state === 'on'}></nspanel-toggle-switch>
        </div>
        <div class="footer">
          <span class="room-name">${this._roomName}</span>
          <span class="state">${this._state}</span>
        </div>
      </div>
    `
  }

  toggleButton() {
    this.hass.callService("homeassistant", "toggle", {
      entity_id: this._audioFlowDevice,
    });
  }

  static get styles() {
    return css`
      .nspanel-button-card {
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        box-sizing: border-box;
        color: var(--nspanel-content-primary);
        display: flex;
        flex-direction: column;
        font-size: var(--nspanel-font-regular);
        height: 102px;
        justify-content: space-between;
        padding: 12px;
        -webkit-tap-highlight-color: transparent;

        &:hover {
          cursor: pointer;
        }
      }

      .header {
        display: flex;
        justify-content: space-between;

        .icon {
          align-items: center;
          background: var(--nspanel-surface-tertiary);
          border-radius: 50%;
          color: var(--nspanel-content-secondary);
          display: flex;
          height: 36px;
          justify-content: center;
          width: 36px;
        }
      }

      .footer {
        display: flex;
        justify-content: space-between;

        .room-name {
          font-weight: var(--nspanel-font-weight-semiBold);
        }

        .state {
          text-transform: capitalize;
        }
      }
    `;
  }
}

customElements.define('nspanel-button-card', ButtonCard);
