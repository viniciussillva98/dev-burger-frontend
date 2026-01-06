
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { ButtonsMenu, FiltrContainerMenu } from './styles';
import { orderStatusOptions } from './orderStatus';






export function Orders() {

    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [rows, setRows] = useState([])
    const [activeStatus, setActiveStatus] = useState(0)


    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get("/orders")
            setOrders(data)
            setFilteredOrders(data)
        }
        loadOrders()
    }, []);

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products,
        };
    }

    useEffect(() => {
        const newRows = filteredOrders.map((order) => createData(order))
        setRows(newRows)
    }, [filteredOrders]);


    const handleStatus = (option) => {
        if (option.id === 0) {
            setFilteredOrders(orders)
        } else {
            const newFilter = orders.filter(order => order.status === option.value)
            setFilteredOrders(newFilter)
        }

        setActiveStatus(option.id)
    }

    useEffect(() => {
        if (activeStatus === 0) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = orderStatusOptions.findIndex(order => order.id === activeStatus)
            const newFilterOrders = orders.filter(order => order.status === orderStatusOptions[statusIndex].value)
            setFilteredOrders(newFilterOrders)
        }
    }, [orders]);


    return (
        <>
            <FiltrContainerMenu>
                {orderStatusOptions.map(option => (
                    <ButtonsMenu
                        key={option.id}
                        onClick={() => handleStatus(option)}
                        $isActive={activeStatus === option.id}
                    >{option.label}</ButtonsMenu>
                ))}
            </FiltrContainerMenu>
            <TableContainer component={Paper} >
                <Table aria-label="collapsible table" className='table'>
                    <TableHead>
                        <TableRow >
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}