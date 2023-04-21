import styled from "styled-components"

export const Wrapper = styled.div`
  border-top: 1px solid var(--color-gray);
//   cursor: pointer;
  padding: 20px;
  transition-duration: 0.2s;

  &:last-child {
    border-bottom: 1px solid var(--color-gray);
  }
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`

export const TopSection = styled.div`
  background-color: var(--color-light-gray);
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OrderIdSection = styled.div`
  .date {
    color: var(--color-gray);
    font-weight: bold;
  }
`

export const DetailLink = styled.div`
  color: var(--color-blue);
  font-weight: bold;
  font-family: var(--font-helvetica);
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: var(--color-light-blue);
    transform: scale(1.1);
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProductSection = styled.div`
  width: 100%;
`

export const ProductItemWrapper = styled.div`
  margin-top: 5px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
`

export const ProductItem = styled.div`
  display: inline-block;
  width: 65%;
`

export const NameSection = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
  overflow: hidden; 
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc( 50% - 50px );
`

export const ImageSection = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 35px;
  width: 35px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const QuantityPriceSection = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: calc( 50% - 50px );
  font-size: 13px;
`

export const ProductPrice = styled.div`
  display: inline-block;
  text-align: right;
  width: 35%;
`

export const PriceWrapper = styled.div<{fontSize: string, bold: boolean, marginTop: number}>`
  padding: 2px 5px;
  margin-top: 5px;
  ${props => `font-size: ${props.fontSize};`}
  ${props => `margin-top: ${props.marginTop}px;`}
  ${props => `font-weight: ${props.bold ? 'bold' : 'normal'};`}
  .title {
    display: inline-block;
    width: 65%;
    span {
      color: var(--color-blue);
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: var(--color-light-blue);
      }
    }
  }
  .price {
    display: inline-block;
    width: 35%;
    text-align: right;
  }
`

export const Divider = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15wpx;
  div {
    width: 35%;
    border-top: 1px solid var(--color-light-gray);
  }
`