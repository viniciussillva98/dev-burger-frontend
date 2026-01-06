import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { ContainerCarrossel, ContainerItems, ContegoryNames, Titulo } from "./styles.js"


export function CategoriesCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories")

            setCategories(data)
        }
        loadCategories()
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
            <Titulo>Categorias</Titulo>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={true}
                itemClass="carousel-item"
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} $imageUrl={category.url}>
                        <ContegoryNames
                            to={{
                                pathname: "/cardapio",
                                search: `?categ=${category.id}`
                            }}

                        >
                            {category.name}
                        </ContegoryNames>
                    </ContainerItems>
                ))}

            </Carousel>
        </ContainerCarrossel>
    )
}