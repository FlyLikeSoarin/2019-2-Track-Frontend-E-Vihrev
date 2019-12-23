import React from "react";
import styled from "@emotion/styled";
import "../styles/globalStyles.css";

const CenteredContainer = styled.div`
  height: 100vh;
  weight: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8e24aa;
`;

const Title = styled.div`
  font-weight: bold;
  color: white;
  font-size: 40px;
  margin: 20px;
`;

const FacebookButton = styled.button`
  background-color: #3b5998;
  color: white;
  font-size: 16px;
  font-weight: bold;

  border-style: none;
  border-radius: 10px;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 300px;

  :hover {
    background-color: #4b69a8 !important;
    color: white;
  }
`;

const AppleButtonHolder = styled.div`
  display: flex;
  width: 300px;
  height: 64px !important;
  flex-shrink: 1;
`;

const BlankBottom = styled.div`
  height: 5%;
`;

const StyledA = styled.a`
  display: contents;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
`;

function LoginPage(props) {
  let appleStyle = {height: '40px'};

  return (
    <CenteredContainer>
      <Title>
        Messenger
      </Title>
      <FacebookButton>
        <StyledA href="https://127.0.0.1:8000/social_auth/login/facebook/">Login with Facebook</StyledA>
      </FacebookButton>
      {/*<AppleButtonHolder id="appleid-signin" data-color="white" data-border="false" data-type="sign in" />*/}
      <BlankBottom/>
    </CenteredContainer>
  );
}

export default LoginPage;
