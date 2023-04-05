import React from "react"

import { 
  Container,
  BigText,
  SmallText
} from "./NotFoundStyles"

import notFoundImage from "../../public/images/404-image.png"
import Image from "next/image"

const NotFound: React.FC = () => {
  return (
    <Container>
      <Image src={notFoundImage} alt="404"/>
      <BigText>Whoops, did you get lost?</BigText>
      <SmallText>Your destination is not found, maybe you input the wrong address!</SmallText>
    </Container>
  )
}

export default NotFound;