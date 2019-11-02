const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }

        .body {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        input[type=submit] {
            visibility: collapse;
        }

        messages-display {
          flex-basis: 10vh;
          flex-grow: 1;
          height: 100%;
          display: contents;
        }
    </style>
    <div class='body'>
      <messages-display></messages-display>
      <form>
        <form-input name="message-text" placeholder="Message..."></form-input>
      </form>
    <div>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$message = this.shadowRoot.querySelector('.result');
    this.$body = this.shadowRoot.querySelector('.body');
    this.$attachedDisplay = this.shadowRoot.querySelector('messages-display');

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));

    this.applicationCallback = null;
  }

  setApplicationCallback(callback) {
    this.applicationCallback = callback;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value !== '') {
      const message = { name: '', datestamp: '', text: '' };
      message.text = this.$input.value;
      message.name = 'me';
      message.datestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      });
      this.$input.reset();
      this.$attachedDisplay.addMessage(message);
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  load(name) {
    this.$attachedDisplay.clearDisplay();
    this.$attachedDisplay.loadMessages(name);
    this.$attachedDisplay.scrollDown();
  }
}

customElements.define('message-form', MessageForm);
