import styled, { keyframes } from "styled-components"

const shake = keyframes`

  0% {
    transform: skewX(-15deg);
  }
  
  5% {
    transform: skewX(15deg);
  }
  
  10% {
    transform: skewX(-15deg);
  }
  
  15% {
    transform: skewX(15deg);
  }
  
  20% {
    transform: skewX(0deg);
  }
  
  100% {
    transform: skewX(0deg);
  }
`;

export const Text = styled.h1`
  animation: 0.8s ${shake} infinite alternate;
  font-size: 60px;
  user-select: none;

  @media (max-width: 480px) {
    font-size: 40px;
  }
`