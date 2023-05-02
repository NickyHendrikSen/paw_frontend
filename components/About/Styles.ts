import styled from "styled-components"

export const AboutText = styled.div`
  
`

export const Highlight = styled.span`
  color: var(--color-blue);
  font-weight: bold;
`

export const StoreNavigation = styled.div`
  margin-top: 40px;
  font-weight: bold;
  font-size: 17px;
  a {
    position: relative;
    color: var(--color-blue);
    text-decoration: none;
    transition-duration: 0.2s;
    &:after {
      content: " ";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-bottom: 1px solid var(--color-blue);
      width: 0;
      transition-duration: 0.2s;
    }
    &:hover {
      color: var(--color-light-blue);
      &:after {
        width: 100%;
      }
    }
  }
`