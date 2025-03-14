import { css, html, LitElement } from 'lit';
import { Button } from './components/button';

export class Card extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
    };
  }
  render() {
    return html`
      <div class="nspanel-card">
        <div class="time">${this.getTime(this.hass.states['sensor.time'].state)}</div>
        <div class="grid">
          ${this.config.rooms.map((room) => {  
            return html`
              <nspanel-button hass=${this.hass} room=${room}></nspanel-button>
            `
          })}
        </div>
      </div>
    `
  }

  /**
   * Convert a time string of the form "HH:MM" to a human-readable
   * 24-hour time with AM/PM indicator.
   * @param {string} time - Time string in 24-hour format
   * @returns {string} Time string in 24-hour format with AM/PM
   */
  getTime(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours < 12 ? " AM" : " PM";
    return `${hours % 12 || 12}:${minutes} ${period}`;
  }

  setConfig(config) {
    this.config = config
  }

  static get styles() {
    return css`
      :host {
        --nspanel-surface-primary: #292F36;
        --nspanel-surface-secondary: #394048;
        --nspanel-surface-action: #FFFFFF;
        --nspanl-surface-actionHover: #ECFFB3;

        --nspanel-content-primary: #FFFFFF;
        --nspanel-content-secondary: #292F36;

        --nspanel-font-light: 300;
        --nspanel-font-normal: 400;
        --nspanel-font-medium: 500;
        --nspanel-font-bold: 600;

        background: var(--nspanel-surface-primary);
        box-sizing: border-box;
        display: flex;
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        height: 100%;
        line-height: normal;
        margin: 0 auto;
        padding: 24px;
        width: 100%;
      }

      .nspanel-card {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
      }

      .time {
        color: var(--nspanel-content-primary);
        font-size: 14px;
        font-weight: var(--nspanel-font-medium);
        margin-bottom: 24px;
      }
      
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 24px;
      }
    `;
  }
}