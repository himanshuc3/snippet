import React from 'react';
import styled from '@emotion/styled';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../containers/Aux/Aux';

const ModalWrapper = styled.div`
	position: fixed;
	z-index: 200;
	background-color: white;
	width: 60%;
	height: 60%;
	top: 20%;
	left: 20%;
	border: 2px solid black;
	transition: 1s all;
	transform: ${props => (props.show ? `translateY(0)` : `translateY(-100vh)`)};
`;

const Modal = props => (
	<Aux>
		<Backdrop show={props.show} clicked={props.modalClose} />
		<ModalWrapper show={props.show}>{props.children}</ModalWrapper>
	</Aux>
);

export default Modal;
