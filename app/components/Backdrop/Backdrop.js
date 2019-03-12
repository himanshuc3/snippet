import React from 'react';
import styled from '@emotion/styled';

const BackdropWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = props => (props.show ? <BackdropWrapper onClick={props.clicked} /> : null);

export default Backdrop;
