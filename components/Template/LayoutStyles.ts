import styled from "styled-components"

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ContentWrapper = styled.div`
  min-height: calc( 100vh - 110px - 423px - 105px);
  @media screen and (max-width: 620px) {
    min-height: calc( 100vh - 110px - 403px - 105px);
  }
`