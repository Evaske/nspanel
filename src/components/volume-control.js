import { css, html, LitElement } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export class VolumeControl extends LitElement {

  static properties = {
    hass: {},
    _volume: { state: true },
  };

  constructor() {
    super();
    this._volume = 0;
  }

  get _progressBar() {
    return this.renderRoot?.querySelector('.track-wrapper') ?? null;
  }

  render() {
    this._volume = this.hass.states['media_player.amplifier'].attributes.volume_level;
    return html`
      <div class="nspanel-volume-control">
        <ha-icon class="icon" icon="mdi:volume-low" @click=${(e) => this.handleChangeVolume(e, 0)}></ha-icon>
        <div class="track-wrapper" @click=${(e) => this.handleChangeVolume(e)}>
          <div class="track-inner" style=${this.progressBarStyle()}></div>
          <div class="track-handle" style=${this.handleBarStyle()}></div>
        </div>
        <ha-icon class="icon" icon="mdi:volume-high" @click=${(e) => this.handleChangeVolume(e, 1)}></ha-icon>
      </div>
    `
  }

  progressBarStyle() {
    return styleMap({
      width: `${this._volume * 100}%`,
    });
  }

  handleBarStyle() {
    if (this._volume === 0 || this._volume === 1) {
      return styleMap({ display: 'none' });
    }
    return styleMap({
      left: `calc(${this._volume * 100}% - 3px)`,
    });
  }

  handleChangeVolume(e, volume) {
    const progressWidth = this._progressBar.offsetWidth;
    const percent = e.offsetX / progressWidth;
    this.hass.callService("media_player", "volume_set", {
      entity_id: 'media_player.amplifier',
      volume_level: volume !== undefined ? volume : percent,
    });
  }

  static get styles() {
    return css`
      .nspanel-volume-control {
        align-items: center;
        column-gap: 24px;
        display: flex;
      }

      .icon {
        color: var(--nspanel-content-primary);
      }

      .track-wrapper {
        background: var(--nspanel-surface-secondary);
        border-radius: 5px;
        height: 16px;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      .track-inner {
        background: var(--nspanel-surface-action);
        height: 16px;
        left: 0;
        position: absolute;
        top: 0;
      }

      .track-handle {
        background: var(--nspanel-content-action);
        height: 16px;
        position: absolute;
        width: 6px;
      }
    `;
  }
}

customElements.define('nspanel-volume-control', VolumeControl);
