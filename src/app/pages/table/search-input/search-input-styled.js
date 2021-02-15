import styled from "styled-components";

const Input = styled.input`
  grid-area: ${(props) => props.gridArea};
  height: 40px;
  align-self: center;
`;

export default Input;
