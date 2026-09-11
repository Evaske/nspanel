import { css, html, LitElement } from 'lit';
import variables from './styles/variables.styles';
import { Button } from './components/button';
import { ButtonCard } from './components/button-card';
import { TrackInfo } from './components/track-info';
import { TrackPositionSlider } from './components/track-position-slider';
import { VolumeControl } from './components/volume-control';
import { MediaControl } from './components/media-control';

export class Card extends LitElement {
  static get properties() {
    return {
      hass: { attribute: false },
      config: { attribute: false },
      activeTab: { attribute: false },
    };
  }

  constructor() {
    super();
    this.activeTab = 'music';
  }

  render() {
    return html`
      <div class="nspanel-card">
        <div class="top-section">
          <div class="header">
            <div class="time">${this.getTime(this.hass.states['sensor.time'].state)}</div>
            <div class="tabs">
              <nspanel-button text="Music" active=${this.activeTab === 'music'} icon="speaker"></nspanel-button>
              <nspanel-button text="Lights" icon="lightbulb" active=${this.activeTab === 'lights'}></nspanel-button>
            </div>
          </div>
          <div class="button-card-grid">
            ${this.config.rooms.map((room) => {
              return html`
                <nspanel-button-card
                  hass=${this.hass}
                  room=${room}
                ></nspanel-button-card>
              `
            })}
          </div>
        </div>
        <div class="bottom-section">
          <nspanel-track-info hass=${this.hass}></nspanel-track-info>
          <nspanel-media-control hass=${this.hass}></nspanel-media-control>
          <nspanel-volume-control hass=${this.hass}></nspanel-volume-control>
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
    const [hours, minutes] = time.split(":");
    const period = hours < 12 ? " AM" : " PM";
    return `${hours}:${(minutes.length === 1 ? '0' : '') + minutes} ${period}`;
  }

  setConfig(config) {
    this.config = config
  }

  static styles = [
    variables,
    css`
      .nspanel-card {
        background: linear-gradient(
          180deg,
          var(--nspanel-surface-primary) 0%,
          var(--nspanel-surface-primary) 50%,
          var(--nspanel-surface-special) 50%,
          var(--nspanel-surface-primary) 100%
        );
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        padding: 24px;
      }

      .header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .tabs {
          column-gap: 12px;
          display: flex;
        }
      }

      .time {
        color: var(--nspanel-content-primary);
        font-size: var(--nspanel-font-large);
        font-weight: var(--nspanel-font-weight-medium);
      }

      .button-card-grid {
        display: grid;
        column-gap: 24px;
        grid-template-columns: 1fr 1fr;
        margin-top: 24px;
      }

      .top-section,
      .bottom-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
      }
    `,
  ];
}
