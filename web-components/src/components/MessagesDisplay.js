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
    this.messages.count = parseInt(this.messages.count, 10) + 1;
    this.messages.data.push(message);
    this.storage.setItem('Messages', JSON.stringify(this.messages));
  }

  loadMessages() {
    const state = this.storage.getItem('Is_initialized');
    if (state == null) {
      this.storage.setItem('Is_initialized', 'True');
      this.messages = { count: 0, data: [] };
      this.storage.setItem('Messages', JSON.stringify(this.messages));
    } else if (state === 'True') {
      if (this.storage.getItem('Messages_count')) {
        // This block is needed to clear old cache
        this.storage.clear();
        this.loadMessages();
        return;
      }
      this.messages = JSON.parse(this.storage.getItem('Messages'));
      console.log(this.messages);
      for (let i = 0; i < this.messages.data.length; i += 1) {
        const message = this.messages.data[i];
        console.log('message loaded:');
        console.log(message);
        this.renderMessage(message);
      }
    }
  }
}

customElements.define('messages-display', MessagesDisplay);
