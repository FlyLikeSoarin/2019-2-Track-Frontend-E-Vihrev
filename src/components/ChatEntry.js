import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import noUserIcon from '../assets/no-user-icon.png';
import doubleCheck from '../assets/double-check.png';

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
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1em;
`;

const UserIcon = styled.img`
  position: relative;
  top: -0.36em;
  height: 2.5em;
  weight: 2.5em;
`;

const TextContainer = styled.div`
  margin-left: 0.3em;
  margin-top: 0.3em;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FirstRow = styled.div`
  height: 0px;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  padding-bottom: 1em;
`;

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
`;

const UsernameText = styled.div`
  flex-grow: 1;
  text-align: left;
  align-self: stretch;
  height: 1em;
  padding: 0vh;
  border: 0vh;
  margin: 0vh;
  font-size: 25px;
`;

const LastMessageText = styled.div`
  flex-grow: 1;
`;

const TimeText = styled.div`
  font-size: 15px;
  color: grey;
`;

const StateIcon = styled.img`
  position: relative;
  height: 1.6em;
  weight: 1.6em;
`;

function ChatEntry (props) {
  const { chat_id, type, userIcon, username, lastMessage } = props;
  const linkStyle = {display: 'contents'};

  return (
    <Link to={`/chat/${chat_id}`} style={linkStyle}>
      <ChatOuterBox>
        <ChatBox>
          <UserIcon src={noUserIcon} />
          <TextContainer>
            <FirstRow>
              <UsernameText> {username} </UsernameText>
              <TimeText> {lastMessage.timestamp} </TimeText>
            </FirstRow>
            <SecondRow>
              <LastMessageText> {lastMessage.text} </LastMessageText>
              <StateIcon src={doubleCheck} />
            </SecondRow>
          </TextContainer>
        </ChatBox>
      </ChatOuterBox>
    </Link>
  );
};


ChatEntry.defaultProps = {
  userIcon: noUserIcon,
};

ChatEntry.propTypes = {
  chat_id: PropTypes.number.isRequired,
  lastMessage: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  userIcon: PropTypes.string,
};

export default ChatEntry;
