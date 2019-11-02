const template = document.createElement('template');
template.innerHTML = `
    <style>
        .scroll-body {
            overflow-y: scroll;
            overflow-x: hidden;
            flex-basis: 10px;
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
    this.localCache = window.localStorage;
    this.$scrollBody = this.shadowRoot.querySelector('.scroll-body');
  }

  addMessage(message) {
    this.renderMessage(message);
    this.saveMessage(message);
  }

  renderMessage(message) {
    this.$scrollBody.appendChild(document.createElement('message-box'));
    this.$scrollBody.lastElementChild.setMessage(message);
    this.scrollDown();
  }

  scrollDown() {
    this.$scrollBody.scrollTop = this.$scrollBody.scrollHeight;
    console.log('scrolled');
  }

  saveMessage(message) {
    this.localCache.chats[this.name].messages.push(message);
    this.storage.setItem('Chat_local_cache', JSON.stringify(this.localCache));
  }

  clearDisplay() {
    while (this.$scrollBody.children.length > 0) {
      this.$scrollBody.removeChild(this.$scrollBody.lastElementChild);
    }
  }

  loadMessages(name) {
    this.name = name;
    this.localCache = JSON.parse(this.storage.getItem('Chat_local_cache'));
    for (let i = 0; i < this.localCache.chats[this.name].messages.length; i += 1) {
      const message = this.localCache.chats[this.name].messages[i];
      this.renderMessage(message);
    }
    var sd = this.scrollDown.bind(this);
    setTimeout(function(){sd()}, 100);
  }
}

customElements.define('messages-display', MessagesDisplay);
