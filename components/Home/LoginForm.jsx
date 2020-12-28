import styled from "styled-components";

const LoginFormStyled = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LoginForm = (props) => {
  const { checkIfUserExists, inputs, setInputs } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h3>email-pin-demo</h3>
      <SpacerStyled />
      <InputContainerStyled>
        <input
          onBlur={checkIfUserExists}
          type="email"
          placeholder="email"
          id="email"
          value={inputs.email}
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              [e.target.id]: e.target.value,
            }))
          }
        />
      </InputContainerStyled>
      <SpacerStyled />
      <InputContainerStyled flex>
        <input type="text" placeholder="first name" id="firstName" />
        <SpacerStyled horizontal />
        <input type="text" placeholder="last name" id="lastName" />
      </InputContainerStyled>
      <SpacerStyled />
      <span>
        By clicking the button below you agree to our Terms and Privacy Policy.
      </span>
      <ButtonContainerStyled>
        <button type="submit">Login</button>
      </ButtonContainerStyled>
    </LoginFormStyled>
  );
};

export default LoginForm;
