import styled from "styled-components";


export const Container = styled.div`

background-color: ${props => props.theme.darkcontainer};
background-size: cover;


display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 20px;
padding: 20px 30px;
border-radius: 13px;
border: 1px solid #ffffff1f;
position: relative;


div{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 15px;   
} 

p{
    color: ${props => props.theme.white};
    font-weight: 600;
    font-size: 17px;
    line-height: 100%;
    margin-top: 20px;
    margin-bottom: 10px;

}    


`

export const Img = styled.img`
max-height: 99px;
position: absolute;
top: -50px;



`