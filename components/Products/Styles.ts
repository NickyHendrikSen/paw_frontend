import styled from "styled-components"

export const ProductList = styled.div`
//   background: red;
`

export const SearchText = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ProductBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-very-light-gray);
  height: 50px;
  padding: 20px;
  width: 100%;
`

export const SortOption = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 30%;
  span {
    margin-right: 20px;
    flex-shrink: 0;
  }
`

export const GridOption = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  span {
    margin-right: 10px;
    flex-shrink: 0;
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

export const ProductContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
`

export const FilterChoiceWrapper = styled.div`
  min-width: 200px;
  height: 200px;
  background: var(--color-very-light-gray);
`

export const CategoryFilter = styled.div`
  .text {
    font-size: 18px;
    padding: 20px;
    font-weight: bold;
  }
  ul {
    list-style-type: none;
    li {
      background: white;
      padding: 5px 10px;
    }
  }
`