import { css, html, LitElement } from 'lit';

const NO_DATA = ['unknown', 'unavailable', 'none'];
const VALVE_OK = ['normal', '0', 'none', 'off', 'ok'];

const hasData = (entity) => entity && !NO_DATA.includes(String(entity.state).toLowerCase());

export class WaterStatus extends LitElement {

  static properties = {
    hass: {},
  };

  render() {
    const meter = this.hass.states['sensor.water_timer_real_time_irrigation_volume'];
    const battery = Number(this.hass.states['sensor.water_timer_battery']?.state);
    const valve = String(this.hass.states['sensor.water_timer_valve_abnormal_state']?.state);
    const valveOk = VALVE_OK.includes(valve.toLowerCase());
    const updateAvailable = this.hass.states['update.water_timer']?.state === 'on';
    return html`
      <div class="nspanel-water-status">
        <div class="details">
          ${[1, 2].map((n) => this.renderDetails(n))}
        </div>
        <div class="meter">
          <div class="icon">
            <ha-icon icon="mdi:water-circle"></ha-icon>
          </div>
          ${hasData(meter)
            ? `${meter.state} ${meter.attributes.unit_of_measurement ?? 'L'} accumulated`
            : 'No meter data'}
        </div>
        <div class="chips">
          <span class="chip chip--${this.batteryStatus(battery)}">
            <ha-icon icon="mdi:${this.batteryIcon(battery)}"></ha-icon>
            ${Number.isFinite(battery) ? `${battery}%` : '--'}
          </span>
          <span class="chip chip--${valveOk ? 'ok' : 'alert'}">
            <ha-icon icon="mdi:${valveOk ? 'check-circle' : 'alert-circle'}"></ha-icon>
            ${valveOk ? 'Valves OK' : valve}
          </span>
          ${updateAvailable ? html`
            <span class="chip chip--warn">
              <ha-icon icon="mdi:update"></ha-icon>
              Update available
            </span>
          ` : ''}
        </div>
      </div>
    `
  }

  // Amount and runtime lines for water timer `n`, laid out under its card.
  renderDetails(n) {
    const on = this.hass.states[`switch.water_timer_${n}`]?.state === 'on';
    const schedule = this.hass.states[`sensor.water_timer_irrigation_schedule_status_${n}`];
    const runtime = this.hass.states[`sensor.water_timer_real_time_irrigation_duration_${n}`];
    const amount = this.irrigationAmount(schedule);
    return html`
      <div class="detail">
        <div>${schedule && on ? 'Current' : 'Last run'}: ${amount === undefined ? '--' : `${amount} L`}</div>
        <div>Runtime: ${hasData(runtime) ? `${runtime.state}${runtime.attributes.unit_of_measurement ?? ''}` : '--'}</div>
      </div>
    `
  }

  // The attribute is not always populated, so fall back to scraping the state string.
  irrigationAmount(schedule) {
    if (!schedule) {
      return undefined;
    }
    return schedule.attributes.actual_irrigation_amount
      ?? String(schedule.state || '').match(/actual_irrigation_amount['"]?\s*:\s*(\d+(?:\.\d+)?)/)?.[1];
  }

  batteryIcon(level) {
    if (level >= 90) return 'battery';
    if (level >= 70) return 'battery-80';
    if (level >= 50) return 'battery-60';
    if (level >= 30) return 'battery-40';
    if (level >= 10) return 'battery-20';
    return 'battery-alert';
  }

  batteryStatus(level) {
    if (level >= 40) return 'ok';
    if (level >= 20) return 'warn';
    return 'alert';
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex: 1;
      }

      .nspanel-water-status {
        color: var(--nspanel-content-primary);
        display: flex;
        flex: 1;
        flex-direction: column;
      }

      .details {
        column-gap: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        line-height: 1.5;
        /* Sit 24px under the cards, like the artwork on the music screen. */
        margin-top: -30px;
      }

      .meter {
        align-items: center;
        column-gap: 16px;
        display: flex;
        flex: 1;
        font-size: var(--nspanel-font-large);
        font-weight: var(--nspanel-font-weight-medium);

        .icon {
          align-items: center;
          border: 2px solid var(--nspanel-surface-action);
          border-radius: 50%;
          color: var(--nspanel-surface-action);
          display: flex;
          height: 48px;
          justify-content: center;
          width: 48px;
          --mdc-icon-size: 28px;
        }
      }

      .chips {
        column-gap: 12px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 8px;
      }

      .chip {
        align-items: center;
        background: var(--nspanel-surface-secondary);
        border-radius: 8px;
        column-gap: 7px;
        display: inline-flex;
        font-size: var(--nspanel-font-small);
        font-weight: var(--nspanel-font-weight-semiBold);
        height: 28px;
        padding: 0 12px;
        --mdc-icon-size: 18px;

        &.chip--ok ha-icon {
          color: var(--nspanel-content-positive);
        }

        &.chip--warn ha-icon {
          color: var(--nspanel-surface-action);
        }

        &.chip--alert ha-icon {
          color: var(--nspanel-content-negative);
        }
      }
    `;
  }
}

customElements.define('nspanel-water-status', WaterStatus);
