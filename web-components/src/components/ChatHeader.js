const backImg = require('../icons/back.png');
const menuImg = require('../icons/menu.png');
const searchImg = require('../icons/search-icon.png');

const template = document.createElement('template');
template.style.display = 'flex';
template.innerHTML = `
<style>
  .header {
    background-color: #8E24AA;
    font-weight: bold;
    color: white;
    font-size: 40px;
    height: 1.3em;
    display: flex;
    flex-direction: row;
  }

  .title {
    padding-top: 0.4em;
    padding-left: 1em;
    flex-grow: 1;
  }

  .icon {
    position: relative;
    top: 0.1em;
    left: 0.6em;
    height: 1em;
    weigth: 1em;
  }

  .search {
      position: relative;
      top: 0.1em;
      right: 0.6em;
      height: 1em;
      weigth: 1em;
  }

</style>

<div class="header">
    <div class="button">
      <img class="icon">
    </div>
    <div class="title">
      Messenger
    </div>
    <img class="search">
</div>
`;

class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$title = this.shadowRoot.querySelector('.title');
    this.$img = this.shadowRoot.querySelector('.icon');
    this.$searchImg = this.shadowRoot.querySelector('.search');

    this.$img.src = menuImg;
    this.$img.alt = 'Menu';
    this.$img.addEventListener('click', this.onClick.bind(this));

    this.$searchImg.src = searchImg;
    this.$searchImg.alt = 'Search';

    this.state = 'chat-list';
    this.applicationCallback = null;
  }

  setChatListState() {
    this.$title.innerHTML = 'Messanger';
    this.state = 'chat-list';
    this.$img.src = menuImg;
    this.$img.alt = 'Menu';
  }

  setDialogState(name) {
    this.$title.innerHTML = name;
    this.state = 'dialog';
    this.$img.src = backImg;
    this.$img.alt = 'Go back';
  }

  setApplicationCallback(callback) {
    this.applicationCallback = callback;
  }

  onClick() {
    if (this.state === 'dialog') {
      this.applicationCallback('back', null);
    }
  }
}

customElements.define('chat-header', ChatHeader);
