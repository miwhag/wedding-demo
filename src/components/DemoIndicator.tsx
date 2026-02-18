/** @format */
import styled from "styled-components";
import { FaFlask } from "react-icons/fa";

const DemoContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Circular-Book";
  font-size: 14px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);

  @media only screen and (max-width: 900px) {
    top: 70px;
    right: 15px;
    padding: 8px 15px;
    font-size: 12px;
    gap: 8px;
  }

  svg {
    font-size: 16px;
    @media only screen and (max-width: 900px) {
      font-size: 14px;
    }
  }

  strong {
    font-family: "Circular-Medium";
  }
`;

const Pulse = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4ade80;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`;

export default function DemoIndicator() {
  return (
    <DemoContainer>
      <FaFlask />
      <Pulse />
      <span>
        <strong>Demo Mode</strong>
      </span>
    </DemoContainer>
  );
}
