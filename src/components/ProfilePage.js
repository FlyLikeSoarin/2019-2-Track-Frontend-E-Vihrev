import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import noUserIcon from '../assets/no-user-icon.png';
import phoneImg from '../assets/phone.png';
import infoImg from '../assets/info.png';
import locationImg from '../assets/location.png';

const VerticalFlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const NameIconHolder = styled.div`
	background-color: #8e24aa;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	/* border-radius: 0px 0px 20px 20px; */
`;

const UserIcon = styled.img`
	height: 80px;
	width: 80px;
	margin: 0px 20px;
`;

const NameText = styled.div`
	font-weight: bold;
	color: white;
	font-size: 40px;
`;

const ScrollBody = styled.div`
	display: block;
	overflow-y: scroll;
	overflow-x: hidden;
	flex-basis: 10px;
	flex-grow: 1;
`;

const InformationBox = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	color: black;
	font-size: 25px;
	padding-bottom: 1.8em;
	padding-left: 0.5em;
	height: 0.5em;
	padding-top: 0.5em;
	transition: 0.2s;
	border-bottom: 2px solid #333;
	margin: 0px 10px;
	/* :hover {
    color: white;
    background-color: #8e24aa52;
    transition: 0.2s;
  } */
`;

const InformationOuterBox = styled.div`
	display: flex;
	flex-direction: row;
`;

const FieldIcon = styled.img`
	margin: 12px;
	width: 60px;
	height: 60px;
`;

const FieldTitle = styled.div`
	color: #333;
	font-weight: bold;
	text-align: left;
`;

const FieldValue = styled.div`
	color: black;
	text-align: left;
	margin-left: 20px;
`;

function InformationField(props) {
	const { fieldTitle, fieldValue } = props;

	let fieldIcon;
	switch (fieldTitle) {
		case 'Phone number':
			fieldIcon = phoneImg;
			break;
		case 'Location':
			fieldIcon = locationImg;
			break;
		default:
			fieldIcon = infoImg;
			break;
	}

	return (
		<InformationOuterBox>
			<FieldIcon src={fieldIcon} />
			<InformationBox>
				<FieldTitle>{fieldTitle}</FieldTitle>
				<FieldValue>{fieldValue}</FieldValue>
			</InformationBox>
		</InformationOuterBox>
	);
}

function ProfilePage(props) {
	const { profile } = props;

	const information = [];
	for (const key in profile.information) {
		if (profile.information[key] !== undefined) {
			information.push(
				<InformationField
					key={key}
					fieldTitle={key}
					fieldValue={profile.information[key]}
				/>,
			);
		}
	}

	return (
		<VerticalFlexContainer>
			<NameIconHolder>
				<UserIcon src={noUserIcon} />
				<NameText>{profile.displayedName}</NameText>
			</NameIconHolder>
			<ScrollBody>{information}</ScrollBody>
		</VerticalFlexContainer>
	);
}

InformationField.propTypes = {
	fieldTitle: PropTypes.string.isRequired,
	fieldValue: PropTypes.string.isRequired,
};

ProfilePage.propTypes = {
	profile: PropTypes.shape({
		displayedName: PropTypes.string.isRequired,
		userIcon: PropTypes.string,
		information: PropTypes.objectOf(PropTypes.string),
	}).isRequired,
};

export default ProfilePage;
