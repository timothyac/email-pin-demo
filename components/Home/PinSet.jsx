import { useState, useRef } from "react";
import styled from "styled-components";

const PinSetStyled = styled.div`
  display: flex;

  input {
    border-radius: 6px;
    border: 1px solid #333;
    height: 48px;
    width: 48px;
    font-size: 24px;
    text-align: center;
    margin: 5px;
  }
`;

const useRefs = () => ({
  pin1: useRef(),
  pin2: useRef(),
  pin3: useRef(),
  pin4: useRef(),
  pin5: useRef(),
  pin6: useRef(),
});

export default function PinSet(props) {
  const pinRefs = useRefs();
  const [pin, setPin] = useState({
    "pin-num-1": "",
    "pin-num-2": "",
    "pin-num-3": "",
    "pin-num-4": "",
    "pin-num-5": "",
    "pin-num-6": "",
  });

  const goToNextPin = (e, nextRef) => {
    setPin((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    if (nextRef && e.target.value !== "") {
      // Focus on the next input after the user types in the current
      nextRef.current.focus();
    } else {
      // Display loader and check if pin is valid
      console.log("end of the line!");
    }
  };

  const goToPrevPin = (e, prevRef) => {
    // If we are pin 6 and the user deletes then we must
    // delete the input state
    if (prevRef === pinRefs.pin5) {
      setPin((prev) => ({
        ...prev,
        ["pin-num-6"]: "",
      }));
    }

    // Listen for a user to press the delete/backspace key
    if (e.code === "Backspace") {
      prevRef.current.focus();
    }
  };

  return (
    <PinSetStyled>
      <input
        ref={pinRefs.pin1}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-1"
        value={pin["pin-num-1"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, pinRefs.pin2)}
        onKeyDown={(e) => goToPrevPin(e, null)}
      />
      <input
        ref={pinRefs.pin2}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-2"
        value={pin["pin-num-2"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, pinRefs.pin3)}
        onKeyDown={(e) => goToPrevPin(e, pinRefs.pin1)}
      />
      <input
        ref={pinRefs.pin3}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-3"
        value={pin["pin-num-3"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, pinRefs.pin4)}
        onKeyDown={(e) => goToPrevPin(e, pinRefs.pin2)}
      />
      <input
        ref={pinRefs.pin4}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-4"
        value={pin["pin-num-4"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, pinRefs.pin5)}
        onKeyDown={(e) => goToPrevPin(e, pinRefs.pin3)}
      />
      <input
        ref={pinRefs.pin5}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-5"
        value={pin["pin-num-5"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, pinRefs.pin6)}
        onKeyDown={(e) => goToPrevPin(e, pinRefs.pin4)}
      />
      <input
        ref={pinRefs.pin6}
        type="text"
        pattern="[0-9]*"
        maxLength="1"
        id="pin-num-6"
        value={pin["pin-num-6"]}
        placeholder="0"
        onChange={(e) => goToNextPin(e, null)}
        onKeyDown={(e) => goToPrevPin(e, pinRefs.pin5)}
      />
    </PinSetStyled>
  );
}
