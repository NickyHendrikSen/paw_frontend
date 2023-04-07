import styled from "styled-components"

export const ContainerStyles = styled.div<{paddingTop?: string}>`
  padding-left: 180px;
  padding-right: 180px;
  height: 100%;

  ${props => props.paddingTop && `padding-top: ${props.paddingTop};`}
`