import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import newChatImg from '../assets/new-chat.png';
import InputForm from './InputForm';

const NewChat = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

const NewChatInput = styled.div`
  transition: 1s;

  display: flex;
  align-self: start;
  margin: 0.7em;
  border: 0.2em;
  border-left: 0.3em;
  border-right: 0.3em;
  border-style: solid;
  border-color: black;
  width: 0em;

  &.selected {
    transition: 1s;
    right: 0em !important;
    width: 15em !important;
  }
`;

const pulse = keyframes`
  from {
    -moz-box-shadow: 0 0 0 0 rgba(142, 36, 170, 0.5);
    box-shadow: 0 0 0 0 rgba(142, 36, 170, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 25px rgba(142, 36, 170, 0);
      box-shadow: 0 0 0 25px rgba(142, 36, 170, 0);
  }
  to {
      -moz-box-shadow: 0 0 0 0 rgba(142, 36, 170, 0);
      box-shadow: 0 0 0 0 rgba(142, 36, 170, 0);
  }
`;

const IconHolder = styled.div`
  height:70px;
  position: relative;
  right: -2em;
  transition: 1s;
  border-radius: 50%;
  background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(142, 36, 170, 0.5);

  &:hover {
    animation: ${pulse} 2s infinite;
  }

  &.selected {
    transition: 1s;
    transform: rotate(-180deg);
    right: 0em !important;
  }
`;

// .icon.selected {
//   transition: 1s;
//   transform: rotate(-180deg);
//   right: 0em !important;
// }

const IconImg = styled.img`
  position: relative;
  right: 0px;
  height: 70px;
  weight: 70px;
`;

class NewChatButton extends React.Component {
	constructor(props) {
		super(props);
		this.refIconHolder = React.createRef();
		this.refNewChatInput = React.createRef();
		this.state = {
			isInFocus: false,
		};

		this.onFocusOutBounded = this.onFocusOut.bind(this);
		this.onClickBounded = this.onClick.bind(this);
		this.submitHandlerBounded = this.submitHandler.bind(this);
	}

	onFocusOut(evt) {
		this.Deactivate();
	}

	onClick() {
		this.Activate();
	}

	Activate() {
		// this.$form.reset();
		// //this.$input.style.display = 'flex';
		// this.$form.focusOn();
		// this.$input.classList.add('selected');
		// this.$form.classList.add('selected');
		// this.$icon.classList.add('selected');
		this.refIconHolder.current.classList.add('selected');
		this.refNewChatInput.current.classList.add('selected');
		this.setState({isInFocus: true});
	}

	Deactivate() {
		// this.$form.reset();
		// this.$input.style.display = 'none';
		// this.$input.classList.remove('selected');
		// this.$form.classList.remove('selected');
		// this.$icon.classList.remove('selected');
		this.refIconHolder.current.classList.remove('selected');
		this.refNewChatInput.current.classList.remove('selected');
		this.setState({isInFocus: false});
	}

	submitHandler(value) {
		this.props.newChatHandler != undefined ? this.props.newChatHandler(value) : console.log('No handler!');;
		this.Deactivate();
	}

	render() {
		const InputFormStyle={
			transition: '1s',
			width: this.state.isInFocus ? '15em' : '0em',
			borderColor: 'black',
		};

		return (
			<NewChat>
				<IconHolder ref={this.refIconHolder}>
					<IconImg alt="New chat" src={newChatImg} onClick={this.onClickBounded} />
				</IconHolder>
				<NewChatInput ref={this.refNewChatInput}>
					<InputForm
						style={InputFormStyle}
						name="message-text"
						placeholder="Recipient..."
						submitHandler={this.submitHandlerBounded}
						isInFocus={this.state.isInFocus}
						onFocusOut={this.onFocusOutBounded}
					/>
				</NewChatInput>
			</NewChat>
		);
	}
}

NewChatButton.propTypes = {
	newChatHandler: PropTypes.func.isRequired,
};

export default NewChatButton;
