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
    this._entity = room.entity ?? room.audioFlowDevice;
    this._state = this.hass.states[this._entity].state;
    return html`
      <div
        class="nspanel-button-card"
        @click=${() => this.toggleButton()}
        @pointerdown=${() => this.startHold()}
        @pointerup=${() => this.endHold()}
        @pointercancel=${() => this.endHold()}
        @contextmenu=${(e) => e.preventDefault()}
      >
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
    if (this._held) {
      return;
    }
    this.hass.callService("homeassistant", "toggle", {
      entity_id: this._entity,
    });
  }

  // Hold for 500 ms opens Home Assistant's more-info dialog instead of toggling.
  startHold() {
    this._held = false;
    this._holdTimer = setTimeout(() => {
      this._held = true;
      this.dispatchEvent(new CustomEvent('hass-more-info', {
        detail: { entityId: this._entity },
        bubbles: true,
        composed: true,
      }));
    }, 500);
  }

  endHold() {
    clearTimeout(this._holdTimer);
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
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;

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
