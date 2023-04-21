import styled from "styled-components"

export const OrderModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: white;
  border-radius: 5px;
  outline: none;
`

export const DetailText = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: var(--font-helvetica);
  margin-bottom: 20px;
`

export const OrderIdText = styled.div`
  
`

export const OrderDateText = styled.div`
  
`

export const ShippingInformation = styled.div`
  margin-top: 20px;
  .text {
    font-family: var(--font-helvetica);
  }
  .title {
    font-family: var(--font-helvetica);
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
`