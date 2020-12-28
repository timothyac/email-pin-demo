import styled from "styled-components";
import ModalOverlay from "../components/Home/ModalOverlay";

const HeaderStyled = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <HeaderStyled>Hello World</HeaderStyled>
      <ModalOverlay />
    </div>
  );
}
