import React from 'react';
import styled from '@emotion/styled';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import ChatList from './ChatList';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';

const OuterContainer = styled.div`
  background-color: #333;
  height: 100vh;
`;

const AppContainer = styled.div`
  height: 85vh;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  height: 10%;
  flex-grow: 1;
`;

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.storage = window.localStorage;

    this.state = {
      // headerText: 'Messenger',
      // headerIcon: undefined,
      // headerMode: 'menu',
      // displayedPage: 'chat-list',
      data: this.loadData(),
    };

    // this.chatSelectionHandlerBounded = this.chatSelectionHandler.bind(this);
    this.setDataBounded = this.setData.bind(this);
    // this.headerEventHandlerBounded = this.headerEventHandler.bind(this);
    this.sendMessageBounded = this.sendMessage.bind(this);
  }

  setData(updater) {
    this.setState((prevState) => ({ data: updater(prevState.data) }));

    const { data } = this.state;
    this.storage.setItem('Chat_local_cache', JSON.stringify(data));
  }

  loadData() {
     let data = {};
    // let data = this.storage.getItem('Chat_local_cache');
    // if (data == null) {
    //   data = { chats: {} };
    //   this.storage.setItem('Chat_local_cache', JSON.stringify(data));
    // } else {
    //   data = JSON.parse(this.storage.getItem('Chat_local_cache'));
    // }
    //
    data.myProfile = {
      id: '', displayedName: '', userIcon: undefined,
      information: {'Phone number': '+7-985-290-2394', 'Location': 'Moscow, Russia', 'Birthday': '22.01.1999'},
    };

    fetch("https://127.0.0.1:8000/chat/list/")
      .then((response)=>(response.json()))
      .then((response)=>(this.setData((data)=>{
        data.chats = response;
        console.log(response);
        return data;
      })));

    fetch("https://127.0.0.1:8000/user/profile/?id=1")
      .then((response)=>(response.json()))
      .then((response)=>(this.setData((data)=>{
        data.myProfile = response;
        console.log(response);
        return data;
      })));

    // data.myProfile = {
    //   name: 'flylikesoarin', displayedName: 'FlyLikeSoarin', userIcon: undefined,
    //   information: {'Phone number': '+7-985-290-2394', 'Location': 'Moscow, Russia', 'Birthday': '22.01.1999'},
    // };
    return data;
  }

  // toChatList() {
  //   this.setState({
  //     headerText: 'Messenger',
  //     headerIcon: undefined,
  //     headerMode: 'menu',
  //     displayedPage: 'chat-list',
  //   });
  // }

  sendMessage(value, name) {
    const {data} = this.state;

    if (value !== '') {
      const message = { name: '', timestamp: '', text: '' };
      message.text = value;
      message.name = 'me';
      message.timestamp = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      });
      this.setData((data) => {
        data.chats[name].messages.push(message);
        return data;
      });
    }
  }

  // headerEventHandler(type, data) {
  //   switch (type) {
  //     case 'back':
  //       this.toChatList();
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // chatSelectionHandler(chatData) {
  //   this.setState({
  //     currentCharName: chatData.name,
  //     headerText: chatData.displayName,
  //     headerIcon: chatData.icon,
  //     headerMode: 'back',
  //     displayedPage: 'chat-page',
  //   });
  // }

  render() {
    const { headerText, headerIcon, headerMode, data, currentCharName } = this.state;

    return (
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <OuterContainer>
            <AppContainer>
              <Header
                data={data}
              />
              <ContentContainer>
                <Switch>
                  <Route path="/chats">
                    <ChatList
                      // chatSelectionHandler={this.chatSelectionHandlerBounded}
                      data={data}
                      setData={this.setDataBounded}
                    />
                  </Route>
                  <Route path="/chat/:chatName">
                    <ChatPage
                      data={data}
                      setData={this.setDataBounded}
                      sendMessage={this.sendMessageBounded}
                    />
                  </Route>
                  <Route path="/dialog/:chatName">
                    <ChatPage
                      data={data}
                      setData={this.setDataBounded}
                      sendMessage={this.sendMessageBounded}
                    />
                  </Route>
                  <Route path="/profile">
                    <ProfilePage
                      profile={data.myProfile}
                    />
                  </Route>
                  <Route path="/settings">
                    ...
                  </Route>
                   <Redirect from='/' to="/chats" />
                </Switch>
              </ContentContainer>
            </AppContainer>
          </OuterContainer>
        </Route>
      </Switch>
    );
  }
}

export default Application;
