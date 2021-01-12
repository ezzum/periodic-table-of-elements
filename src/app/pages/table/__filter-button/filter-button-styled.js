import styled from 'styled-components';

const ButtonColor = '#C4A35A';
const ActiveButtonColor = '#4f7f80';

const Button = styled.div`
  background-color: ${(props) =>
    props.isActive ? ActiveButtonColor : ButtonColor};
  margin: 3px;
  grid-area: ${(props) => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  transform: ${(props) => (props.isActive ? 'scale(0.95)' : 'scale(1)')};
  &:hover {
    transform: ${(props) => (props.isActive ? 'scale(0.95)' : 'scale(1.03)')};
  }
`;

export { Button };
