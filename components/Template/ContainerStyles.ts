import styled from "styled-components"

export const ContainerStyles = styled.div<{paddingTop?: string, paddingBottom?: string}>`
  padding-left: 180px;
  padding-right: 180px;
  height: 100%;

  ${props => props.paddingTop && `padding-top: ${props.paddingTop};`}
  ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}
`