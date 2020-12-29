import styled from "styled-components";

/**
 *
 * All credit for the loader belongs to:
 * https://loading.io/css/
 */

const SpinnerStyled = styled.div`
  max-height: 58px;
  overflow: hidden;

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000000;
    border-color: #000000 transparent #000000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div class="lds-dual-ring" />
    </SpinnerStyled>
  );
};

export default Spinner;
