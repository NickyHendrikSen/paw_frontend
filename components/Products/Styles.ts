import styled from "styled-components"

export const ProductListWrapper = styled.div`
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .pagination {
    margin-top: 50px;
  }

  @media screen and (max-width: 1100px) {
    width: calc(100% - 200px);
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`

export const ProductList = styled.div`
//   background: red;
  width: 100%;
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

  @media screen and (max-width: 850px) {
    display: block;
  }
`

export const FilterChoiceWrapper = styled.div`
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  background: var(--color-very-light-gray);
  padding: 5px;

  @media screen and (max-width: 1100px) {
    width: 150px;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 50px;
  }
`

export const CategoryFilter = styled.div`
  .text {
    font-size: 18px;
    padding: 15px;
    font-weight: bold;
  }
`

export const CategoryList = styled.ul`
  list-style-type: none;
  li {
    background: white;
    padding: 10px 20px;
    cursor: pointer;
    transition-duration: 0.2s;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }

    &.picked {
      background-color: var(--color-blue);
      color: white;
    }

    &:hover {
      background-color: var(--color-blue);
      color: white;
    }
  }
`

export const CategoryWrapper = styled.div`
  background: var(--color-very-light-gray);
  padding: 20px;
  margin-bottom: 15px;
`

export const CategoryItem = styled.div`
  background: var(--color-blue);
  padding: red;
  text-transform: capitalize;  
  display: inline-block;
  margin-right: 20px;

  span {
    padding: 10px;
    color: white;
  }
  button {
    padding: 10px;
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`