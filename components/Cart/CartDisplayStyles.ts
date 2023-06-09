import styled from "styled-components"

export const ImageSection = styled.div`
  width: 120px;
  flex-shrink: 0;
  img {
    width: 100%;
  }
`

export const InfoSection = styled.div`
  height: 100%;
  padding-left: 20px;
  width: 65%;
  display: inline-block;
`

export const QuantitySection = styled.div`
  display: block;
  width: fit-content;
  flex-shrink: 0;
  font-weight: bold;
  width: 15%;
  display: inline-block;
`

export const ItemTotalPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  flex-shrink: 0;
  width: 15%;
  display: inline-block;
  text-align: center;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1250px) {
    ${InfoSection} {
      width: 55%;
    }
    ${QuantitySection} {
      width: 20%;
    }
    ${ItemTotalPrice} {
      width: 20%;
    }
  }

  @media screen and (max-width: 1050px) {
    ${InfoSection} {
      width: 45%;
    }
    ${QuantitySection} {
      width: 25%;
    }
    ${ItemTotalPrice} {
      width: 25%;
    }
  }
`

export const NameSection = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: var(--font-helvetica);
`

export const PriceSection = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-family: var(--font-helvetica);
  color: var(--color-gray);
`

export const CategorySection = styled.div`
  // font-color: var(--color-light-gray);
  font-family: var(--font-helvetica);
  font-size: 12px;
  text-transform: capitalize;
`

export const StockSection = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  font-family: var(--font-helvetica);
`

export const DeleteIcon = styled.button`
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--color-gray);
  cursor: pointer;
  transition-duration: 0.2s;
  width: 5%;
  display: inline-block;

  svg {
    width: 23px;
    height: 23px;
    vertical-align: middle;
    transition-duration: 0.2s;
  }

  &:hover {
    color: var(--color-red);
    svg {
      transform: scale(1.2);
    }
  }
  &:active {
    opacity: 0.5;
  }
`

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: 0px 1px 4px var(--color-gray);
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    position: relative;
    ${RightSection} {
      display: block;
      text-align: center;
    }
    ${InfoSection} {
      width: 100%;
      padding-left: 0px;
      padding-top: 20px;
    }
    ${QuantitySection} {
      width: 100%;
      padding-top: 20px;
    }
    ${ItemTotalPrice} {
      width: 100%;
      padding-top: 20px;  
    }
    ${DeleteIcon} {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
`