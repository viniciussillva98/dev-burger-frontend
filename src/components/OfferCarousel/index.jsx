import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { ContainerCarrossel, Titulo } from "./styles.js"
import { ContainerProducts } from "../ContainerProducts/index.jsx"
import { formatPrice } from "../../utils/formatPrice.js"

export function OfferCarousel() {

    const [offer, setOffer] = useState([])

    useEffect(() => {
        async function loadOffer() {
            const { data } = await api.get("/products")

            const productOfers = data.filter((product) => product.offer)
                .map((product) => ({ currencyValue: formatPrice(product.price), ...product }))

            setOffer(productOfers)
        }
        loadOffer()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <ContainerCarrossel>
            <Titulo>Ofertas</Titulo>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={true}
                itemClass="carousel-item"
            >
                {offer.map((product) => (
                    <ContainerProducts key={product.id} product={product} />
                ))}

            </Carousel>
        </ContainerCarrossel>
    )
}