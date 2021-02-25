import styled from 'styled-components';

const Input = styled.input`
  grid-area: ${(props) => props.gridArea};
  height: 2.5rem;
  border-radius: 0.3rem;
  background-color: #829079;
  padding: 0 1rem;
  border: none;
  align-self: center;
  font-size: 1rem;
  color: #fff;
  &::placeholder {
    color: #c7c7c7;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
