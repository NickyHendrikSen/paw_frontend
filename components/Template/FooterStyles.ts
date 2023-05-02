import styled from "styled-components"

export const FooterSection = styled.footer`
  margin-top: 105px;
  background-color: var(--color-blue);
  color: white;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 130px;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`

export const LogoSlogan = styled.div`
  img {
    height: 43px;
    width: 121px;
  }
  .slogan {
    font-family: var(--font-helvetica);
    font-weight: bold;
    text-align: center;
  }
`

export const Links = styled.div`
  a, div {
    display: block;
    position: relative;
    color: white;
    font-size: 15px;
    margin-top: 16px;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.2s;
    
    span {
      position: relative;
      padding: 2px;
    }

    &:before {
      content: "";
      height: calc(100% + 4px);
      position: absolute;
      display: block;
      top: -2px;
      left: -2px;
      background: white;
      width: 0;
      opacity: 0.2;
      transition-duration: 0.2s;
    }
    &:hover {
      &:before {
        width: calc(100% + 4px);
      }
    }
  }
`

export const BottomWrapper = styled.div`
  padding-top: 50px;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid white;
`

export const SocialMediaSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;
  transition-duration: 0.2s;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: white;
    color: var(--color-blue);
  }
`

export const CopyrightText = styled.div`
  text-align: center;
  margin-top: 25px;
`