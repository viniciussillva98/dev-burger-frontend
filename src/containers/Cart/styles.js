import styled from "styled-components";
import background from "../../assets/backgroundCart.png"

export const Banner = styled.div`
background: url(${background});
background-color: ${props => props.theme.darkBlack};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

&::after{
content: "";
height: 100%;
width: 100%;
background-color: #0000006c;
position: absolute;
}

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 190px;

img{
z-index: 99;
height: 150px;
}

`


export const Title = styled.h1`
font-family: "Road Rage", sans-serif;
font-weight: 500;
color: ${props => props.theme.white};
font-size: 38px;
position: relative;
text-align: center;
padding-bottom: 7px;
margin-top: 15px;


`


export const Container = styled.div`
margin-top: 60px;
background-color: ${props => props.theme.darkBlack};
width: 100vw;
min-height: 100vh;
`

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 30%;
gap: 40px;
width: 100%;
max-width: 1200px;
padding: 80px 40px;
margin: 0 auto;

`