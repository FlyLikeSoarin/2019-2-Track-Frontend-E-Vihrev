const template = document.createElement('template');
template.innerHTML = `
<style>
  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  chat-header {

  }

  .main-block {
    height: 10%;
    flex-grow: 1;
  }

  message-form {
    display: none;
    height: 100%;
  }

  chat-list {
    height: 100%;
  }
</style>

<div class="app">
  <chat-header></chat-header>
  <div class="main-block">
    <chat-list></chat-list>
    <message-form action="/"></message-form>
  </div>
</div>
`;

class ChatApplication extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$header = this.shadowRoot.querySelector('chat-header');
    this.$chatList = this.shadowRoot.querySelector('chat-list');
    this.$messageForm = this.shadowRoot.querySelector('message-form');

    this.$header.setApplicationCallback(this.headerEventListener.bind(this));
    this.$chatList.setApplicationCallback(this.chatListEventListener.bind(this));
    // this.$messageForm.setApplicationCallback(this.messageFormEventListener.bind(this));
  }

  chatListEventListener(type, contents) {
    if (type === 'load-chat-and-switch') {
      this.$messageForm.load(contents);
      this.$chatList.style.display = 'none';
      this.$messageForm.style.display = 'block';

      this.$header.setDialogState(contents);
    }
  }

  // messageFormEventListener(type, contents) {
  //
  // }

  headerEventListener(type, contents) {
    if (type === 'back') {
      this.$chatList.updateChats();
      this.$messageForm.style.display = 'none';
      this.$chatList.style.display = 'block';

      this.$header.setChatListState(contents);
    }
  }
}

customElements.define('chat-application', ChatApplication);
