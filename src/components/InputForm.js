import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const InputField = styled.input`
  border: 0;
  outline: none;
  width: calc(100% - 2px);
  font-size: 20px;
  :host {
    display: inline-block;
    border: 1px solid rgba(25, 25, 25, 0.32);
  }
`;

class InputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};

		this.refInputField = React.createRef();
	}

	componentDidMount() {
		if (this.props.isInFocus) {
			this.focus();
		}
	}

	componentDidUpdate() {
		if (this.props.isInFocus) {
			this.focus();
		}
	}

	onSubmit(evt) {
		evt.preventDefault();
		this.props.submitHandler(this.state.inputValue);
		this.reset();
	}

	onChange(evt) {
		this.setState({inputValue: evt.target.value});
	}

	reset() {
		this.setState({inputValue: ''});
	}

	focus() {
		this.refInputField.current.focus();
	}

	render() {
		return (
			<form onSubmit={(evt) => this.onSubmit(evt)}>
				<InputField
					style={this.props.style}
					name={this.props.name}
					placeholder={this.props.placeholder}
					value={this.state.inputValue}
					onChange={(evt) => this.onChange(evt)}
					ref={this.refInputField}
					autoFocus={this.props.isInFocus ? 'autofocus' : false}
					onBlur={this.props.onFocusOut}
				/>
			</form>
		);
	}
}

InputForm.defaultProps = {
	style: {},
	placeholder: '',
	isInFocus: false,
	onFocusOut: ()=>{},
};

InputForm.propTypes = {
	style: PropTypes.objectOf(PropTypes.string),
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	isInFocus: PropTypes.bool,
	onFocusOut: PropTypes.func,
	submitHandler: PropTypes.func.isRequired,
};



export default InputForm;
