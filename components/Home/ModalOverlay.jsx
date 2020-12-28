import styled from "styled-components";

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

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    padding: 12px;
    text-align: center;
  }

  span {
    padding: 12px;
    display: block;
    color: #444;
    text-align: center;
    font-size: 12px;
    max-width: 300px;
  }

  .input-container {
  }
`;

const SpacerStyled = styled.div.attrs((props) => ({
  height: props.horizontal ? "100%" : "1px",
  width: props.horizontal ? "1px" : "100%",
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #dddddd;
`;

const InputContainerStyled = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  width: 100%;
  height: 50px;
  border-left: 0px;
  border-right: 0px;

  input {
    height: 100%;
    width: 100%;
    padding: 6px 18px;
    border: none;
    font-size: 16px;

    &:focus {
      outline-offset: -4px;
    }

    &::placeholder {
      color: #666;
      text-transform: capitalize;
    }
  }
`;

const ButtonContainerStyled = styled.div`
  width: 100%;
  padding: 12px;

  button {
    height: 50px;
    width: 100%;
    border-radius: 0px 0px 6px 6px;
    border: none;
    background-color: #000;

    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
`;

export default function ModalOverlay() {
  return (
    <ModalOverlayContainerStyled>
      <div className="modal-blur" />
      <div className="form-container">
        <ModalStyled>
          <form>
            <h3>email-pin-demo</h3>
            <SpacerStyled />
            <InputContainerStyled>
              <input type="email" placeholder="email" />
            </InputContainerStyled>
            <SpacerStyled />
            <InputContainerStyled flex>
              <input type="text" placeholder="first name" />
              <SpacerStyled horizontal />
              <input type="text" placeholder="last name" />
            </InputContainerStyled>
            <SpacerStyled />
            <span>
              By clicking the button below you agree to our Terms and Privacy
              Policy.
            </span>
            <ButtonContainerStyled>
              <button>Login</button>
            </ButtonContainerStyled>
          </form>
        </ModalStyled>
      </div>
    </ModalOverlayContainerStyled>
  );
}
