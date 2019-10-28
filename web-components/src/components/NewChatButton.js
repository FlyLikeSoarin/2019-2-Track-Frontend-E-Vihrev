const newChatImg = require('../icons/new-chat.png');

const template = document.createElement('template');
template.innerHTML = `
<style>
  .new-chat {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    margin: 10px;
  }

  .input {
    display: none;
    align-self: start;
    margin: 0.5em;
    border: 0.2em;
    border-left: 0.5em;
    border-right: 0.5em;
    border-radius: 0.5em;
    border-style: solid;
    border-color: black;
  }

  img {
    height: 70px;
    weight: 70px;
  }
</style>

<div class="new-chat">
    <img alt="New chat">
    <div class="input">
      <form class="recipient-form">
        <form-input name="message-text" placeholder="Recipient..."></form-input>
      </form>
    </div>
</div>
`;

class NewChatButton extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));


    this.$img = this.shadowRoot.querySelector('img');
    this.$img.src = newChatImg;
    this.$img.addEventListener('click', this.onClick.bind(this));

    this.$input = this.shadowRoot.querySelector('.input');
    this.$form = this.shadowRoot.querySelector('form-input');

    this.$input.style.display = 'none';

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));

    this.newChatCallback = null;
  }

  setNewChatCallback(callback) {
    this.newChatCallback = callback;
  }

  onClick() {
    if (this.$input.style.display === 'none') {
      this.$form.reset();
      this.$form.focusOn();
      this.$input.style.display = 'initial';
    } else {
      this.$input.style.display = 'none';
    }
  }

  onSubmit() {
    this.newChatCallback(this.$form.value);

    this.$form.reset();
    this.$input.style.display = 'none';
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('new-chat-button', NewChatButton);
