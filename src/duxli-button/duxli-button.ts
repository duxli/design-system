/**
 *
 */
class DuxliButton extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define('duxli-button', DuxliButton, { extends: 'button' });
