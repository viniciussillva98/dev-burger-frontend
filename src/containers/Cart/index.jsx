import logo from "../../assets/burger.png"
import { CartItems, CartResume } from "../../components"
import { Banner, Container, Content, Title } from "./styles"


export function Cart() {

    return (
        <Container>
            <Banner>
                <img src={logo} alt="logo-dev" />
            </Banner>
            <Title>Checkout - Pedido</Title>

            <Content>
                <CartItems />
                <CartResume />
            </Content>

        </Container>
    )
}