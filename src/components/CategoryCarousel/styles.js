

import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCarrossel = styled.div`
padding-top:20px;
.carousel-item{
  padding-right: 24px;
   cursor: grab;
}

.react-multi-carousel-list{ 
    position: unset;  // deixa as setas do lado do carrocel class dentro do inspecionar no navegador.
    
}

.react-multiple-carousel__arrow--left {
    left: calc(6% + 1px);       //deixa seta da esquerda mais perto do carroucel.
}

.react-multiple-carousel__arrow--right {
    right: calc(8% + 1px);     //deixa seta da direita mais perto do carroucel.
    z-index: 2;
}
`

export const Titulo = styled.h1`
font-family: ${props => props.theme.roadRageFont};
font-weight: 500;
line-height: 20px;
color: ${props => props.theme.white};
font-size: 38px;
position: relative;
text-align: center;
padding-bottom: 20px;
margin-bottom: 20px;

`

export const ContainerItems = styled.div`
background: url(${props => props.$imageUrl});
background-size: cover;
background-position: center;

display: flex;
align-items: flex-end;
padding-bottom: 5px;
justify-content: center;

width: 90%;
height: 180px;
border-radius: 9px;


`

export const ContegoryNames = styled(Link)`
text-decoration: none;
background-color: ${props => props.theme.blacktransparent2};
border: none;
height: 30px;
border-radius: 50px;
min-width:100px;

color: ${props => props.theme.white};
font-weight: 600;
font-size: 18px;
line-height: 100%;
padding: 5px 18px;
z-index: 2;
&:hover{
    color: ${props => props.theme.grenhover}
}
;
`

// gren: '#1d7e22ff',
// grenhover: '#23b02aff',