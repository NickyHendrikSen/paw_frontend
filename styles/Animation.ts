import { keyframes } from "styled-components"

export const popUpAnimation = keyframes`
  0% { transform: scale(0) }
  60% { transform: scale(1.05) }
  75% { transform: scale(0.95) }
  90% { transform: scale(1.025) }
  100% { transform: scale(1) }
`