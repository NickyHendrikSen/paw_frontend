import { TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
// import { Map } from 'react-store-locator';




const locations = [
  {
  id: 1,
  lat: 50,
  lng: 25.1,
  show: false,
  name: 'First Marker'
},
{
  id: 2,
  lat: 50,
  lng: 25.2,
  show: true,
  name: 'Second Marker'
},
{
  id: 3,
  lat: 50,
  lng: 25.3,
  show: true,
  name: 'Third Marker'
}
]

const Location: React.FC = () => {
  return (
    <Container paddingTop="50px">
      <TitleText>Our Store Location</TitleText>
        {/* <Map locations={locations} googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/> */}
    </Container>
  )
}

export default Location;