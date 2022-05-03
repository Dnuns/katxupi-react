import styled, {keyframes} from "styled-components";

const shake1 = keyframes`
 10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const shake2 = keyframes`
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

const me = keyframes`
  from {
    transform: rotateZ(-5deg);
  }
  to {
    transform: rotateZ(5deg);
  }
`;

export const FaceContainer = styled.div`
    margin: 0 auto;
    max-width:600px;
    display: flex;
    justify-content: center;
    animation: ${me} 1s ease infinite alternate;
    transform-origin: bottom;

    &:hover{
        animation: ${shake1} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
        animation: ${shake2} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
`;