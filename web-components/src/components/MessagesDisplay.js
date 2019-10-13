const template = document.createElement('template');
template.style.display = "flex";
template.innerHTML = `
    <style>
        .scroll-body {
            overflow-y: scroll;
            overflow-x: hidden;
            flex-basis: 10;
            flex-grow: 1;
            text-align: right;
        }

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

        .data-text {
            align-self: flex-end;
            color: grey;
            font-size: 2vh;
        }
    </style>
    <div class="scroll-body">
    </div>
`;

class MessagesDisplay extends HTMLElement {
    constructor () {
        super();
        // this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.appendChild(template.content.cloneNode(true));

        this.storage = window.localStorage;
        this.$scrollBody = this.querySelector('.scroll-body');
        this.style.display = "flex";

        this._loadMessages();
    }

    addMessage(message) {
        this._renderMessage(message);
        this._saveMessage(message);
    }

    _renderMessage(message) {
        console.log("Message added to message-display");
        console.log(message.text);
        this.$scrollBody.appendChild(document.createElement('div'));
        this.$scrollBody.lastElementChild.classList.add('message-box');
        this.$scrollBody.lastElementChild.innerHTML =
            '<div class="message"><div class="message-text">'
            + message.text +
            '</div><div class="data-text">'
            + message.datastamp +
            '</div></div>';
        this.$scrollBody.scrollTop = this.$scrollBody.scrollHeight;
    }

    _saveMessage(message) {
        this.storage.setItem("Message" + this.count.toString(), JSON.stringify(message));
        this.count += 1;
        this.storage.setItem("Messages_count", this.count.toString());

    }

    _loadMessages() {
        var state = this.storage.getItem("Is_initialized");
        if (state == null) {
            this.storage.setItem("Is_initialized", "True");
            this.storage.setItem("Messages_count", "0");
        } else if (state == "True") {
            this.count = +(this.storage.getItem("Messages_count"));
            for (let i = 0; i < this.count; i += 1) {
                let message = JSON.parse(this.storage.getItem("Message" + i.toString()));
                console.log("message loaded:")
                console.log(message);
                this._renderMessage(message);
            }
        }
    }
}

customElements.define('messages-display', MessagesDisplay);
