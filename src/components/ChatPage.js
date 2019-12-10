import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import InputForm from './InputForm'
import MessageList from './MessageList'
//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

class ChatPage extends React.Component {
  constructor(props) {
    super(props)

    this.submitHandlerBounded = this.submitHandler.bind(this)
  }

  submitHandler(value) {
    const { name, setData } = this.props

    if (value !== '') {
      const message = { name: '', timestamp: '', text: '' }
      message.text = value
      message.name = 'me'
      message.timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      })
      setData((data) => {
        data.chats[name].messages.push(message)
        return data
      })
    }
  }

  render() {
    const { data, name } = this.props
    const InputFormStyle = {
      borderStyle: 'solid',
      borderTopWidth: '2px',
      borderColor: '#333',
    }

    if (data.chats[name] === undefined) {
      return 'No chat with such name exists'
    }

    return (
      <Container>
        <MessageList messages={data.chats[name].messages} />
        <InputForm
          name="message-text"
          placeholder="Message..."
          submitHandler={this.submitHandlerBounded}
          style={InputFormStyle}
        />
      </Container>
    )
  }
}

ChatPage.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    chats: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  setData: PropTypes.func.isRequired,
}

export default ChatPage
