import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: white;
  border-radius: 5px;
`

export const CheckoutTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: var(--font-helvetica);
`

export const CheckoutText = styled.div`
  margin-top: 20px;
`

export const CheckoutButtonNo = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  outline: none;
  background: none;
  margin-left: 10px;
  border: 1px solid var(--color-blue);
  color: var(--color-blue);
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background: var(--color-blue);
    color: white;
  }
`

export const CheckoutButtonYes = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  outline: none;
  border: 1px solid var(--color-blue);
  background: var(--color-blue);
  color: white;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background: white;
    color: var(--color-blue);
  }
`