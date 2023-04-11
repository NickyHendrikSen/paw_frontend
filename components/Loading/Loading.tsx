import { CircularProgress } from "@mui/material";
import styled from "styled-components";

type LoadingProps = {
  minHeight?: string
}

const LoadingContainer = styled.div<{minHeight?: string}>`
  width: 100%;
  height: 100%;
  min-height: ${props => props.minHeight ? props.minHeight : "150px"};
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    color: var(--color-blue) !important;
  }
`

const Loading: React.FC<LoadingProps> = ({minHeight}) => {
  return (
    <LoadingContainer minHeight={minHeight}>
      <CircularProgress />
    </LoadingContainer>
  )
}

export default Loading;