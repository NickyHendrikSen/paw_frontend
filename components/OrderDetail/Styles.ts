import styled from "styled-components"

export const PrintWrapper = styled.div`
  height: 40px;
  width: 100%;
  box-shadow: 0px 1px 4px var(--color-gray);
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PrintButton = styled.button`
  padding: 7px 10px;
  background: var(--color-blue);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
  transition-duration: 0.2s;
  border: 1px solid transparent;
  &: hover {
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
    background: white;
    transform: scale(0.925);
  }
`

export const TitleText = styled.div`
  color: var(--color-dark);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 50px;
`

export const Wrapper = styled.div`
  position: relative;
  width: 800px;
  margin: auto;
  padding: 10px 20px 20px;
  -webkit-print-color-adjust: exact;
  & > * {
    font-family: var(--font-open-sauce-one);
  }
  @media print {
    ${PrintWrapper} {
      display:none;
    }

    ${TitleText} { 
      margin-top: 25px;
    }
  }
`

export const OrderIdText = styled.div`
  font-size: 11px;
  color: var(--color-blue);
`

export const DateText = styled.div`
`

export const ShippingWrapper = styled.div`
  margin-top: 30px;
  .title {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .text {
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
  padding-bottom: 10px;
  // border-bottom: 1px solid var(--color-gray);
`

export const ProductList = styled.table`
  width: 100%;
  border-spacing: 0;
`

export const ProductListHead = styled.thead`
  & > tr {
    & > th {
      padding: 10px;
      border-top: 1px solid var(--color-gray);
      border-bottom: 1px solid var(--color-gray);
    }
  }
`

export const ProductListBody = styled.tbody`
  & > tr {
    & > td {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid var(--color-light-gray);
    }
  }
`