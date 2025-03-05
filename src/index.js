import { Card } from './card';

function loadCSS(url) {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

loadCSS("https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap");

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'nspanel-card',
  name: 'NSPanel Card',
  description: 'NSPanel display for the garden/kitchen',
  preview: true,
});

customElements.define('nspanel-card', Card);