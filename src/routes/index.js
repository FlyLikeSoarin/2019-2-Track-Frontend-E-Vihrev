import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Application from '../components/Application';

const Container = styled.div`
	text-align: center;
`;
export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Container>
				<Application />
			</Container>
		</Router>
	);
}

export default Routes;
