const template = document.createElement('template');
template.innerHTML = `
    <style>
        .scroll-body {
            overflow-y: scroll;
            overflow-x: hidden;
            flex-basis: 10;
            flex-grow: 1;
        }
    </style>
    <div class="scroll-body">
    </div>
`;

class MessagesDisplay extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.storage = window.localStorage;
    this.$scrollBody = this.shadowRoot.querySelector('.scroll-body');
    this.style.display = 'flex';

    this.loadMessages();
  }

  addMessage(message) {
    this.renderMessage(message);
    this.saveMessage(message);
  }

  renderMessage(message) {
    console.log('Message added to message-display');
    console.log(message.text);
    this.$scrollBody.appendChild(document.createElement('message-box'));
    console.log(this.$scrollBody.lastElementChild);
    this.$scrollBody.lastElementChild.setMessage(message);
    this.$scrollBody.scrollTop = this.$scrollBody.scrollHeight;
  }

  saveMessage(message) {
    this.storage.setItem(`Message${this.count.toString()}`, JSON.stringify(message));
    this.count += 1;
    this.storage.setItem('Messages_count', this.count.toString());
  }

  loadMessages() {
    const state = this.storage.getItem('Is_initialized');
    if (state == null) {
      this.storage.setItem('Is_initialized', 'True');
      this.storage.setItem('Messages_count', '0');
    } else if (state === 'True') {
      this.count = +(this.storage.getItem('Messages_count'));
      for (let i = 0; i < this.count; i += 1) {
        const message = JSON.parse(this.storage.getItem(`Message${i.toString()}`));
        console.log('message loaded:');
        console.log(message);
        this.renderMessage(message);
      }
    }
  }
}

customElements.define('messages-display', MessagesDisplay);
