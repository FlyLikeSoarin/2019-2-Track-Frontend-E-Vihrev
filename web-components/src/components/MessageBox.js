const template = document.createElement('template');
template.style.display = 'flex';
template.innerHTML = `
<style>
  .message-box {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  .message {
    background-color: lightblue;
    align-self: flex-end;
    margin: 0.05em;
    border: 0.2em;
    border-left: 0.5em;
    border-right: 0.5em;
    border-radius: 0.5em;
    border-style: solid;
    border-color: lightblue;
    display: flex;
    flex-direction: column;
  }

  .message-text {
    margin: 0.1em;
  }

  .message-date {
      align-self: flex-end;
      color: grey;
      font-size: 0.75em;
  }

  .message-name {
    align-self: flex-start;
    color: grey;
    font-size: 0.75em;
  }
</style>

<div class="message-box">
  <div class="message">
    <div class="message-name"></div>
    <div class="message-text"></div>
    <div class="message-date"></div>
  </div>
</div>
`;

class MessageBox extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$name = this.shadowRoot.querySelector('.message-name');
    this.$message = this.shadowRoot.querySelector('.message-text');
    this.$date = this.shadowRoot.querySelector('.message-date');
  }

  setMessage(message) {
    this.$message.innerHTML = message.text;
    this.$date.innerHTML = message.datestamp;
    this.$name.innerHTML = message.name;
  }
}

customElements.define('message-box', MessageBox);
