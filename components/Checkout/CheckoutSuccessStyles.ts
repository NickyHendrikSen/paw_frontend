import { popUpAnimation } from "@/styles/Animation"
import styled from "styled-components"

export const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 30px;
`

export const IconWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--color-green);
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${popUpAnimation};
  animation-duration: 1s;

  svg {
    height: 100px;
    width: 100px;
    color: white;
  }
`

export const BigText = styled.div`
  margin-top: 10px;
  font-size: 40px;
  font-weight: bold;
`

export const SmallText = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: var(--color-gray);
`