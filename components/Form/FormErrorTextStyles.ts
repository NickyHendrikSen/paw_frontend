import styled from "styled-components"

export const ErrorText = styled.div<{fontSize: string}>`
  color: white;
  margin-top: 5px;
  font-size: ${props => props.fontSize ?? "15px"};
`