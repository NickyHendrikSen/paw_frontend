import React from "react"
import { useRouter } from "next/router"

import { 
  ButtonStyles
} from "./Styles"

interface ButtonProps {
  children?: any,
  width?: string,
  height?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  paddingHorizontal?: string,
  paddingVertical?: string,
  fontSize: number,
  fill?: boolean,
  href?: string,
  onClick?: Function,
  type?: string,
}

const Button: React.FC<ButtonProps> = ({type="button", fill, ...props}) => {
  const router = useRouter();

  const clicked = () => {
    const { href, onClick } = props;

    if(onClick) onClick();

    if(href) router.push(href);
    
  }

  return (
    <ButtonStyles {...props} onClick={clicked} fill={fill ? fill : undefined}>
      {props.children}
    </ButtonStyles>
  )
}

export default Button;