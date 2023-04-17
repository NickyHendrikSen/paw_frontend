import styled from "styled-components"

export const InputContainer = styled.div<{
  width?: string,
  marginTop?: string,
  marginBottom?: string,
  isDark: boolean
  }>`
  display: flex;
  border-bottom: 1px solid ${props => props.isDark ? 'black;' : 'white;'};;
  ${props => props.width ? `width: ${props.width};` : `width: 100%;`}
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}


  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
`

export const IconWrapper = styled.div<{isDark: boolean}>`
  display: inline-block;
  color: ${props => props.isDark ? 'black;' : 'white;'};;
  vertical-align: middle;
  svg {
    height: 100%;
    width: 20px;
  }
  margin-right: 3px;
  margin-left: 3px;
`

export const InputStyles = styled.input<{isDark: boolean}>`
  width: 100%;
  font-size: 18px;
  border: none;
  background: none;
  outline: none;
  color: ${props => props.isDark ? 'black;' : 'white;'};
  padding: 5px 2px;
  
  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`

export const ErrorStyles = styled.div`
  color: var(--color-red);
  font-size:
`