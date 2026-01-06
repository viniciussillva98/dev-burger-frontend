

import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Menu, Cart, Checkout, CompletPayment, NewProduct, EditProduct, Orders } from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { Products } from "../containers/Admin/Products";
export function Routers() {

    return (
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/complet" element={<CompletPayment />} />

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Products />} />
            </Route>

            <Route path="/" element={<UserLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
            </Route>
        </Routes>
    )
}



