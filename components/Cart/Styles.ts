import styled from "styled-components"

export const LineDivider = styled.hr`
  margin: 58px 0px;
  border: .5px solid var(--color-light-gray);
`

export const CheckoutSection = styled.div`

`

export const TotalPriceText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .text {
    font-size: 22px;
  }
  .total {
    font-size: 28px;
    font-weight: bold;
  }
`

export const CheckoutButton = styled.button`
  background-color: var(--color-blue);
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  width: 100%;
  color: white;
  font-weight: bold;
  font-family: var(--font-helvetica);
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.2s;

  svg {
    margin-right: 15px;
    transition-duration: 0.2s;
  }

  &:hover {
    background-color: var(--color-light-blue);
    svg {
      transform: scale(1.3);
    }
  }
`