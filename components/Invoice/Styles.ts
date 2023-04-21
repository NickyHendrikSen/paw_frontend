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
  justify-content: space-between;
  align-items: center;
`

export const BackButton = styled.button`
  padding: 7px 10px;
  color: var(--color-blue);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition-duration: 0.2s;
  border: 1px solid transparent;
  background: transparent;
  font-weight: bold;
  width: 100%;
  text-align: left;

  svg {
    vertical-align: middle;
    margin-bottom: 2px;
    transition-duration: 0.2s;
    width: 0%;
    margin-right: 0px;
  }

  &:hover {
    svg {
      width: 20px;
      margin-right: 3px;
    }
  }
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

export const InvoiceHeader = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 50px;
`

export const InvoiceInfo = styled.div`
  height: 30px;
  width: 450px;
  padding-right: 80px;
  position: relative;

  &:after {
    content: " ";
    height: 30px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background: var(--color-blue);
  }
`

export const TitleText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 8px;
  background: var(--color-blue);
  width: 325px;
  height: 100%;
  padding-left: 80px;
  font-size: 40px;
  display: flex;
  align-items: center;
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

    ${InvoiceHeader} { 
      margin-top: 25px;
    }
  }
`

export const OrderIdText = styled.div`
  font-size: 11px;
  color: var(--color-blue);
`

export const InvoiceNo = styled.div`
  font-weight: bold;
  text-align: right;
  font-size: 12px;
  letter-spacing: 3px;
`

export const DateText = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 2px;
  color: var(--color-gray);
`

export const TopContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 80px;
  margin-top: 50px;
`

export const BillWrapper = styled.div`
  width: 300px;
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

export const ShippingWrapper = styled.div`
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
      border-top: 2px solid var(--color-blue);
      color: var(--color-blue);
      font-size: 15px;
      padding-bottom: 20px;

      &.left {
        text-align: left;
      }
      &.right {
        text-align: right;
      }
      &:last-child {
        padding-right: 80px;
      }
      &:first-child {
        padding-left: 80px;
      }
    }
  }
`

export const ProductListBody = styled.tbody`
  & > tr {
    &:last-child{
      & > td {
      border-bottom: none;
      }
    }
    & > td {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid var(--color-light-gray);
      font-size: 13px;

      &.left {
        text-align: left;
      }
      &.right {
        text-align: right;
      }
      &:last-child {
        padding-right: 80px;
      }
      &:first-child {
        padding-left: 80px;
      }
    }
  }
`

export const PriceSummaryWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const PriceSummary = styled.div`
  width: 100%;
  padding: 0px 80px;
  display: flex;
  justify-content : flex-end;
  font-size: 13px;
  margin-top: 7px;

  .text {
    text-align: right; 
  }
  .price {
    text-align: right; 
    width: 150px;
  }
`

export const PriceSummaryDivider = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: flex-end;
  padding: 0px 80px;

  hr {
    width: 250px;
    border: 1px solid var(--color-blue);
  }
`