import styled from "styled-components";

export const Container = styled.button`
background-color: transparent;
width: auto;
min-width: 90%;
border: 1px solid ${props => props.theme.contentColor};
border-radius: 15px;
background-color: transparent;
height: 40px;
 &:active{
   border: 2px solid ${props => props.theme.contentColor};
 }
color: ${props => props.theme.contentColor};
font-weight: 600;
font-size: 18px;
line-height: 80%;
display: flex;
gap: 8px;
justify-content: space-between;
align-items: center;
padding: 0 35px;
`
// color: ${props => props.theme.white};
