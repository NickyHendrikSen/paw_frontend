import styled from "styled-components"

export const ContainerStyles = styled.div<{paddingTop?: string, paddingBottom?: string, fullWidthResponsiveness: number}>`
  padding-left: 180px;
  padding-right: 180px;
  height: 100%;

  ${props => props.paddingTop && `padding-top: ${props.paddingTop};`}
  ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}

  @media screen and (max-width: ${props => props.fullWidthResponsiveness ?? '670'}px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`