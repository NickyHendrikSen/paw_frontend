import styled from "styled-components"

export const NameSection = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`
export const PriceSection = styled.div`
  color: var(--color-olive);
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

export const InfoSection = styled.div`

`

export const DescriptionSection = styled.div`
  display: none;
  text-overflow: ellipsis;
  overflow: hidden; 
  // height: 100%;
`

export const StockSection = styled.div`
  display: none;
`

export const Wrapper = styled.div<{isSoldOut: boolean, gridOption: "grid" | "list"}>`
  ${props => props.gridOption == "grid" ? `
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

  @media screen and (max-width: 1300px) {
    width: calc(33.3% - 15px);

    &:nth-child(4n+1) {
      margin-left: 15px;
    }
    &:nth-child(3n+1), &:nth-child(1) {
      margin-left: 0px;
    }
    &:nth-child(n+5){
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1100px) and (min-width: 950px) {
    width: calc(50% - 15px);

    &:nth-child(4n+1) {
      margin-left: 15px;
    }
    &:nth-child(3n+1) {
      margin-left: 15px;
    }
    &:nth-child(2n+1), &:nth-child(1) {
      margin-left: 0px;
    }
    &:nth-child(n+3){
      margin-top: 20px;
    }
  }
  ` : `
  display: flex;
  position: relative;
  // justify-content: flex-start;
  // align-content: start;
  box-shadow: 0px 1px 4px var(--color-gray);
  width: 100%;
  padding: 20px;
  background-color: white;
  cursor: pointer;
  transition-duration: 0.2s;
  height: 150px;

  &:nth-child(n+1){
    margin-top: 20px;
  }

  ${ImageSection} {
    flex-shrink: 0;
    img {
      height: 100%;
      width: 100%;
    }
  }
  ${NameSection} {
    // margin-top: 0;
    margin-top: 5px;
  }
  ${PriceSection} {
    margin-top: 0;
  }
  ${InfoSection} {
    margin-left: 20px;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  ${StockSection} {
    display: block;
    margin-top: 5px;
  }
  ${DescriptionSection} {
    display: block;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
  `}

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