import styled from "styled-components";

export const Image = styled.img`
width: 100px;
max-height: 80px;

`
export const ContainerQuantity = styled.div`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;

button{
    background-color: ${props => props.theme.gren};
    color: ${props => props.theme.white};
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: none;

    font-size: 20px;
    display: flex;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    transition: 500ms;
&:hover{
    background-color: ${props => props.theme.grenhover};
}
}


span{
   font-weight: 600;
}
`

export const StyleTotal = styled.p`
font-weight: 600;

`

export const EmpityCart = styled.p`
min-height: 40px;
font-size: 14px;
font-weight: 200;
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.white}
`

export const StyleTrash = styled.p`
color: ${props => props.theme.white};
font-size: 20px;
cursor: pointer;
transition: 500ms;
&:hover{
   transform: translateY(-3px);
   color: ${props => props.theme.darkred2};
}
`

export const Container = styled.div``