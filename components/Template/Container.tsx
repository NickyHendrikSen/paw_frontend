import Link from "next/link";
import Image from "next/image";
import FormInput from "../Form/FormInput";

import {
    ContainerStyles
} from "./ContainerStyles"

interface ContainerProps {
  children?: any,
  paddingTop?: string,
  paddingBottom?: string,
  fullWidthResponsiveness?: number, //in px
}

const Container: React.FC<ContainerProps> = ({children, paddingTop = "0px", paddingBottom = "0px", fullWidthResponsiveness = 670}) => {
    
  return (
    <ContainerStyles paddingTop={paddingTop} paddingBottom={paddingBottom} fullWidthResponsiveness={fullWidthResponsiveness}>
      {children}
    </ContainerStyles>
  )
}
  
export default Container;