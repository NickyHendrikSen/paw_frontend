import React, { ReactNode } from "react"

import { 
  ButtonStyles
} from "./Styles"

interface ButtonProps {
  text: string,
  width?: string,
  height?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  paddingHorizontal?: string,
  paddingVertical?: string,
  fontSize: number,
  fill: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyles {...props}>
      {props.text}
    </ButtonStyles>
  )
}

export default Button;