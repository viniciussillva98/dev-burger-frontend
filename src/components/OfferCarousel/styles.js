
import styled from "styled-components";

export const ContainerCarrossel = styled.div`
padding-top:20px;
.carousel-item{
  padding-left: 5px;
  padding-right: 47px;
  cursor: grab;
}


overflow-x: hidden;

.react-multi-carousel-list{
    overflow: visible;
   
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
margin-bottom: 40px;
margin-top: 30px;
`


