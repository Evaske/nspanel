import { css, html, LitElement } from 'lit';

export class TrackInfo extends LitElement {

  static properties = {
    hass: {},
  };

  render() {
    const { state, attributes } = this.hass.states['media_player.amplifier'];
    return html`
      <div class="nspanel-track-info">
        <img src=${attributes.entity_picture} />
        <div class="track-info">
          <div class="title">${attributes.media_title}</div>
          <div class="artist">${attributes.media_artist}</div>
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      .nspanel-track-info {
        color: var(--nspanel-content-primary);
        column-gap: 16px;
        display: flex;

        img {
          border-radius: 8px;
          height: 108px;
          margin-top: -30px;
          width: 108px;
        }
      }

      .track-info {
        display: flex;
        flex: 1;
        flex-direction: column;

        .title {
          font-weight: var(--nspanel-font-weight-semiBold);
          margin: 16px 0 4px 0;
          max-width: 308px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

      }
    `;
  }
}

customElements.define('nspanel-track-info', TrackInfo);
