const template = document.createElement('template');
template.innerHTML = `
    <style>
        .scroll-body {}

        new-chat-button {
          position: absolute;
          right: 0px;
          bottom: 0px;
        }
    </style>
    <div style="display: block; height: 100%; overflow-y: scroll;">
      <div class="scroll-body"></div>
    </div>
    <div style="position: relative; display: block">
      <new-chat-button></new-chat-button>
    </div>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.storage = window.localStorage;
    this.$scrollBody = this.shadowRoot.querySelector('.scroll-body');
    this.loadChatList();

    this.$newChat = this.shadowRoot.querySelector('new-chat-button');
    this.$newChat.setNewChatCallback(this.addChat.bind(this));

    this.applicationCallback = null;
    this.updateQueue = [];
  }

  setApplicationCallback(callback) {
    this.applicationCallback = callback;
  }

  addChat(name) {
    const chatData = { name, messages: [], icon: null };
    this.renderChat(chatData);
    this.saveNewChat(chatData);
  }

  renderChat(chatData) {
    let lastMessage = { text: 'No messages...', datestamp: '' };
    if (chatData.messages.length > 0) {
      lastMessage = chatData.messages[chatData.messages.length - 1];
    }
    this.$scrollBody.appendChild(document.createElement('chat-entry'));
    this.$scrollBody.lastElementChild.setChatProps(
      chatData.name,
      lastMessage.text,
      lastMessage.datestamp,
      null,
    );
    this.$scrollBody.lastElementChild.setClickCallback(this.onChatSelection.bind(this));
  }

  updateChats() {
    this.localCache = JSON.parse(this.storage.getItem('Chat_local_cache'));

    for (let i = 0; i < this.updateQueue.length; i += 1) {
      const name = this.updateQueue[i];
      const children = this.$scrollBody.querySelector(`#${name}`);
      let lastMessage = 'No messages...';
      if (this.localCache.chats[name].messages.length > 0) {
        lastMessage = this.localCache.chats[name].messages[
          this.localCache.chats[name].messages.length - 1
        ];
      }
      children.setChatProps(name, lastMessage.text, lastMessage.datestamp, null);
    }
    this.updateQueue = [];
  }

  saveNewChat(chatData) {
    this.localCache.chats[chatData.name] = chatData;
    this.storage.setItem('Chat_local_cache', JSON.stringify(this.localCache));
  }

  onChatSelection(name) {
    this.updateQueue.push(name);
    this.applicationCallback('load-chat-and-switch', name);
  }

  loadChatList() {
    this.localCache = this.storage.getItem('Chat_local_cache');
    if (this.localCache == null) {
      this.localCache = { chats: {} };
      this.storage.setItem('Chat_local_cache', JSON.stringify(this.localCache));
    } else {
      this.localCache = JSON.parse(this.storage.getItem('Chat_local_cache'));
      Object.values(this.localCache.chats).forEach(this.renderChat.bind(this));
    }
  }
}

customElements.define('chat-list', ChatList);
