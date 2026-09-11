import { css } from 'lit';

export default css`
  :host {
    --nspanel-surface-primary: #292f36;
    --nspanel-surface-secondary: #343b43;
    --nspanel-surface-tertiary: #626d7a;
    --nspanel-surface-action: #fe844b;
    --nspanel-surface-actionOverlay: #ffffff;
    --nspanel-surface-special: #2d343c;

    --nspanel-content-primary: #ffffff;
    --nspanel-content-secondary: #dfe3e8;
    --nspanel-content-tertiary: #a3adb8;
    --nspanel-content-action: #ffffff;
    --nspanel-content-actionHover: #ffffff;
    --nspanel-content-positive: #4ccf8a;
    --nspanel-content-negative: #f25f5c;

    --nspanel-font-weight-regular: 400;
    --nspanel-font-weight-medium: 500;
    --nspanel-font-weight-semiBold: 600;

    --nspanel-font-large: 20px;
    --nspanel-font-regular: 14px;
    --nspanel-font-small: 12px;
    --nspanel-font-xsmall: 10px;

    font-family: "Geist", sans-serif;
    font-size: var(--nspanel-font-regular);
    font-weight: var(--nspanel-font-regular);

    line-height: normal;
  }
`;
