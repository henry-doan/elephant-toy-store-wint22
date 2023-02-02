import styled from "styled-components";
import { Modal, Card, ListGroup} from 'react-bootstrap';

export const GreyBackground = styled.section `
  background-color: #EFEFEF;
  margin: auto;
  padding: 30px;
`

export const addButton = styled.button`
  border: 2px solid #8999CC;
  background-color: #8999CC;
  border-radius: 24px;
  width: 163px;
  height: 48px;
  color: white;
  margin: 20px;
  align: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid #8999CC;
    color: #8999CC;
  }
`

export const ButtonSpace = styled.div `
  border: 2px solid white;
  background-color: #8999CC;
  border-radius: 24px;
  width: 140px;
  height: auto;
  color: white;
  margin: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: 2px solid #8999CC;
    color: #8999CC;
  }
  `

  export const WishModal = styled(Modal)`
  width: 80% !important;
  height: auto;
  border-radius: 20px !important;
  display: flex;
  position: absolute;
  margin: auto;
  text-align: center;
  overflow: scroll;
`

export const WishCard = styled(Card)`
  width: 15rem;
  hight: 80%;
  border-radius: 24px;
  display: flex;
`

export const DuckGroup =styled(ListGroup)`
  max-height: 300px;
  margin-bottom: 10px;
  overflow:scroll;
  -webkit-overflow-scrolling: touch;
`

export const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 400px;
  width: 100%;
`
