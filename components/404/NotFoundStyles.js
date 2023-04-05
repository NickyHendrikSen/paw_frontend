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