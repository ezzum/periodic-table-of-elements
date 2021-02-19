import styled, { keyframes } from 'styled-components';

const SpinnerColor = '#525252';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div`
  animation: ${rotate} 1s linear infinite;
  border: 7px solid ${SpinnerColor};
  border-top-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 60px;
  height: 60px;
`;

export { SpinnerStyled };
