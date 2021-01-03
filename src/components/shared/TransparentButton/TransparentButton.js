import styled from "styled-components";

const TransparentButton = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  font-family: inherit;
  font-size: inherit;
  margin: 0 2rem;
  user-select: none;

  :hover {
    cursor: pointer;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default TransparentButton;
