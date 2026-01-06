import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap:20px;

`


export const Content = styled.div`
    border-radius: 22px;
    background-color: ${props => props.theme.darkcontainer};

 .containerTop{
    color: ${props => props.theme.white};
    display: grid;
    grid-gap: 10px 20% ;
    grid-template-areas:
    "title title"
    "items priceItems"
    "delivery delivertTax"
    ;
    
.title{
    background-color: ${props => props.theme.backgrounTableTh};
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    padding: 9px;
    margin-bottom: 40px;
    text-align: center;
    grid-area: title;
}
.items{
    padding-left: 20px;
    grid-area: items;
}
.priceItems{
    padding-right: 20px;
    grid-area: priceItems;
}
.delivery{
    padding-left: 20px;
    grid-area: delivery;
}
.delivertTax{
    padding-right: 20px;
    grid-area: delivertTax;
}
}

.containerBottom{
    color: ${props => props.theme.white};
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding: 50px 30px 20px 20px;

    span{
        color: ${props => props.theme.grenhover}
    }
}
`
export const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;

`