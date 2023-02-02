import styled from 'styled-components';
import link from 'react-router-dom'

export const ElephantHomeHead = styled.div`
position: absolute;
width: 1000px;
height: 480px;
left: 0px;
top: 0px;
background-image:
`
export const Card =styled.div`
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 10%;
  width: 90%;
  margin: 10px;
`
export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 10%;
  margin: 10px;
`
export const CardImg = styled.img`
  object-fit: cover;
  width: 250px;
  height: 277.78px;
  background: #8999CC;
  border-radius: 4px;
  position: relative
	display: flex
	align-items: flex-end
	transition: 0.4s ease-out
	box-shadow: 0px 7px 10px rgba(black, 0.5)
`
export const Cardinfo = styled.div`

`

export const TeamCenter = styled.div`
display: table-row-group;
width: 90%;
margin: auto;

`

export const FooterContainer = styled.footer` 
height: 241px; 
text-align: center;
background: #2E2E2E;
color: #FFFFFF;
position: center;
bottom: 0;
width: 100%;

`

export const FooterTitles = styled.h3`
font-weight: 900 !important;
font-size: 24px;

`

export const FooterSocialBTN = styled.button`
background: transparent; 
border-radius: 50%;
border: 1px solid #DADADA;
padding: 5px;
position: center;
text-align: center;
width: 30px;

`

export const FooterSocialCol = styled.div `
margin: 0px 10px;
`

export const FooterTitleSans = styled.h5`
font-weight: 400 !important;
font-size: 16px;
color: #6C6C6C;

`