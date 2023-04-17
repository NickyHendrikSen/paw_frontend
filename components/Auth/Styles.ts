import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  // overflow-y: hidden;
`

export const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 25%, rgba(24, 24, 24, .4) 75%), url('/images/dog-login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const LogoSection = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 80px;

  img {
    width: auto;
    height: 100%;
    transition-duration: 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const MidSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MidSection = styled.div`
  height: auto;
  display: flex;
  align-items: center;
`

export const MidSectionContent = styled.div`
  width: 480px;
  text-align: center;

  & > form > div {
    margin-left: auto;
    margin-right: auto;
  }
`

export const TitleText = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
` 

export const Info = styled.div`
  color: white;
  margin-top: 35px;
  font-style: italic;

  & > a {
    margin-left: 5px;
    color: white;
    font-size: 15px;
    
    &:hover {
      font-weight: bold;
    }
  }
`

export const RightContainer = styled.div`
  padding: 40px;
  width: 50%;
  background-color: var(--color-blue);
`