import styled from "styled-components";

export const TableContainer = styled.table`
width: 100%;
border-collapse: collapse;
background-color: ${props => props.theme.darkcontainer};
border-radius: 22px;

`
export const Header = styled.thead``
export const Tr = styled.tr``

export const Th = styled.th`
padding: 13px;
text-align: left;
font-size: 17px;
font-weight: 600;
letter-spacing: 1px;
color: ${props => props.theme.white}; 
background-color: ${props => props.theme.backgrounTableTh};

&:first-child{
    border-top-left-radius: 22px;
}

&:last-child{
    border-top-right-radius: 22px;
}

`
export const Td = styled.td`
padding: 13px;
font-weight: 500;
line-height: 115%;
color: ${props => props.theme.white}; 

`
export const Body = styled.tbody``