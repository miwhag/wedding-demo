/** @format */
import { useEffect } from "react";
import styled from "styled-components";

export default function ConfirmPage() {
  useEffect(() => {
    // Reload mock data from files to reset the demo
    const mockGuestsReset = () => {
      // Don't clear completely - just reset to initial state would be complex
      // For now, just navigate back will show fresh state
    };
    mockGuestsReset();
  }, []);

  const ConfirmationPage = styled.div`
    margin-top: 4rem;
    max-width: 600px;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
    p {
      max-width: 420px;
      text-align: center;
      font-family: "Circular-Light";
    }
  `;

  const Title = styled.div`
    font-family: "Circular-Book";
    text-transform: uppercase;
    font-size: 35px;
    text-align: center;
    margin: 0;
    padding: 0;
  `;
  return (
    <ConfirmationPage>
      <Title>
        Thank You <br />
        For Your RSVP
      </Title>
      <p>
        Your RSVP has been submitted! In demo mode, you can refresh the page or
        enter a new name to try the RSVP flow again with a fresh start.
      </p>
    </ConfirmationPage>
  );
}
