import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  ${props => props.width ? `width: ${props.width};` : `width: 100%;`}
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}


  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
`

export const IconWrapper = styled.div`
  display: inline-block;
  color: white;
  vertical-align: middle;
  svg {
    height: 100%;
    width: 20px;
  }
  margin-right: 3px;
  margin-left: 3px;
`

export const InputStyles = styled.input`
  width: 100%;
  font-size: 18px;
  border: none;
  background: none;
  outline: none;
  color: white;
  padding: 5px 2px;
  
  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`