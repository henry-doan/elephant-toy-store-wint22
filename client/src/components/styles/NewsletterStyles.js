import styled from "styled-components";

export const PurpleBtn = styled.button`
  border: 2px solid #8999CC;
  background-color: #8999CC;
  border-radius: 24px;
  width: 163px;
  height: 48px;
  color: white;
  margin: 20px;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid #8999CC;
    color: #8999CC;
  }
`

export const InversePurpleBtn = styled.button`
  border: 2px solid white;
  background-color: white;
  border-radius: 24px;
  width: 163px;
  height: 48px;
  color: #8999CC;
  margin: 20px;
  &:hover {
    cursor: pointer;
    background-color: #8999CC;
    border: 2px solid #8999CC;
    color: white;
  }
`

export const MaxWidthDiv = styled.div`
  max-width: 40%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`

export const NavBtn = styled.button`
  border: 2px solid white;
  background-color: white;
  height: 48px;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid white;
    color: #8999CC;
  }
`

export const ParText1 = styled.p`
  font-size: 15px;
`

export const ParText2 = styled.p`
  color: #8999CC;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`