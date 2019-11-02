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
  }

  .icon-title {
    padding-left: 1em;
    height: 1.3em;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .button-icon {
    position: relative;
    left: 0.6em;
    height: 1em;
    weigth: 1em;
  }

  .search-icon {
      position: relative;
      right: 0.6em;
      height: 1em;
      weigth: 1em;
  }

  .user-icon {
      position: relative;
      flex-basis: 1.1em;
      padding-right: 0.3em;
      top: 0.1em;
      height: 1.1em;
      weigth: 1.1em;
  }

  .button-hover {
    margin: 0.05em;
    padding: 0.10em;
    border-radius: 50%;
    transition: 0.3s;
  }

  .button-hover:hover {
    background: #FFFFFF55;
    transition: 0.3s;
  }

</style>

<div class="header">
    <div class="button">
      <img class="button-icon button-hover">
    </div>
    <div class="icon-title">
      <img class="user-icon">
      <div class="title">
        Messenger
      </div>
    </div>
    <div class="button">
      <img class="search-icon button-hover">
    </div>
</div>
`;

class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$title = this.shadowRoot.querySelector('.title');
    this.$img = this.shadowRoot.querySelector('.button-icon');
    this.$userIcon = this.shadowRoot.querySelector('.user-icon');
    this.$searchImg = this.shadowRoot.querySelector('.search-icon');

    this.$img.src = menuImg;
    this.$img.alt = 'Menu';
    this.$img.addEventListener('click', this.onClick.bind(this));

    this.$searchImg.src = searchImg;
    this.$searchImg.alt = 'Search';

    this.state = 'chat-list';
    this.$userIcon.style.display = "none";
    this.applicationCallback = null;
  }

  setChatListState() {
    this.$title.innerHTML = 'Messanger';
    this.state = 'chat-list';
    this.$img.src = menuImg;
    this.$img.alt = 'Menu';
    this.$userIcon.style.display = "none";
  }

  setDialogState(name, icon) {
    this.$title.innerHTML = name;
    this.state = 'dialog';
    this.$img.src = backImg;
    this.$img.alt = 'Go back';

    this.$userIcon.src = icon;
    this.$userIcon.style.display = "block";
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
