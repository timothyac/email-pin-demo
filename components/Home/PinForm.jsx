import { useState } from "react";
import styled from "styled-components";

import PinSet from "./PinSet";
import Spinner from "./Spinner";

const PinFormStyled = styled.div`
  height: 276px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: block;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
    padding: 12px;
  }

  button {
    border: none;
    font-size: 16px;
    background-color: #fff;
    color: #2085d8;
    text-decoration: underline;
    cursor: pointer;
  }

  .green {
    color: #33df5e;
  }
`;

export default function PinForm(props) {
  const [emailSent, setEmailSent] = useState(false);
  const [checkingPin, setCheckingPin] = useState(false);

  const { inputs } = props;

  const resendEmail = () => {
    // Call API to resend email
  };

  return (
    <PinFormStyled>
      <h3>Confirm Pin</h3>
      {checkingPin ? <Spinner /> : <PinSet setCheckingPin={setCheckingPin} />}
      <span>
        This is the first time you are authorizing this device, so we have sent
        a confirmation email to <b>{inputs.email}</b>
      </span>
      {emailSent ? (
        <span className="green">New email Sent!</span>
      ) : (
        <span>
          Didn’t get it? <button onClick={resendEmail}>Resend email</button>
        </span>
      )}
    </PinFormStyled>
  );
}
