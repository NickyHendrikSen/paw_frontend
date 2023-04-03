import React, { ReactNode } from "react"

import { 
  ButtonStyles
} from "./Styles"

interface ButtonProps {
  text: string,
  width?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  paddingHorizontal?: string,
  paddingVertical?: string, 
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyles {...props}>
      {props.text}
    </ButtonStyles>
  )
}

export default Button;