import { css, html, LitElement } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export class MediaControl extends LitElement {

  static properties = {
    hass: {},
    _status: { state: true },
    _repeatStatus: { state: true },
    _shuffleStatus: { state: true },
  };

  constructor() {
    super();
    this._status;
    this._repeatStatus;
    this._shuffleStatus;
  }

  render() {
    this._status = this.hass.states['media_player.amplifier'].state;
    this._repeatStatus = this.hass.states['media_player.amplifier'].attributes.repeat;
    this._shuffleStatus = this.hass.states['media_player.amplifier'].attributes.shuffle;
    return html`
      <div class="nspanel-media-control">
      <ha-icon class="icon icon--small" icon="mdi:${this._shuffleStatus ? 'shuffle-disabled' : 'shuffle'}" @click=${this.toggleShuffle}></ha-icon>
        <ha-icon class="icon" icon="mdi:rewind" @click=${this.previousTrack}></ha-icon>
        <div class="play" @click=${this.togglePlaying}>
          <ha-icon class="icon" icon="mdi:${this._status === 'playing' ? 'pause' : 'play'}"></ha-icon>
        </div>
        <ha-icon class="icon" icon="mdi:fast-forward" @click=${this.nextTrack}></ha-icon>
        <ha-icon class="icon icon--small" icon="${this.getRepeatStatus()}" @click=${this.toggleRepeat}></ha-icon>
      </div>
    `
  }

  getRepeatStatus() {
    if (this._repeatStatus === 'off') {
      return 'mdi:repeat';
    }
    if (this._repeatStatus === 'one') {
      return 'mdi:repeat-once';
    }
    return 'mdi:repeat-off';
  }

  togglePlaying() {
    this.hass.callService("media_player", 'media_play_pause', {
      entity_id: 'media_player.amplifier',
    });
  }

  toggleRepeat() {
    let repeatMode;
    if (this._repeatStatus === 'off') {
      repeatMode = 'one';
    } else if (this._repeatStatus === 'one') {
      repeatMode = 'all';
    } else if (this._repeatStatus === 'all') {
      repeatMode = 'off';
    }
    this.hass.callService("media_player", 'repeat_set', {
      entity_id: 'media_player.amplifier',
      repeat: repeatMode,
    });
  }

  toggleShuffle() {
    this.hass.callService("media_player", 'shuffle_set', {
      entity_id: 'media_player.amplifier',
      shuffle: !this._shuffleStatus,
    });
  }

  previousTrack() {
    this.hass.callService("media_player", 'media_previous_track', {
      entity_id: 'media_player.amplifier',
    });
  }

  nextTrack() {
    this.hass.callService("media_player", 'media_next_track', {
      entity_id: 'media_player.amplifier',
    });
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex: 1;
      }

      .nspanel-media-control {
        align-items: center;
        column-gap: 24px;
        display: flex;
        flex: 1;
        justify-content: center;
      }

      .icon {
        color: var(--nspanel-content-primary);
        --mdc-icon-size: 36px;
      }

      .icon--small {
         --mdc-icon-size: 24px;
      }

      .play {
        align-items: center;
        border: 2px solid var(--nspanel-surface-action);
        border-radius: 50%;
        display: flex;
        height: 48px;
        justify-content: center;
        width: 48px;

        .icon {
          color: var(--nspanel-surface-action);
        }
      }
    `;
  }
}

customElements.define('nspanel-media-control', MediaControl);
