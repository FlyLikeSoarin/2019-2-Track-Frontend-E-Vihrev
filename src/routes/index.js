import React from 'react';
import { Router } from 'react-router-dom';
import styled from '@emotion/styled';
import ApplicationContainer from '../components/ApplicationContainer';
import { history } from './history';

const Container = styled.div`
	text-align: center;
`;

function Routes() {
	return (
		<Router history={history}>
			<Container>
				<ApplicationContainer />
			</Container>
		</Router>
	);
}

export default Routes;
