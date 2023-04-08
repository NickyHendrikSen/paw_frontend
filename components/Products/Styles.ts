import styled from "styled-components"

export const ProductList = styled.div`
  margin-top: 50px;
//   background: red;
`

export const TitleText = styled.div`
  color: black;
  font-size: 25px;
  font-weight: bold;
`

export const SearchText = styled.div`
  font-size: 20px;
  margin-top: 20px;
`

export const ProductBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-gray);
  height: 40px;
  padding: 6px;
  width: 100%;
`

export const GridOption = styled.div`
  font-weight: bold;
  span {
    margin-right: 10px;
  }
`

export const GridOptionItem = styled.div<{isChosen: boolean}>`
  display: inline-block;
  svg {
    ${props => props.isChosen ? `color: black;` : `color: var(--color-gray);`}
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 10px;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`