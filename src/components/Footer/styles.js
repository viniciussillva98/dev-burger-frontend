import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.backgrounTableTh};

p{
    color: ${props => props.theme.white};
    font-weight: lighter;
    font-size: 14px;
}
`