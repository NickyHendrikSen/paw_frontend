import React from "react"

import { 
  ErrorText
} from "./FormErrorTextStyles"

type FormErrorTextProps = {
  fontSize?: string,
  children: any,
}

const FormErrorText: React.FC<FormErrorTextProps> = 
  ({fontSize = "15px", children=""}) => 
{
  // const [val, setVal] = useState("");

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputVal = e.target.value;
  //   console.log(inputVal);
  //   setVal(inputVal);
  // }

  return (
    <ErrorText fontSize={fontSize}>{children}</ErrorText>
  )
}

export default FormErrorText;