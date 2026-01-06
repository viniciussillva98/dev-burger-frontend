

import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`
export const LeftContainer = styled.div`
background-color: ${props => props.theme.black};
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
justify-content: center;
align-items: center;
img{
    width: 50%;
}

`



export const RightContainer = styled.div`
background-color: ${props => props.theme.darkBlack};
background-size: cover;
background-position: center;


height: 100%;
width: 100%;
max-width: 50%;

display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
padding-top: 50px;

p{
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ffff; 
    font-size: 15px; 
    font-weight: 500;

}

`;
export const Title = styled.h1`
font-family: "Road Rage", sans-serif;
color: ${props => props.theme.white};
font-weight: 400;
font-size: 44px;
margin-bottom: 50px;
span{
    font-family: "Road Rage", sans-serif;
    color: ${props => props.theme.blue};
}

`;
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
padding: 20px;
width: 100%;
max-width: 400px;

`;
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;

label{
    color: ${props => props.theme.white};
    font-size: 14px;
    font-weight: 500;
}

input{
   background-color: transparent;
   border: 1px solid ${props => props.theme.border};
   color: ${props => props.theme.white};

   width: 100%;
   height: 36px;
   margin: 3px 0;
   border-radius: 3px;
   padding: 5px 10px;
   margin-bottom: 10px;
}
p{
    color: ${props => props.theme.redError};
    font-size: 14px;
    height: 10px;
}
`;

export const Link = styled(ReactLink)`
text-decoration: none;
font-family: "Road Rage", sans-serif;
font-size: 25px;
font-weight: 400;
color: ${props => props.theme.blue};

&&:hover{
color: ${props => props.theme.blue2};
}


`