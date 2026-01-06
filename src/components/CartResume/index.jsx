import { toast } from "react-toastify";
import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/CartContext.jsx";
import { Container, ContainerButton, Content } from "./styles.js";
import { Button } from "../Button"


export function CartResume() {

    const navigate = useNavigate()

    const [finalPrice, setFinalPrice] = useState(0)
    const [valueTax] = useState(500)

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])



    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            }
        })
        try {
            const { data } = await api.post("/create-payment-intent", { products })
            navigate("/checkout", { state: data })

        } catch (error) {
            toast.error("Falha no sistema tente novamente")
        }

    }

    return (
        <Container>
            <Content>
                <div className="containerTop">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Valor dos itens</p>
                    <p className="priceItems">{formatPrice(finalPrice)}</p>
                    <p className="delivery">Taxa de entrega</p>
                    <p className="delivertTax">{formatPrice(valueTax)}</p>
                </div>

                <div className="containerBottom">
                    <p>Total</p>
                    <span>{formatPrice(finalPrice + valueTax)}</span>
                </div>
            </Content>

            <ContainerButton>
                <Button onClick={submitOrder}>Finalizar o pedido</Button>
            </ContainerButton>
        </Container>
    );
} 