/** @format */
import styled from 'styled-components';

var end = new Date('07/21/2023 4:0 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	var countdown = document.getElementById('countdown');
	if (distance < 0 && countdown) {
		clearInterval(timer);
		countdown.innerHTML = '0';
		return;
	}
	if (countdown) {
		var days = Math.floor(distance / _day);
		countdown.innerHTML = days;
	}
}

timer = setInterval(showRemaining, 1000);

const DaysLeft = styled.div`
	font-size: 70px;
	font-weight: 700;
	margin: 0px 3rem;
	line-height: 0.7;
	color: #3366ff;
	font-family: 'Circular-Medium';
`;

const Text = styled.div`
	font-size: 50px;
	margin: 0rem 3rem 3rem;
	text-align: right;
	color: #3366ff;
	font-family: 'Circular-Light';
	@media only screen and (max-width: 900px) {
		font-size: 35px;
	}
`;

const CounterContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export default function Countdown() {
	return (
		<CounterContainer>
			<DaysLeft id='countdown' /> <Text>days till the wedding</Text>
		</CounterContainer>
	);
}
