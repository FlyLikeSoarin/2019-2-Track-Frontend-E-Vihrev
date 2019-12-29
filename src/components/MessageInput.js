import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import InputForm from './InputForm';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #333;
`;

const FlexGrow = styled.div`
	flex-grow: 1;
`;

const Button = styled.div`
	border-radius: 12px;
	margin: 3px 0px 3px 6px;
	padding-left: 5px;
	background-color: #8e24aa;
	:hover {
		background-color: #ae44ca;
	}
	cursor: pointer;
`;

const FileInput = styled.input`
	width: 2px;
	height: 2px;
	opacity: 0;
	position: absolute;
	z-index: 999;
`;

const FileLabel = styled.label`
	font-size: 20px;
	margin: 3px 0px 3px 6px;
	padding: 2px 5px;
	font-weight: 700;
	color: white;
	background-color: #8e24aa;
	display: inline-block;
	:hover {
		background-color: #ae44ca;
	}
	cursor: pointer;
`;

class MessageInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			top: -400,
			left: -400,
		};

		const { submitHandler } = props;

		this.formRef = React.createRef();
		this.submitHandlerBounded = submitHandler.bind(this);
		this.startRecordingBounded = this.startRecording.bind(this);
		this.stopRecordingBounded = this.stopRecording.bind(this);
		this.onChangeHandlerBounded = this.onChangeHandler.bind(this);
		this.sendGeolocationBounded = this.sendGeolocation.bind(this);
		this.onDragOverBounded = this.onDragOver.bind(this);
	}

	onChangeHandler(e) {
		const { files } = e.target;

		if (FileReader && files && files.length) {
			const fr = new FileReader();
			fr.onload = () => {
				this.submitHandlerBounded(`/img_${fr.result}`);
			};
			fr.readAsDataURL(files[0]);
		}

		const formData = new FormData(this.formRef.current);

		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://tt-front.now.sh/upload', true);
		xhr.send(formData);
	}

	onDragOver(e) {
		e.preventDefault();
		e.stopPropagation();
		const x = e.pageX;
		const y = e.pageY;

		this.setState({ top: y - 1, left: x - 1 });
	}

	startRecording() {
		if (navigator.mediaDevices) {
			navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
				this.mediaRecorder = new MediaRecorder(stream);
				this.mediaRecorder.start();

				const audioChunks = [];
				this.mediaRecorder.addEventListener('dataavailable', (event) => {
					audioChunks.push(event.data);
				});

				this.mediaRecorder.addEventListener('stop', () => {
					const audioBlob = new Blob(audioChunks);
					const audioUrl = URL.createObjectURL(audioBlob);

					this.submitHandlerBounded(`/aud_${audioUrl}`);

					const formData = new FormData();
					formData.append('audio', audioBlob);
					const xhr = new XMLHttpRequest();

					xhr.open('POST', 'https://tt-front.now.sh/upload', true);
					xhr.send(formData);
				});
			});
		}
	}

	stopRecording() {
		if (this.mediaRecorder !== undefined) {
			this.mediaRecorder.stop();
		}
	}

	sendGeolocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude } = position.coords;
				const { longitude } = position.coords;
				const url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				this.submitHandlerBounded(`/pos_${url}`);
			});
		}
	}

	render() {
		const { top, left } = this.state;

		const inputFormStyle = {
			borderStyle: 'solid',
			borderTopWidth: '2px',
			borderColor: '#333',
		};

		const fileInputStyle = {
			top: `${top.toString()}px`,
			left: `${left.toString()}px`,
		};

		return (
			<>
				<Container>
					<FlexGrow>
						<InputForm
							name="message-text"
							placeholder="Message..."
							submitHandler={this.submitHandlerBounded}
							style={inputFormStyle}
						/>
					</FlexGrow>
					<>
						<Button
							onMouseDown={this.startRecordingBounded}
							onMouseUp={this.stopRecordingBounded}
						>
							<span role="img" aria-label="Voice Message">
								&#127908;
							</span>
						</Button>
					</>
					<>
						<Button onClick={this.sendGeolocationBounded}>
							<span role="img" aria-label="Location">
								&#128204;
							</span>
						</Button>
					</>
					<form
						action="https://tt-front.now.sh/upload"
						method="post"
						ref={this.formRef}
					>
						<FileInput
							type="file"
							name="image"
							id="image"
							onChange={this.onChangeHandlerBounded}
							style={fileInputStyle}
						/>

						<FileLabel htmlFor="image" onDragOver={this.onDragOverBounded}>
							UPLOAD IMAGE
						</FileLabel>
					</form>
				</Container>
			</>
		);
	}
}

MessageInput.propTypes = {
	submitHandler: PropTypes.func.isRequired,
};

export default MessageInput;
