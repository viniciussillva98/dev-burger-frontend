import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: minmax(200px, 250px) 1fr;


main{
background-color: ${props => props.theme.secondWhite};
display: flex;
flex-direction: column;
flex: 1;
width: 100%;
height: 100vh;
overflow-y: auto;
}

section{
background-color: ${props => props.theme.secondWhite};
padding: 40px 20px;
max-width: 1200px;
width: 100%;
}
`