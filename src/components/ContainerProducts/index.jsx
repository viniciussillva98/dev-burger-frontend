import { SchoppingButton } from "../SchoppingButton";
import { Container, Img } from "./styles.js";
import { useCart } from "../../hooks/CartContext.jsx";


export function ContainerProducts({ product }) {

    const { putProductsInCart } = useCart()

    return (
        <Container>
            <div >
                <Img src={product.url} />
                <p>{product.name}</p>
            </div>

            <SchoppingButton
                product={product}
                onClick={() => putProductsInCart(product)}
            />

        </Container>
    )
} 