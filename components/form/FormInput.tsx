import React, { ReactNode, useState } from "react"

import { 
  InputContainer,
  IconWrapper,
  InputStyles
} from "./FormInputStyles"
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form"

type FormInputProps = {
  type?: string,
  name?: string,
  placeholder?: string,
  width?: string,
  marginTop?: string,
  marginBottom?: string,
  icon?: ReactNode,
  register?: UseFormRegisterReturn<any>
  // register?: UseFormRegister<any>
} & Record<string, any>

const FormInput: React.FC<FormInputProps> = 
  ({type = "text", name = "", placeholder, width="100%", marginTop = "0px", marginBottom = "0px", icon, register, ...restProps}) => 
{
  // const [val, setVal] = useState("");

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputVal = e.target.value;
  //   console.log(inputVal);
  //   setVal(inputVal);
  // }

  return (
    <InputContainer width={width} marginTop={marginTop} marginBottom={marginBottom}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {/* <TextField 
      {...restProps} placeholder={placeholder} type={type}  name={name}/> */}
      <InputStyles placeholder={placeholder} type={type}  name={name} 
        {...(register && {...register})} {...restProps}
      // onChange={changeHandler} value={val}
      />
    </InputContainer>
  )
}

export default FormInput;