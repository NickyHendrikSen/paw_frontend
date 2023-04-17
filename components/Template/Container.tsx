import Link from "next/link";
import Image from "next/image";
import FormInput from "../Form/FormInput";

import {
    ContainerStyles
} from "./ContainerStyles"

interface ContainerProps {
  children?: any,
  paddingTop?: string,
  paddingBottom?: string
}

const Container: React.FC<ContainerProps> = ({children, paddingTop = "0px", paddingBottom = "0px"}) => {
    
  return (
    <ContainerStyles paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </ContainerStyles>
  )
}
  
export default Container;