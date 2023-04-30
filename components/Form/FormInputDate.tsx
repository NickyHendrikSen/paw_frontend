import React, { ReactNode, useState } from "react"

import { 
  InputContainer,
  IconWrapper,
  InputStyles
} from "./FormInputStyles"
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form"

type FormInputProps = {
  name?: string,
  placeholder?: string,
  width?: string,
  marginTop?: string,
  marginBottom?: string,
  icon?: ReactNode,
  register?: UseFormRegisterReturn<any>,
  isDark?: boolean
  // register?: UseFormRegister<any>
} & Record<string, any>

const FormInputDate: React.FC<FormInputProps> = 
  ({name = "", placeholder, width="100%", 
    marginTop = "0px", marginBottom = "0px", icon, register, 
    isDark = false, ...restProps}) => 
{
  // const [val, setVal] = useState("");

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputVal = e.target.value;
  //   console.log(inputVal);
  //   setVal(inputVal);
  // }

  return (
    <InputContainer width={width} marginTop={marginTop} marginBottom={marginBottom} isDark={isDark}>
      {icon && <IconWrapper isDark={isDark}>{icon}</IconWrapper>}
      {/* <TextField 
      {...restProps} placeholder={placeholder} type={type}  name={name}/> */}
      <InputStyles placeholder={placeholder} type={"date"}  name={name} 
        {...(register && {...register})} {...restProps} isDark={isDark}
      // onChange={changeHandler} value={val}
      />
    </InputContainer>
  )
}

export default FormInputDate;