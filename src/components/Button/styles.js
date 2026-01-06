
import styled from "styled-components";

export const MyButton = styled.button`
width: 80%;
height: 40px;
margin-top:10px;
border: 1px solid ${props => props.theme.border};
border-radius: 15px;
background-color: transparent;
font-size: 26px;
font-weight: 400;
 font-family: "Road Rage", sans-serif;
 color: ${props => props.theme.white};
 line-height: 100%;


 &:active{
   border: 3px solid ${props => props.theme.border};
 }

`