const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }

        .result {
            color: red;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Message..."></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$message = this.shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));

    this.attachedDisplay = null;
  }

  attachDisplay(display) {
    this.attachedDisplay = display;
  }

  onSubmit(event) {
    event.preventDefault();
    const message = { name: '', datastamp: '', text: '' };
    message.text = this.$input.value;
    message.name = 'sender';
    message.datastamp = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
    this.$input.reset();

    if (this.attachedDisplay == null) {
      console.log('No attached display!');
    } else {
      this.attachedDisplay.addMessage(message);
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
