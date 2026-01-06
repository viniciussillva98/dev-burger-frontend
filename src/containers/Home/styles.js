import styled from "styled-components";
import BannerHome from "../../assets/banner-home.png"
import { Link } from "react-router-dom";



export const Main = styled.div`
width: 100vw;
background-color: black;
margin-top: 60px;
`


export const Banner = styled.div`
background: url(${BannerHome});
background-size: cover;
background-position: center;
position: relative;
height: 380px;

h1{
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  color: #ffff;
  font-size: 70px; 
  position: absolute;
  left: 7%;
  top : 27%;
}
`
export const Container = styled.section`
background-color: ${props => props.theme.darkBlack};
width: 100vw;
min-height: 65vh;
padding: 0 155px;
`

export const ContainerCategories = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
width: 90vw;

h3{
  color: ${props => props.theme.white};
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
}

`

export const LinkAdmin = styled(Link)`
font-size: 15px;        
border-radius: 18px;
text-decoration: none;
color: ${props => props.theme.gren};
padding: 5px 5px;
text-align: center;
border: 2px solid ${props => props.theme.gren};
width: 30%;

`