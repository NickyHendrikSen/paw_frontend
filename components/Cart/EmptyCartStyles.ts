import styled from "styled-components"

export const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    height: 400px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const BigText = styled.div`
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
`

export const SmallText = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: var(--color-gray);
`

export const ShopNowText = styled.button`
  margin-top: 20px;
  color: var(--color-blue);
  margin-left: auto;
  margin-right: auto;
  padding: 18px 28px;
  border: 1px solid var(--color-blue);
  background: white;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--color-blue);
    color: white;
  }
`