import styled from "styled-components"

export const ButtonStyles = styled.button`
  padding: 8px 16px;
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    text-transform: scale(0.9);
    color: var(--color-blue);
    background-color: white;
  }
`