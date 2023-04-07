import Link from "next/link";
import Image from "next/image";
import FormInput from "../Form/FormInput";

import {
    ContainerStyles
} from "./ContainerStyles"

interface ContainerProps {
  children?: any,
}

const Container: React.FC<ContainerProps> = ({children}) => {
    
  return (
    <ContainerStyles>
      {children}
    </ContainerStyles>
  )
}
  
export default Container;