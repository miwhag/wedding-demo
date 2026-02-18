/** @format */

import styled from "styled-components";

//RSVP Main
export const RsvpContainer = styled.div`
  padding-top: 8rem;
  min-height: 85vh;
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-color: white;

  @media only screen and (max-width: 900px) {
    min-width: unset;
    border: unset;
    padding-top: 0rem;
  }
`;

//Start Modal

export const Heading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: unset;
  .bold {
    font-family: "Circular-Medium";
  }
  @media only screen and (max-width: 900px) {
    max-width: 280px;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 2rem 0px;
`;

export const ErrorMessage = styled.p`
  font-family: "Circular-Book";
  font-size: 14px;
  background-color: #ffdddd;
  color: #ff3333;
  padding: 20px;
  max-width: 300px;
  border-radius: 2px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    max-width: 270px;
  }
`;

export const DemoBanner = styled.div`
  font-family: "Circular-Book";
  font-size: 15px;
  background: linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%);
  color: #1e40af;
  padding: 18px 24px;
  max-width: 450px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
  border: 2px solid #93c5fd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  strong {
    font-family: "Circular-Medium";
    color: #1e3a8a;
  }

  @media only screen and (max-width: 600px) {
    max-width: 300px;
    font-size: 13px;
    padding: 15px 20px;
  }
`;

export const DemoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #ffffff, #fafbff);
  border: 3px solid transparent;
  border-radius: 16px;
  padding: 2.5rem 3rem;
  box-shadow:
    0 0 0 1px rgba(102, 126, 234, 0.1),
    0 8px 24px rgba(102, 126, 234, 0.08);
  position: relative;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.6;
  }

  &::after {
    content: "DEMO MODE";
    position: absolute;
    top: -12px;
    right: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-family: "Circular-Medium";
    font-size: 11px;
    letter-spacing: 1px;
    padding: 4px 14px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }

  @media only screen and (max-width: 900px) {
    width: calc(100% - 2rem);
    max-width: calc(100vw - 2rem);
    min-width: unset;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    margin: 0 1rem;

    &::after {
      top: -10px;
      right: 16px;
      font-size: 10px;
      padding: 3px 12px;
    }
  }
`;

export const StartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;
  min-width: 320px;
  @media only screen and (max-width: 600px) {
    padding-top: 3rem;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Circular-Book";
  font-size: 30px;
  align-self: center;
  margin-top: 3rem;
  padding: 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    margin-top: 0rem;
    &.coming-soon {
      font-size: 20px;
      margin-top: 4rem;
    }
  }
`;

export const SubTitle = styled.div`
  padding: 15px;
  font-family: "Circular-Light";
  font-size: 17px;
`;
