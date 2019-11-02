const template = document.createElement('template');
template.style.display = 'flex';
template.innerHTML = `
<style>
  .message-box {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  @keyframes fadein {
    from { opacity: 0; margin-right: 10%; margin-left: 10%; }
    to   { opacity: 1; margin-right: 0%;  margin-left: 0%;  }
  }

  .outgoing {
    background-color: #F3E5F5;
  }

  .width-holder {
    max-width: 80%;
    overflow-wrap: break-word;
    /* background-color: blue; */
    /* display: flex; */
    /* flex-direction: column; */

    animation: fadein 0.6s;
  }

  .message {
    position: relative;
    right: 0px;
    /* flex-shrink: 1; */
    /* align-self: flex-end; */
    margin: 0.15em;
    border: 0.05em;
    padding: 0.15em;
    padding-left: 0.3em;
    padding-right: 0.3em;
    border-style: solid;
    border-color: ;
    display: flex;
    flex-direction: column;
  }

  .message-text {
    word-wrap: word-brake;
    margin: 0.1em;
  }

  .message-date {
      text-align: right;
      color: grey;
      font-size: 0.75em;
  }

  .message-name {
    align-self: flex-start;
    display: none;
    color: grey;
    font-size: 0.75em;
  }
</style>

<div class="message-box">
  <div class="width-holder">
    <div class="message-box">
      <div class="message">
        <div class="message-name"></div>
        <div class="message-text"></div>
        <div class="message-date"></div>
      </div>
    </div>
  </div>
</div>
`;

class MessageBox extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$outerBox = this.shadowRoot.querySelector('.message-box');
    this.$messageElement = this.shadowRoot.querySelector('.message');
    this.$widthHolder = this.shadowRoot.querySelector('.width-holder');


    this.name;
    this.$name = this.shadowRoot.querySelector('.message-name');
    this.$message = this.shadowRoot.querySelector('.message-text');
    this.$date = this.shadowRoot.querySelector('.message-date');
  }

  setMessage(message) {
    this.$message.innerHTML = message.text;
    this.$date.innerHTML = message.datestamp;
    this.$name.innerHTML = message.name;
    this.name = message.name;

    if (this.name == 'me') {
      this.$messageElement.classList.add('outgoing');
      this.$widthHolder.style.alignSelf = 'flex-end';
    }

    console.log(this.$outerBox);
    this.$outerBox.classList.add('appearence');
  }
}

customElements.define('message-box', MessageBox);
