import styled from "styled-components";

const HeaderStyled = styled.h1`
  color: red;
`;

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
  height: 400px;
  width: 400px;
  border-radius: 16px;
  padding: 12px;
`;

export default function Home() {
  return (
    <div>
      <HeaderStyled>Hello World</HeaderStyled>
      <ModalOverlayContainerStyled>
        <div className="modal-blur" />
        <div className="form-container">
          <ModalStyled>hello</ModalStyled>
        </div>
      </ModalOverlayContainerStyled>
    </div>
  );
}
