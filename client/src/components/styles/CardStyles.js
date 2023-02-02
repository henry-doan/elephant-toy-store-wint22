import styled from "styled-components";

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
`

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.2s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`

export const FlipCardFront = styled.div`
  position: absolute;
  width='300px'
  height='300px'
  border-radius: 24px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #8999CC;
  color: white;
  transform: rotateY(180deg);
`