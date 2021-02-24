import styled from 'styled-components';

const ButtonColor = '#829079';
const ActiveButtonColor = '#b9925e';
const fontColor = '#fff';

const Button = styled.button`
  background-color: ${(props) =>
    props.isActive ? ActiveButtonColor : ButtonColor};
  grid-area: ${(props) => props.gridArea};
  display: flex;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: ${fontColor};
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transform: ${(props) => (props.isActive ? 'scale(0.95)' : 'scale(1)')};
  &:hover {
    transform: ${(props) => (props.isActive ? 'scale(0.95)' : 'scaleY(1.05)')};
    letter-spacing: 0.5rem;
  }
  &:focus {
    outline: none;
  }
`;

export { Button };
