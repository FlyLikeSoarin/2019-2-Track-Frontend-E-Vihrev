import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import noUserIcon from '../assets/no-user-icon.png'
import doubleCheck from '../assets/double-check.png'

const ChatOuterBox = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 25px;
  padding-bottom: 1.8em;
  padding-left: 0.5em;
  height: 0.5em;
  padding-top: 0.5em;
  transition: 0.2s;
  :hover {
    color: white;
    background-color: #8e24aa52;
    transition: 0.2s;
  }
`

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1em;
`

const UserIcon = styled.img`
  position: relative;
  top: -0.36em;
  height: 2.5em;
  weight: 2.5em;
`

const TextContainer = styled.div`
  margin-left: 0.3em;
  margin-top: 0.3em;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  position: relative;
`

const FirstRow = styled.div`
  height: 0px;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  padding-bottom: 1em;
`

const SecondRow = styled.div`
  height: 0px;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  color: grey;
  padding-bottom: 1.5em;
  font-size: 15px;
  border: 0.2vh;
  border-bottom-color: #a5a5a5;
  border-bottom-style: solid;
`

const UsernameText = styled.div`
  flex-grow: 1;
  text-align: left;
  align-self: stretch;
  height: 1em;
  padding: 0vh;
  border: 0vh;
  margin: 0vh;
  font-size: 25px;
`

const LastMessageText = styled.div`
  flex-grow: 1;
`

const TimeText = styled.div`
  font-size: 15px;
  color: grey;
`

const StateIcon = styled.img`
  position: relative;
  height: 1.6em;
  weight: 1.6em;
`

class ChatEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lastMessageState: doubleCheck,
    }
  }

  onClick() {
    if (this.listCallback != null) {
      this.listCallback(this.name, this.$icon.src, this.$name.innerHTML)
    }
  }

  getLastMessage() {
    const { messages } = this.props
    let lastMessage = { text: 'No messages...', timestamp: '' }
    if (messages.length > 0) {
      lastMessage = messages[messages.length - 1]
    }
    return lastMessage
  }

  setChatProps(name, lastMessage, time, icon, displayName) {
    this.name = name
    this.id = this.name
    this.$name.innerHTML = displayName

    let lastMessageText = lastMessage.slice(0, 50 + lastMessage.slice(50, 1000).search(' '))
    if (lastMessageText.length < lastMessage.length) {
      lastMessageText += '...'
    }
    this.$lastMessage.innerHTML = lastMessageText

    this.$time.innerHTML = time
    if (icon == null) {
      this.$icon.src = noUserIcon
    }
  }

  setClickCallback(callback) {
    this.listCallback = callback
  }

  isNameEquel(name) {
    return name === this.name
  }

  render() {
    const { chatSelectionHandler, name, userIcon, username } = this.props
    const { lastMessageState } = this.state

    return (
      <ChatOuterBox
        onClick={() => {
          chatSelectionHandler(name)
        }}
      >
        <ChatBox>
          <UserIcon src={userIcon || noUserIcon} />
          <TextContainer>
            <FirstRow>
              <UsernameText> {username} </UsernameText>
              <TimeText> {this.getLastMessage().timestamp} </TimeText>
            </FirstRow>
            <SecondRow>
              <LastMessageText> {this.getLastMessage().text} </LastMessageText>
              <StateIcon src={lastMessageState} />
            </SecondRow>
          </TextContainer>
        </ChatBox>
      </ChatOuterBox>
    )
  }
}

ChatEntry.defaultProps = {
  userIcon: 'no icon',
}

ChatEntry.propTypes = {
  name: PropTypes.string.isRequired,
  chatSelectionHandler: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
  userIcon: PropTypes.string,
}

export default ChatEntry
