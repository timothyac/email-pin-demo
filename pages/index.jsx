import styled from "styled-components";

const HeaderStyled = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <HeaderStyled>Hello World</HeaderStyled>
    </div>
  );
}
