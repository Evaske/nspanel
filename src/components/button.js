import { css, html, LitElement } from 'lit';

export class Button extends LitElement {

  static properties = {
    room: {},
    hass: {},
  };

  render() {
    const { room } = this.room;
    this._roomName = room.name;
    this._icon = room.icon;
    this._iconColour = room.iconColour;
    this._audioFlowDevice = room.audioFlowDevice;
    return html`
      <div class="nspanel-button" @click=${this.toggleButton}>
        <div class="header">
          <div class="room-name">${this._roomName}</div>
          <div class="icon" style="background: #${this._iconColour}; opacity: ${this.hass.states[this._audioFlowDevice].state === "on" ? 1 : 0.5};">
            <ha-icon icon=${this._icon} fontSize="10px"></ha-icon>
          </div>
        </div>
        <div class="state">${this.hass.states[this._audioFlowDevice].state}</div>
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
      .nspanel-button {
        align-items: space-between;
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        box-sizing: border-box;
        color: var(--nspanel-content-primary);
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        height: 100px;
        padding: 12px;
        -webkit-tap-highlight-color: transparent;

        &:hover {
          cursor: pointer;
        }
      }

      .header {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .room-name {
        font-size: 12px;
        font-weight: var(--nspanel-font-bold);
      }

      .state {
        font-weight: var(--nspanel-font-light);
        font-size: 32px;
        text-transform: capitalize;
      }

      .icon {
        align-items: center;
        border-radius: 50%;
        color: var(--nspanel-content-secondary);
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
        --mdc-icon-size: 1.3rem;
      }
    `;
  }
}

customElements.define('nspanel-button', Button);