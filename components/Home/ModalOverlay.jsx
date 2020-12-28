import { useState } from "react";
import styled from "styled-components";

import validateEmail from "../../utils/validateEmail";
import LoginForm from "./LoginForm";
import PinForm from "./PinForm";

const ModalOverlayContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;

  & > div {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
  }

  .modal-blur {
    z-index: 11;
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
  }

  .form-container {
    z-index: 12;
    display: grid;
    place-items: center;
  }
`;

const ModalStyled = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 12px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    padding: 12px;
    text-align: center;
  }
`;

export default function ModalOverlay() {
  const [userIsVerified, setuserIsVerified] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  // When a user unfocuses, send a request to the backend
  // that checks if they are an existing user. If they
  // are, then we can display the login prompt
  const checkIfUserExists = async () => {
    if (validateEmail(inputs.email)) {
      const res = await fetch("/api/checkIfUser");
      const parsed = await res.json();

      if (parsed.verified) {
        // Update UI
        setuserIsVerified(true);
      }
    }
  };

  return (
    <ModalOverlayContainerStyled>
      <div className="modal-blur" />
      <div className="form-container">
        <ModalStyled>
          {/* // TODO: invert this back */}
          {!userIsVerified ? (
            <PinForm inputs={inputs} />
          ) : (
            <LoginForm
              checkIfUserExists={checkIfUserExists}
              inputs={inputs}
              setInputs={setInputs}
            />
          )}
        </ModalStyled>
      </div>
    </ModalOverlayContainerStyled>
  );
}
