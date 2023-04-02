import React, { ReactNode } from "react"

import { 
  InputContainer,
  IconWrapper,
  InputStyles
} from "./FormInputStyles"

interface PageProps {
  type?: string,
  placeholder?: string,
  width?: string,
  marginTop?: string,
  marginBottom?: string,
  icon?: ReactNode
}

const FormInput: React.FC<PageProps> = ({type = "text", placeholder, width="100%", marginTop = "0px", marginBottom = "0px", icon}) => {
  return (
    <InputContainer width={width} marginTop={marginTop} marginBottom={marginBottom}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <InputStyles type={type} placeholder={placeholder}/>
    </InputContainer>
  )
}

export default FormInput;