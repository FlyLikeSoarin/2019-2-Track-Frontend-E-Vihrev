const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            font-size: 20px;
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
    </style>
    <input type="text">
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  reset() {
    this.$input.value = '';
  }

  focusOn() {
    // this.$input.setSelectionRange(0, 0);
    this.$input.focus();
  }
}

customElements.define('form-input', FormInput);
