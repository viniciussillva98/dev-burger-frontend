import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useEffect, useState } from "react"
import { api } from "../../../services/api.js"
import { ButtonEditPrd, Container, ImagePrd } from "./styled.js"
import { CheckCircleIcon, NotePencilIcon, XCircleIcon } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice.js';
import { useNavigate } from 'react-router-dom';


export function Products() {

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function loadproducts() {
            const { data } = await api.get("/products")

            setProducts(data)
        }
        loadproducts()
    }, [])

    const isOffer = (info) => {
        if (info) {
            return <CheckCircleIcon size={25} weight="fill" color='green' />
        } else {
            return <XCircleIcon size={25} weight="fill" color='red' />
        }
    }

    const editPrd = (infoprd) => {
        navigate("/admin/editar-produto", { state: { infoprd } })
    }


    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome do produto</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em oferta</TableCell>
                            <TableCell align="center">Imagem do produto</TableCell>
                            <TableCell align="center">Editar o produto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((prd) => (
                            <TableRow
                                key={prd.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {prd.name}
                                </TableCell>
                                <TableCell align="center">{formatPrice(prd.price)}</TableCell>
                                <TableCell align="center">{isOffer(prd.offer)}</TableCell>
                                <TableCell align="center"><ImagePrd src={prd.url} /></TableCell>
                                <TableCell align="center">
                                    <ButtonEditPrd onClick={() => editPrd(prd)}>
                                        <NotePencilIcon weight="light" />
                                    </ButtonEditPrd>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}