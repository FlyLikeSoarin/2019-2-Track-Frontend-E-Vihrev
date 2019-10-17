const template = document.createElement('template');
template.style.display = 'flex';
template.innerHTML = `
<style>
  .message-box {
    display: flex;
    flex-direction: column;
  }

  .message {
    background-color: lightblue;
    align-self: flex-end;
    margin: 0.5vh;
    border: 1vh;
    border-radius: 1vh;
    border-style: solid;
    border-color: lightblue;
    display: flex;
    flex-direction: column;
  }

  .message-text {
    font-size: 3vh;
    margin: 0.3vh;
  }

  .message-date {
      align-self: flex-end;
      color: grey;
      font-size: 2vh;
  }
</style>

<div class="message-box">
  <div class="message">
    <div class="message-text">

    </div>
    <div class="message-date">

    </div>
  </div>
</div>
`;

class MessageBox extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$message = this.shadowRoot.querySelector('.message-text');
    this.$date = this.shadowRoot.querySelector('.message-date');
    this.$sender = null;
  }

  setMessage(message) {
    this.$message.innerHTML = message.text;
    this.$date.innerHTML = message.datestamp;
  }
}

customElements.define('message-box', MessageBox);
