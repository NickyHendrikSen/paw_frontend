import React from "react"
import { useRouter } from "next/router"

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
  fill: boolean,
  href?: string,
  onClick?: Function,
}

const Button: React.FC<ButtonProps> = (props) => {
  const router = useRouter();

  const clicked = () => {
    const { href, onClick } = props;

    if(onClick) onClick();

    if(href) router.push(href);
    
  }

  return (
    <ButtonStyles {...props} onClick={clicked}>
      {props.text}
    </ButtonStyles>
  )
}

export default Button;