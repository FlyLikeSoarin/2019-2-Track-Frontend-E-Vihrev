import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import InputForm from './InputForm';
import MessageList from './MessageList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function submitHandler(value, name, setData) {
  if (value !== '') {
    const message = { name: '', timestamp: '', text: '' };
    message.text = value;
    message.name = 'me';
    message.timestamp = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
    setData((data) => {
      data.chats[name].messages.push(message);
      return data;
    });
  }
}

function ChatPage(props) {
  const { data, setData, sendMessage } = props;
  const InputFormStyle = {
    borderStyle: 'solid',
    borderTopWidth: '2px',
    borderColor: '#333',
  };
  const {chatName} = useParams();

  if (data.chats[chatName] === undefined) {
    return 'No chat with such name exists';
  }

  return (
    <Container>
      <MessageList messages={data.chats[chatName].messages} />
      <InputForm
        name="message-text"
        placeholder="Message..."
        submitHandler={(value)=>(sendMessage(value, chatName))}
        style={InputFormStyle}
      />
    </Container>
  );
}

ChatPage.propTypes = {
  data: PropTypes.shape({
    chats: PropTypes.array,
  }).isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatPage;
