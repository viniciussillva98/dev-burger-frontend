import styled from "styled-components";
import banner from "../../assets/bannerMenu.png"
import { Link } from "react-router-dom";


export const Container = styled.div`
margin-top: 60px;
width: 100vw;
height: 100%;
background-color: ${props => props.theme.darkBlack};
`
export const Banner = styled.div`
background: url(${banner});
background-color: ${props => props.theme.darkBlack};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 380px;
position: relative;



h1{
    font-size: 70px;
    font-weight: 400;
    color:${props => props.theme.white};
    font-family: ${props => props.theme.roadRageFont};
    position: absolute;
    top: 11%;
    right: 20%
}

span{
    display: block;
    color:${props => props.theme.white};
    font-size: 18px;
}

`


export const CategoryMenu = styled.div`
padding: 10px 0;
display: flex;
gap: 85px;
justify-content: center;

`

export const CategoryLinks = styled(Link)`
text-decoration: none;
color:  ${props => props.$isActiveCategory ?
    props => props.theme.grenhover :
    props => props.theme.transparentWhite};
font-size: 21px;
font-weight: 500;
background-color: transparent;
border: none;
&:hover{
  color:${props => props.$isActiveCategory ?
    props => props.theme.grenhover :
    props => props.theme.hoverWhite};
}

`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 5% 19%;
gap: 70px;
`






