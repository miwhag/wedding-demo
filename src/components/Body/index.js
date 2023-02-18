/** @format */
import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';
import Navbar from '../Navigation/Navbar';
import Flyout from '../Navigation/Flyout';

const Footer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #6871e4;
	color: white;
	padding: 2rem 0rem;
	div {
		padding: 0;
	}
	p {
		font-family: 'Circular-Book';
	}
`;

export default function Body() {
	const [flyoutVisible, setFlyoutVisible] = useState(false);
	return (
		<>
			<Navbar
				flyoutVisible={flyoutVisible}
				setFlyoutVisible={setFlyoutVisible}
			/>
			<Flyout
				flyoutVisible={flyoutVisible}
				setFlyoutVisible={setFlyoutVisible}
			/>
			<Navigation flyoutVisible={flyoutVisible} />
			<Footer>
				<p> developed by m + m </p>
			</Footer>
		</>
	);
}
