import styled from "styled-components";
import ReactSelect from "react-select"


export const Container = styled.div`
display: flex; 
justify-content: center; 
align-items: center; 
min-height: 80vh;
`
export const Form = styled.form`
border-radius: 15px;
background-color: ${(props) => props.theme.blacktransparent};
max-width: 350px;
width: 100%;
padding: 26px;
display: flex;
flex-direction: column;
gap: 15px;
`
export const ContainerIput = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
`
export const Label = styled.label`
color: ${(props) => props.theme.white};
font-size: 17px;
`
export const Inputs = styled.input`
width: 100%;
height: 40px;
border-radius: 5px;
padding: 0 10px;
border: none;
`
export const LabelUpload = styled.label`
cursor: pointer;
border: 2px dashed ${(props) => props.theme.white};
border-radius: 2px;
width: 100%;
height: auto;
padding: 10px;
display: flex;
color: ${(props) => props.theme.white};
justify-content: center;
align-items: center;
margin: 20px 0;

> svg{
    width: 25px;
    height: 25px;
    fill: ${(props) => props.theme.white}; //color da imagenzinha ali..
    margin-right: 10px;
}

input{
    display: none; //o display none esconde o input de upload e mosytra so a imgem que foi importada <ImageIcon />
}
`
export const Select = styled(ReactSelect)``


export const ContainerCheckbox = styled.div`
display: flex;
font-size: 17px;
align-items: center;
gap: 10px;
margin-top: 10px;

input{
    cursor: pointer;

}
`
export const SubmitButton = styled.button`
border-radius: 5px;
height: 40px;
border: 1px solid ${props => props.theme.blue};
background-color: transparent;
padding: 7px 10px;
font-size: 15px;
font-weight: 500;
color: ${props => props.theme.blue};
&:hover{
  border: 2px solid ${props => props.theme.blue};
  
}
`

export const MessageError = styled.span`
color: ${(props) => props.theme.redError};
height: 10px;
`
