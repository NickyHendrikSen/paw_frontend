import styled from "styled-components"

export const Wrapper = styled.div`
  width: 800px;
  margin: auto;
  padding: 10px 20px 20px;
  -webkit-print-color-adjust: exact;
`

export const TitleText = styled.div`
  color: var(--color-dark);
  font-size: 18px;
  font-weight: bold;
  font-family: var(--font-open-sauce-one);
  letter-spacing: 2px;
`

export const OrderIdText = styled.div`
  font-size: 11px;
  color: var(--color-blue);
  font-family: var(--font-open-sauce-one);
`

export const DateText = styled.div`
`

export const ShippingWrapper = styled.div`
  margin-top: 30px;
  .title {
    font-family: var(--font-open-sauce-one);
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .text {
    font-family: var(--font-open-sauce-one);
    margin-top: 5px;
    font-size: 12px;
    color: var(--color-gray);
    font-weight: normal;
  }
`

export const ProductListWrapper = styled.div`
  padding-top: 50px;
`

export const ProductsTitle = styled.div`
  color: var(--color-blue);
  font-size: 22px;
  font-weight: bold;
  font-family: var(--font-open-sauce-one);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-gray);
`

export const ProductList = styled.div`
  
`