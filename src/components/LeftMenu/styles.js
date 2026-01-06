import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

background-color: ${props => props.theme.backgrounTableTh};
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
align-items: center;
img{
    padding: 25px 0;
    width: 65%;
}
`
export const OptionContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const Option = styled(Link)`
display: flex;
align-items: center;
gap: 10px;
padding: 10px 20px;
text-decoration: none;
color: ${props => props.$optionActive ?
                props => props.theme.blue :
                props => props.theme.lightGray};
&:hover{
   color: ${props => props.$optionActive ?
                props => props.theme.blue :
                props => props.theme.hoverWhite}
}

`

export const Footer = styled.footer`
width: 100%;
margin-top: auto;

`

export const LogoutLink = styled(Link)`
display: flex;
align-items: center;
gap: 10px;
padding: 10px 20px;
text-decoration: none;
color: ${props => props.theme.white};
 &:hover{
        color: ${props => props.theme.darkred2};
    
}
`