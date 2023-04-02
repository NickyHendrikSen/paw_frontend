import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  // overflow-y: hidden;
`

export const LeftContainer = styled.div`
  padding: 40px;
  width: 50%;
  background-color: var(--color-blue);
`

export const LogoSection = styled.div`
  height: 90px;
  img {
    width: auto;
    height: 90px;
  }
`

export const MidSection = styled.div`
  position: absolute;
  top: calc(50vh - 180px);
  left: calc(25vw - 240px);
  width: 480px;
  height: 480px;
  background-color: black; 
`

export const LoginButton = styled.button`
  border: 1px solid white;
  width: 270px;
  height: 70px;
  background: transparent;
  color: white;
  font-family: Lato;
  font-size: 24px;
`

export const RightContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 25%, rgba(24, 24, 24, .4) 75%), url('/images/dog-login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`