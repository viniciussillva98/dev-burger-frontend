import { Container } from "./styles";
import img from "../../assets/shopping.png"

export function SchoppingButton({ product, ...props }) {
    return (
        <Container {...props}>
            {product.currencyValue}
            <img src={img} />
        </Container>
    )
} 