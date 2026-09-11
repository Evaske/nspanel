import { css, html, LitElement } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export class TrackPositionSlider extends LitElement {

  static properties = {
    hass: {},
    _playingProgress: { state: true },
    _playerState: { state: true },
    _mediaPositionUpdatedAt: { state: true },
    _mediaPosition: { state: true },
  };

  constructor() {
    super();
    this._playerState;
    this._playingProgress;
    this._mediaDuration;
    this._mediaPositionUpdatedAt;
    this._mediaPosition;
    this._tracker;
  }

  get _progressBar() {
    return this.renderRoot?.querySelector('.track-wrapper') ?? null;
  }

  disconnectedCallback() {
    if (this._tracker) {
      clearInterval(this._tracker);
      this._tracker = undefined;
    }
    super.disconnectedCallback();
  }

  render() {
    const { state, attributes } = this.hass.states['media_player.amplifier'];
    this._mediaDuration = attributes.media_duration;
    this._mediaPositionUpdatedAt = attributes.media_position_updated_at;
    this._mediaPosition = attributes.media_position;
    this._playerState = state;
    this.trackProgress();
    return html`
      <div class="nspanel-track-position-slider">
        <div class="times">
          <div class="start">${this.convertProgress(this._playingProgress)}</div>
          <div class="end">-${this.convertProgress(this._mediaDuration - this._playingProgress)}</div>
        </div>
        <div class="track-wrapper" @click=${this.handleSeek}>
          <div class="track-inner" style=${this.progressBarStyle(this._mediaDuration)}></div>
          <div class="track-handle" style=${this.handleBarStyle(this._mediaDuration)}></div>
        </div>
      </div>
    `
  }

  progressBarStyle() {
    return styleMap({
      width: `${(this._playingProgress / this._mediaDuration) * 100}%`,
    });
  }

  handleBarStyle() {
    return styleMap({
      left: `${(this._playingProgress / this._mediaDuration) * 100}%`,
    });
  }

  trackProgress() {
    const position = this._mediaPosition || 0;
    const playing = this._playerState === 'playing';
    const updatedAt = this._mediaPositionUpdatedAt || 0;

    if (playing) {
      this._playingProgress = position + (Date.now() - new Date(updatedAt).getTime()) / 1000.0;
    } else {
      this._playingProgress = position;
    }

    if (!this._tracker) {
      this._tracker = setInterval(() => this.trackProgress(), 1000);
    }

    if (!playing) {
      clearInterval(this._tracker);
      this._tracker = undefined;
    }
  }

  handleSeek(e) {
    const progressWidth = this._progressBar.offsetWidth;
    const percent = e.offsetX / progressWidth;
    const position = this._mediaDuration * percent;
    this.hass.callService("media_player", "media_seek", {
      entity_id: 'media_player.amplifier',
      seek_position: position,
    });
  }

  convertProgress = (duration) => {
    const date = new Date(duration * 1000).toISOString().substring(11, 19);
    return date.startsWith('00:') ? date.substring(3) : date;
  }

  static get styles() {
    return css`
      .nspanel-track-position-slider {
        margin-top: 12px;
      }

      .times {
        color: var(--nspanel-content-primary);
        display: flex;
        font-size: var(--nspanel-font-xsmall);
        justify-content: space-between;
        margin-bottom: 8px;
      }
      
      .track-wrapper {
        background: var(--nspanel-surface-secondary);
        border-radius: 4px;
        height: 2px;
        position: relative;
        width: 100%;
      }

      .track-inner {
        background: var(--nspanel-surface-action);
        height: 2px;
        left: 0;
        position: absolute;
        top: 0;
      }

      .track-handle {
        background: var(--nspanel-content-action);
        border-radius: 50%;
        height: 12px;
        position: absolute;
        top: -5px;
        width: 12px;
      }
    `;
  }
}

customElements.define('nspanel-track-position-slider', TrackPositionSlider);
