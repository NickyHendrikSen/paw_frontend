import styled from "styled-components"

export const ButtonStyles = styled.button<{
  width?: string,
  height?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  paddingHorizontal?: string,
  paddingVertical?: string,
  fontSize: number,
  fill?: boolean,
}>`
  padding: 8px 16px;
  cursor: pointer;
  ${props => props.width && `width: ${props.width};`}    
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${props => props.height && `height: ${props.height};`}    
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}  
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}  
  ${props => props.marginLeft && `margin-left: ${props.marginLeft};`}  
  ${props => props.marginRight && `margin-right: ${props.marginRight};`}  
  padding: ${props => props.paddingVertical ? props.paddingVertical : "0px"} ${props => props.paddingHorizontal ? props.paddingHorizontal : "0px"};
  font-size: ${props => props.fontSize ? `${props.fontSize};` : `15px;`}  
  transition-duration: 0.2s;

  &:hover {
    text-transform: scale(0.9);
  }

  ${props => 
    props.fill ?
    `
      border: 1px solid white;
      color: var(--color-blue);
      background: white;
      &:hover {
        background-color: var(--color-blue);
        color: white;
      }
    `
    : `
      border: 1px solid white;
      color: white;
      background: none;
      &:hover {
        background-color: white;
        color: var(--color-blue);
      }
    `}
  
`