import styled from "styled-components"

export const Wrapper = styled.div<{isSoldOut: boolean}>`
  display: inline-block;
  position: relative;
  box-shadow: 0px 1px 4px var(--color-gray);
  width: calc(25% - 15px);
  margin-left: 20px;
  padding: 20px;
  background-color: white;
  cursor: pointer;
  transition-duration: 0.2s;

  &:nth-child(4n+1), &:nth-child(1) {
    margin-left: 0px;
  }
  &:nth-child(n+5){
    margin-top: 20px;
  }

  ${props => props.isSoldOut && `
    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: " ";
      background-color: black;
      opacity: 0.2;
    }
  `}

  ${props => !props.isSoldOut && `
    &:hover {
      transform: scale(1.05);
    }
  `}
`
export const NameSection = styled.div`
  color: black;
  font-size: 18px;
`
export const PriceSection = styled.div`
  color: var(--color-green);
  font-weight: bold;
  font-size: 22px;
  margin-top: 20px;
`
export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: 200px!important;
    max-width: 100%;
  }
`

export const LastStock = styled.div`
  position: absolute;
  background-color: var(--color-red);
  padding: 5px;
  color: white;
  top: 0;
  right: 0;
`

export const SoldOut = styled.div`
  position: absolute;
  background-color: var(--color-gray);
  padding: 5px;
  color: white;
  top: 0;
  right: 0;
`