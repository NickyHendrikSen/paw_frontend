import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: relative;
  height: 110px;
  border-bottom: 1px solid var(--color-light-gray);
  z-index: 10;
  box-shadow: 0px 2px 5px 1px var(--color-light-gray);
`

export const TopContainer = styled.div`
  width: 100%;
  height: 71px;
  padding: 12.5px 20px 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
`

export const LogoSection = styled.div`
  position:relative;
  margin-right: 3%;
  height: 100%;
  
  img {
    width: auto;
    height: 100%;
    transition-duration: 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

export const SearchSection = styled.div`
  width: 100%;
`

export const CartSection = styled.div<{hasItem: boolean}>`
  position: relative;
  width: 36px;
  margin-left: 25px;
  cursor: pointer;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: white;
    opacity: 0.2;
    left: -8px;
    top: -7px;
    border-radius: 4px;
    transition-duration: 0.2s;
  }

  ${props => props.hasItem ?
  `
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: -1px;
      right: -3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-red);
      transition-duration: 0.2s;
    }
  ` : ""}

  svg {
    vertical-align: middle;
    width: 25px;
    height: 25px;
    transition-duration: 0.2s;
    color: white;
  }

  &:hover {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      width: 36px;
      height: 36px;
      background-color: white;
      opacity: 0.2;
      left: -5px;
      top: -6px;
      border-radius: 4px;
    }
    &:after {
      transform: scale(0);
    }

    svg {
      transform: scale(1.1);
    }
  }
`

export const CartNumber = styled.div`
  position: absolute;
  top: 2px;
  left: 1px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  width: 100%;
  color: var(--color-blue);
`

export const LineDivider = styled.hr`
  vertical-align: middle;
  border: none;
  background: none;
  border-left: 1px solid var(--color-light-gray);
  height: 50%;
  width: 20px;
  margin-left: 25px;
`

export const BottomContainer = styled.div`
  width: 100%;
  height: 39px;
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;

  a {
    height: 100%;
    padding: 10px 15px;
    cursor: pointer;
    color: var(--color-gray);
    text-decoration: none;
    font-size: 14px;
    transition-duration: 0.2s;

    &:hover {
      background-color: rgb(0,0,0,0.05);
    }
  }
`

export const DropdownItem = styled.div`
  opacity: 0;
  overflow: hidden;
  height: 0;
  display: flex;
  position: absolute;
  top: 100%;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 1px 5px 1px var(--color-light-gray);
  transition-duration: 0.2s;
  & > a {
    width: 100%;
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    ${DropdownItem} {
      opacity: 1;
      height: 100%;
    }
    & > a {
      background-color: rgb(0,0,0,0.05);
    }
  }
`

export const DropdownProfile = styled.div`
  display: none;
  position: absolute;
  padding-top: 26px;
  top: 100%;
  color: white; 
  right: -16px;
  width: calc(100% + 16px);
`

export const DropdownProfileItem = styled.div`
  padding: 15px 10px;
  transition-duration: 0.2s;
  background: var(--color-blue);
  &:hover {
    background: var(--color-light-blue);
  }
`

export const ProfileHeader = styled.div`
  position: relative;
  width: 100px;
  margin-right: 15px;
  text-align: center;
  cursor: pointer;
  span {
    color: white;
    width: 100%;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  svg {
    vertical-align: middle;
    position: absolute;
    right: -16px;
    width: 16px;
    height: 16px;
    top: calc(50% - 6px);
    color: white;
  }
  &:hover {
    ${DropdownProfile} {
      display: block;
    }
  }
`