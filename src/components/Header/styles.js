import { Link } from "react-router-dom";
import styled from "styled-components";
import { CaretLeftIcon } from "@phosphor-icons/react";

export const Container = styled.div`
background-color: ${props => props.theme.backgrounTableTh};
width: 100vw;
height: 60px;
padding: 0 50px;
position: fixed;
top: 0;
left: 0; 
z-index: 999;

`
export const Image = styled.div`
img{
    height: ${props => props.$Active ? "0px" : ("40px")} ;
}

`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 70px;
margin: 0 auto;


`
export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 70px;
gap: 30px;

hr{
  height: 20px;
  border: 1px solid ${props => props.theme.secondBlack};
}

div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

`

export const HeaderLink = styled(Link)`
color: ${props => props.$Active ?
        props => props.theme.blue :
        props => props.theme.lightGray};
padding: 5px;
font-size: 17px;
font-weight: 500;
&:hover{
   color: ${props => props.$Active ?
        props => props.theme.blue :
        props => props.theme.hoverWhite}
}


`

export const CartLink = styled(Link)`
padding: 5px;
position: relative;

&::after{
    content:"";
    position: absolute;
    background-color: ${props => props.$isProductInCart ?
        props => props.theme.contentColor : "trasparent"};
    height: 6.5px;
    width: 6.5px;
    border-radius: 100%;
    top: 5px;
    right: 4px;
    
 
}
`

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 60px;
`
export const Profile = styled.div`
display: flex;
gap: 8px;
font-size: 18px;


div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
   p{
    color: ${props => props.theme.secondWhite};
    font-size: 14px;
    font-weight: 300;
   }

   span{
    cursor: pointer;
    color: ${props => props.theme.blue};
    font-weight: 600;
   }
}


`

export const ProfileButton = styled.button`
border: none;
font-weight: 600;
background-color: transparent;
color: ${props => props.theme.white};

&:hover{
    color: ${props => props.theme.hoverWhite};
}
`


export const Icon = styled(CaretLeftIcon)`
color: ${props => props.$Active ? "transparent" : "#ffff"};  
font-size: 25px;

`