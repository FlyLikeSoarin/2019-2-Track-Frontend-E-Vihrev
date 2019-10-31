const newChatImg = require('../icons/new-chat.png');

const template = document.createElement('template');
template.innerHTML = `
<style>
  .new-chat {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    margin: 15px;
  }

  .input {
    transition: 1s;

    display: flex;
    align-self: start;
    margin: 0.7em;
    border: 0.2em;
    border-left: 0.3em;
    border-right: 0.3em;
    border-style: solid;
    border-color: black;
    width: 0em;
  }

  .input.selected {
    transition: 1s;
    right: 0em !important;
    width: 15em !important;
  }

  form-input {
    transition: 1s;
    width: 0em;
    border-color: black;
  }

  form-input.selected {
    transition: 1s;
    width: 15em !important;
  }

  .icon {
    height:70px;
    position: relative;
    right: -2em;
    transition: 1s;
    border-radius: 50%;
    background: #cca92c;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(142, 36, 170, 0.5);
  }

  .icon:hover {
    animation: pulse 2s infinite;
  }

  .icon.selected {
    transition: 1s;
    transform: rotate(-180deg);
    right: 0em !important;
  }

  img {
    position: relative;
    right: 0px;
    height: 70px;
    weight: 70px;
  }

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(142, 36, 170, 0.5);
      box-shadow: 0 0 0 0 rgba(142, 36, 170, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 25px rgba(142, 36, 170, 0);
        box-shadow: 0 0 0 25px rgba(142, 36, 170, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(142, 36, 170, 0);
        box-shadow: 0 0 0 0 rgba(142, 36, 170, 0);
    }
  }
</style>

<div class="new-chat">
    <div class="icon">
      <img alt="New chat">
    </div>
    <div class="input">
      <form-input name="message-text" placeholder="Recipient..."></form-input>
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

    this.$icon = this.shadowRoot.querySelector('.icon');
    this.$input = this.shadowRoot.querySelector('.input');
    this.$form = this.shadowRoot.querySelector('form-input');

    //this.$input.style.display = 'none';

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
    this.$form.addEventListener('focusout', this.onFocusOut.bind(this));

    this.newChatCallback = null;
  }

  setNewChatCallback(callback) {
    this.newChatCallback = callback;
  }

  Activate() {
    this.$form.reset();
    //this.$input.style.display = 'flex';
    this.$form.focusOn();
    this.$input.classList.add('selected');
    this.$form.classList.add('selected');
    this.$icon.classList.add('selected');
  }

  Deactivate() {
    this.$form.reset();
    //this.$input.style.display = 'none';
    this.$input.classList.remove('selected');
    this.$form.classList.remove('selected');
    this.$icon.classList.remove('selected');
  }

  onClick() {
    this.Activate();
  }

  onSubmit() {
    this.newChatCallback(this.$form.value);
    this.Deactivate()
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  onFocusOut() {
    this.Deactivate()
  }
}

customElements.define('new-chat-button', NewChatButton);
