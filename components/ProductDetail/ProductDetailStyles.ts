import styled from "styled-components"

export const Wrapper = styled.div`

`

export const ImageSection = styled.div`
  display: inline-block;
  width: 35%;
  vertical-align: top;
  img {
    width: 100%;
  }
`

export const InfoSection = styled.div`
  display: inline-block;
  width: 36.5%;
  margin-left: 2.5%;
  vertical-align: top;
`

export const CartSection = styled.div`
  display: inline-block;
  width: 23.5%;
  margin-left: 2.5%;
  vertical-align: top;
`

export const PriceSection = styled.div`
  font-family: var(--font-helvetica);
  font-size: 22px;
  color: var(--color-dark);
  margin-top: 20px;
`

export const NameSection = styled.div`
  font-family: var(--font-helvetica);
  font-weight: bold;
  font-size: 24px;
  color: var(--color-dark);
`

export const CategorySection = styled.div`
  font-color: var(--color-light-gray);
  font-size: 16px;
  margin-top: 4px;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const DescriptionSection = styled.div`
  font-size: 16px;
  margin-top: 18px;
  font-family: var(--font-helvetica);
  line-height: 1.625;
`

export const CartWrapper = styled.div`
  box-shadow: 0px 1px 4px var(--color-gray);
`

export const CartInner = styled.div`
  padding: 12px;
`

export const AddToCartText = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
  font-family: var(--font-helvetica);
`

export const SubTotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  .text {
    color: var(--color-gray);
    font-weight: bold;
  }
  .total {
    color: black;
    font-weight: bold;
    font-size: 20px;
    font-family: var(--font-helvetica);
  }
`
export const AddToCartSection = styled.div`
  padding: 10px 12px;
  background-color: var(--color-blue);
  box-shadow: 0px 1px 4px var(--color-gray);
  display: flex;
  justify-content: space-between;
  button {
    svg {
      vertical-align: middle;
      margin-right: 5px;
      height: 15px;
      width: 15px;
    }
  }
`

export const StockSection = styled.div`
  margin-bottom: 5px;
`
