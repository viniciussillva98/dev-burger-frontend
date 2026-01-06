import styled from "styled-components";
import Select from "react-select"

export const ProductImage = styled.img`
width: 100px;
padding: 12px;
border-radius: 16px;
`

export const SelectStatus = styled(Select)`
  width: 220px;

`

export const FiltrContainerMenu = styled.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
padding: 20px 0;
`


export const ButtonsMenu = styled.button`
background-color: transparent;
border: none;
font-size: 19px;
font-weight: 600;
color: ${props => props.$isActive ?
    props => props.theme.blue :
    props => props.theme.secondBlack};

&:hover{
  color: ${props => props.$isActive ?
    props => props.theme.blue :
    props => props.theme.darkGray};
}
`