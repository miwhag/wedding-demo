/** @format */
import { useEffect, useState, useContext } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import { GuestContext } from "../../../../context/GuestContext";
import {
  createPlusOne,
  deletePlusOne,
  updateGuest,
  updatePlusOne,
  setKids,
  getSelectedGuest,
  sendGuestEmail,
} from "../../Model";
import { checkForErrors } from "./utils";

import {
  ContactFeild,
  ContactInfoSection,
  Form,
  ButtonContainer,
  InputContainer,
  ToggleContainer,
  RsvpContainer,
  Heading,
  SubHeading,
} from "./styled-components";
import {
  Button,
  ButtonSecondary,
  Loading,
  Toggle,
  Confirmation,
} from "../../../../components/index";
import ChildSection from "./ChildSection";
import MainDetailsSection from "./MainDetailsSection";

export default function ContactInfo({ regressFlow, progressFlow }) {
  const { guest, setGuest } = useContext<any>(GuestContext);
  const [loaded, setLoaded] = useState(false);

  const [rsvp, setRsvp] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [plusOneToggle, setPlusOneToggle] = useState(false);
  const [children, setChildren] = useState(false);
  const [email, setEmail] = useState("");
  const [childCare, setChildCare] = useState("");
  const [childList, setChildList] = useState([
    {
      name: "",
      age: "",
      needs_bed: "",
    },
  ]);

  const [emailError, setEmailError] = useState(false);
  const [rsvpError, setRsvpError] = useState(false);
  const [plusOneError, setPlusOneError] = useState(false);
  const [childCareError, setChildCareError] = useState(false);

  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [contactInfoChanged, setContactInfoChanged] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Always set loaded to true and populate state if guest exists
    if (guest) {
      setCurrentState(guest);
    }
    setLoaded(true);
  }, [guest]);

  function setCurrentState(current) {
    if (!current) return;

    setPlusOneToggle(current?.plus_ones?.length > 0);
    setPlusOneName(current?.plus_ones[0]?.name || "");
    setRsvp(current?.rsvp || "");
    setEmail(current?.email || "");

    if (current.kids && current.kids.length !== 0) {
      let careType = current?.kids[0].child_care;
      setChildList(current?.kids);
      setChildren(current?.kids?.length > 0);
      if (
        careType === "guardian" ||
        careType === "sitter" ||
        careType === "na"
      ) {
        setChildCare(current?.kids[0].child_care);
      }
    }
  }

  const handleRsvpChange = (event) => {
    setContactInfoChanged(true);
    setRsvp(event.target.value);
  };

  function handlePlusOne() {
    if (guest.plus_ones) {
      let plusOneRegistered = guest?.plus_ones?.length === 1;
      let plusOneSpotAvailable = guest?.plus_ones?.length === 0;
      let plusOneId = guest?.plus_ones[0]?.id;

      let plusOneEmpty =
        guest.plus_ones[0]?.name === null ||
        guest.plus_ones[0]?.name?.replace(/\s/g, "") === "" ||
        guest.plus_ones[0]?.name === undefined;

      if (rsvp === null || rsvp === "no") {
        setPlusOneToggle(false);
      } else if (plusOneSpotAvailable && plusOneToggle) {
        createPlusOne({ name: plusOneName, guest_id: guest.id });
      } else if (plusOneRegistered && plusOneToggle && !plusOneEmpty) {
        updatePlusOne(plusOneId, { name: plusOneName });
      } else if (plusOneRegistered && !plusOneToggle) {
        deletePlusOne(plusOneId);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  function handleRsvpNo() {
    updateGuest(guest.id, {
      email: email,
      rsvp: "no",
    });
    sendGuestEmail(guest.id);
    progressFlow(rsvp);
  }

  async function updateDatabase() {
    await handleDatabaseUpdate();
  }

  async function updateKids() {
    if (!children) {
      setKids(guest.id, { child_care: null, kids: [] });
    } else {
      setKids(guest.id, { child_care: childCare, kids: childList });
    }
  }

  async function handlePlusOneUpdate() {
    if (guest.plus_one_count !== 0 && plusOneName?.length > 0) {
      handlePlusOne();
    }
  }

  async function handleUpdateGuest() {
    // Calculate bed_count: 1 (guest) + plus ones + kids who need beds
    let bedCount = 1; // Guest always needs a bed

    if (plusOneToggle && plusOneName?.length > 0) {
      bedCount += 1;
    }

    if (children && childList.length > 0) {
      const kidsNeedingBeds = childList.filter(
        (kid) => kid.needs_bed !== "no",
      ).length;
      bedCount += kidsNeedingBeds;
    }

    updateGuest(guest.id, {
      email: email,
      rsvp: rsvp,
      bed_count: bedCount,
    });
  }

  async function handleProgressFlow() {
    let timeout = setTimeout(() => {
      progressFlow();
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }

  async function handleDatabaseUpdate() {
    await updateKids();
    await handlePlusOneUpdate();
    await handleUpdateGuest();
    await handleProgressFlow();

    // Refresh guest context after navigation to avoid flash
    const updatedGuest = await getSelectedGuest(guest.id);
    if (updatedGuest) {
      setGuest(updatedGuest);
    }
  }

  function handleContinue(e) {
    e.preventDefault();
    let error = checkForErrors({
      childList,
      children,
      childCare,
      setChildCareError,
      setRsvpError,
      rsvp,
      email,
      setEmailError,
      plusOneToggle,
      plusOneName,
      setPlusOneError,
    });

    if (!error) {
      if (rsvp === "no") {
        setDisplayConfirmation(true);
      } else {
        if (!contactInfoChanged) {
          progressFlow(rsvp);
        } else {
          updateDatabase();
        }
      }
    }
  }
  const plusOneFirstName = guest?.plus_ones[0]?.name?.split(" ")[0];
  return (
    <>
      {loaded ? (
        <ContactInfoSection>
          {displayConfirmation && (
            <Confirmation
              handleExit={() => setDisplayConfirmation(false)}
              handleContinue={() => handleRsvpNo()}
              content={{
                __html: `You selected "No" on your RSVP. <br/> Is this correct?`,
              }}
            />
          )}
          <Heading>
            Hello {guest?.first_name}
            {`${
              guest?.plus_ones[0]?.name ? ` & ${plusOneFirstName}` : ""
            }`}, <br /> We found your reservation!
          </Heading>
          <p className="main-sub-heading">
            {" "}
            Please update the information below
          </p>
          <RsvpContainer>
            <SubHeading className="select-dropdown">
              Will you be attending the wedding?
            </SubHeading>
            <FormControl
              sx={{
                m: 1,
                maxWidth: 200,
                margin: 0,
                width: "100%",
                paddingBottom: "15px",
              }}
              error={rsvpError}
              required
            >
              <InputLabel id="rsvp-label">Please select</InputLabel>
              <Select
                labelId="rsvp-label"
                label="Please Select"
                onChange={handleRsvpChange}
                defaultValue={guest?.rsvp ?? ""}
                required
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
              {rsvpError && (
                <FormHelperText>Please select an option</FormHelperText>
              )}
            </FormControl>
          </RsvpContainer>
          <Form
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleContinue(e)}
          >
            <MainDetailsSection
              guest={guest}
              setEmail={setEmail}
              emailError={emailError}
              setContactInfoChanged={setContactInfoChanged}
            />
            {(rsvp === "yes" ||
              (rsvp === null && guest.plus_ones.length > 0)) && (
              <div>
                {guest.plus_one_count !== 0 && (
                  <ToggleContainer>
                    <div>
                      <SubHeading>
                        Your rsvp includes an additional guest. Will they be
                        attending with you?
                      </SubHeading>
                    </div>
                    <Toggle
                      toggleActive={plusOneToggle}
                      onChange={() => {
                        setPlusOneToggle(!plusOneToggle);
                        setContactInfoChanged(true);
                      }}
                    />
                  </ToggleContainer>
                )}
                {plusOneToggle && (
                  <ContactFeild className="plus-one-field">
                    <p style={{ paddingBottom: "10px" }}>
                      {guest?.plus_ones[0]
                        ? "Please verify their name below"
                        : "Please enter their name below"}
                    </p>
                    <InputContainer className="no-gap">
                      <TextField
                        sx={{ width: 300 }}
                        id="plus-one-input"
                        label="Full Name"
                        required={false}
                        type="text"
                        defaultValue={guest?.plus_ones[0]?.name}
                        onChange={(e) => {
                          setPlusOneName(e.target.value);
                          setContactInfoChanged(true);
                        }}
                        error={plusOneError}
                        helperText={plusOneError && "Name is required"}
                      />
                    </InputContainer>
                  </ContactFeild>
                )}
                {guest?.has_kids === "yes" && (
                  <>
                    <ToggleContainer>
                      <SubHeading>
                        Do you have any children in your party?
                      </SubHeading>
                      <Toggle
                        toggleActive={children}
                        onChange={() => {
                          setChildren(!children);
                          setContactInfoChanged(true);
                        }}
                      />
                    </ToggleContainer>
                    {children && (
                      <ChildSection
                        childList={childList}
                        setChildList={setChildList}
                        childCare={childCare}
                        setChildCare={setChildCare}
                        childCareError={childCareError}
                        setContactInfoChanged={setContactInfoChanged}
                      />
                    )}
                  </>
                )}
              </div>
            )}
            <ButtonContainer>
              <ButtonSecondary onClick={() => regressFlow()} text="Back" />
              <Button type="submit" text="Continue" />
            </ButtonContainer>
          </Form>
        </ContactInfoSection>
      ) : (
        <Loading />
      )}
    </>
  );
}
