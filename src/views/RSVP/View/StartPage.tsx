/** @format */
import { useEffect, useState, useContext, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { GuestContext } from "../../../context/GuestContext";
import {
  Heading,
  ButtonContainer,
  ErrorMessage,
  StartPageContainer,
  Title,
  SubTitle,
  DemoFormWrapper,
} from "../styled-components";
import { Button, Loading } from "../../../components/index";

export default function StartPage({ progressFlow }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const { setGuest } = useContext<any>(GuestContext);

  const keyPress = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let button = document?.getElementById("submit-button");
      button?.click();
    }
  }, []);

  useEffect(() => {
    let input = document?.getElementById("name-input");
    input?.addEventListener("keyup", keyPress);
    return () => document.removeEventListener("keyup", keyPress);
  }, [keyPress, searchTerm]);

  function editSearchTerm(e) {
    let term = e.target.value.trim();
    setSearchTerm(term);
  }

  function createGuestFromName(fullName) {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    return {
      guest_id: Date.now(),
      id: Date.now(),
      name: fullName.toLowerCase(),
      first_name: firstName,
      last_name: lastName,
      full_name: fullName,
      email: "",
      party_count: 2,
      plus_one_count: 1,
      has_kids: "yes",
      rsvp: "",
      diet: "",
      payment_method: "",
      arrival_date: "",
      comments: "",
      lodging_id: null,
      team_id: null,
      bed_count: 0,
      breakfast: "",
      created_at: "",
      updated_at: "",
      kids: [],
      plus_ones: [],
    };
  }

  function handleClick() {
    if (!searchTerm || searchTerm.length < 2) {
      setDisplayError(true);
      return;
    }

    setLoaded(false);
    const newGuest = createGuestFromName(searchTerm);

    // Save the new guest to localStorage
    const guestsJson = localStorage.getItem("weddingGuests");
    const guests = guestsJson ? JSON.parse(guestsJson) : [];
    guests.push(newGuest);
    localStorage.setItem("weddingGuests", JSON.stringify(guests));

    setGuest(newGuest);

    // Simulate API delay for better UX
    setTimeout(() => {
      progressFlow();
      setDisplayError(false);
      setLoaded(true);
    }, 300);
  }

  return (
    <>
      {loaded ? (
        <StartPageContainer>
          <DemoFormWrapper>
            <Heading>
              <Title>RSVP</Title>
              <SubTitle>
                This is a demo - enter <span className="bold">any name</span> to
                get started
              </SubTitle>
            </Heading>
            <TextField
              id="name-input"
              label="Search Your Full Name"
              onChange={(e) => editSearchTerm(e)}
              type="text"
              required
              error={displayError}
              fullWidth
              sx={{ maxWidth: "300px" }}
            />
            {displayError && (
              <ErrorMessage>
                Please enter your full name (first and last name).
              </ErrorMessage>
            )}
            <ButtonContainer>
              <Button
                id="submit-button"
                type="button"
                onClick={() => handleClick()}
                text="Get Started"
              />
            </ButtonContainer>
          </DemoFormWrapper>
        </StartPageContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
