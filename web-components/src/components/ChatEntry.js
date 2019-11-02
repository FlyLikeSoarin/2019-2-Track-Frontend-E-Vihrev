const noIconUserImg = require('../icons/no-icon-user.png');
const doubleCheck = require('../icons/double-check.png');

const template = document.createElement('template');
template.innerHTML = `
<style>
  .chat-box {
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 25px;
    padding-bottom: 1.8em;
    padding-left: 0.5em;
    height: 0.5em;
    padding-top: 0.5em;
    transition: 0.2s;
  }

  .chat-box:hover {
    color: white;
    background-color: #8E24AA52;
    transition: 0.2s;
  }

  .chat {
    display: flex;
    flex-direction: row;
    margin-right: 1em;
  }

  .icon {
    position: relative;
    top: -0.36em;
    height: 2.5em;
    weight: 2.5em;
  }

  .text-container {
    margin-left: 0.3em;
    margin-top: 0.3em;
    flex-grow: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .row-one {
      height: 0px;
      display: flex;
      flex-direction: row;
      align-self: stretch;
      padding-bottom: 1em;
  }

  .row-two {
    height: 0px;
    display: flex;
    flex-direction: row;
    align-self: stretch;
    color: grey;
    padding-bottom: 1.5em;
    font-size: 15px;
    border: 0.2vh;
    border-bottom-color: #A5A5A5;
    border-bottom-style: solid;
  }

  .name {
    flex-grow: 1;
    align-self: stretch;
    /* color: black; */
    height: 1em;
    padding: 0vh;
    border: 0vh;
    margin: 0vh;
    font-size: 25px;
  }

  .last-message {
    flex-grow: 1;
  }

  .time {
    font-size: 15px;
    color: grey;
  }
  .state {
    position: relative;
    height: 1.6em;
    weight: 1.6em;
  }
</style>

<div class="chat-box">
  <div class="chat">
    <img class="icon">
    <div class="text-container">
      <div class="row-one">
        <div class="name"></div>
        <div class="time"></div>
      </div>
      <div class="row-two">
        <div class="last-message"></div>
        <img class="state">
    </div>
  </div>
</div>
`;

class ChatEntry extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$icon = this.shadowRoot.querySelector('.icon');
    this.$name = this.shadowRoot.querySelector('.name');
    this.$lastMessage = this.shadowRoot.querySelector('.last-message');
    this.$stateIcon = this.shadowRoot.querySelector('.state');
    this.$time = this.shadowRoot.querySelector('.time');

    this.$stateIcon.src = doubleCheck;

    this.name = null;
    this.listCallback = null;
    this.addEventListener('click', this.onClick.bind(this));
  }

  setChatProps(name, lastMessage, time, icon, displayName) {
    this.name = name;
    this.id = this.name;
    this.$name.innerHTML = displayName;

    let lastMessageText = lastMessage.slice(0, 50 + lastMessage.slice(50, 1000).search(' '));
    if (lastMessageText.length < lastMessage.length) {
      lastMessageText += '...';
    }
    this.$lastMessage.innerHTML = lastMessageText;

    this.$time.innerHTML = time;
    if (icon == null) {
      this.$icon.src = noIconUserImg;
    }
  }

  isNameEquel(name) {
    return name === this.name;
  }

  setClickCallback(callback) {
    this.listCallback = callback;
  }

  onClick() {
    if (this.listCallback != null) {
      this.listCallback(this.name, this.$icon.src, this.$name.innerHTML);
    }
  }
}

customElements.define('chat-entry', ChatEntry);
