/** @format */
import styled from "styled-components";
import { useState, useEffect } from "react";

var end = new Date("07/21/2023 4:0 PM");

function calculateTimeDisplay() {
  var now = new Date();
  var distance = now - end;

  if (distance < 0) {
    // Wedding hasn't happened yet
    var _day = 1000 * 60 * 60 * 24;
    var days = Math.floor(Math.abs(distance) / _day);
    return {
      display: days,
      text: "days till the wedding",
    };
  } else {
    // Wedding has passed - calculate years, months, and days
    var years = now.getFullYear() - end.getFullYear();
    var months = now.getMonth() - end.getMonth();
    var days = now.getDate() - end.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      var lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    var parts = [];
    if (years > 0) parts.push(years + " year" + (years !== 1 ? "s" : ""));
    if (months > 0) parts.push(months + " month" + (months !== 1 ? "s" : ""));
    if (days > 0) parts.push(days + " day" + (days !== 1 ? "s" : ""));

    return {
      display: parts.join(", "),
      text: "since the wedding",
    };
  }
}

const DaysLeft = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 0px 3rem;
  line-height: 0.7;
  color: #3366ff;
  font-family: "Circular-Medium";
`;

const Text = styled.div`
  font-size: 50px;
  margin: 0rem 3rem 3rem;
  text-align: right;
  color: #3366ff;
  font-family: "Circular-Light";
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
  const [timeInfo, setTimeInfo] = useState(calculateTimeDisplay());

  useEffect(() => {
    // Update once per day at midnight
    const timer = setInterval(
      () => {
        setTimeInfo(calculateTimeDisplay());
      },
      1000 * 60 * 60,
    ); // Update every hour

    return () => clearInterval(timer);
  }, []);

  return (
    <CounterContainer>
      <DaysLeft>{timeInfo.display}</DaysLeft>
      <Text>{timeInfo.text}</Text>
    </CounterContainer>
  );
}
