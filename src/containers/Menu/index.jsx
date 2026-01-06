import { useEffect, useState } from "react";
import { Banner, CategoryLinks, CategoryMenu, Container, ProductsContainer } from "./styles";
import { api } from "../../services/api.js"
import { formatPrice } from "../../utils/formatPrice.js"
import { ContainerProducts } from "../../components/ContainerProducts"
import { useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css"



export function Menu() {



    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const { search } = useLocation()
    const queryparams = new URLSearchParams(search)
    const [activeCategory, setActiveCategory] = useState(() => {
        const categId = +queryparams.get("categ")
        if (categId) {
            return categId
        }
        return 0

    })


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories")

            const newCategory = [{ id: 0, name: "Todas" }, ...data]
            setCategories(newCategory)

        }

        async function loadProducts() {
            const { data } = await api.get("/products")

            const newProduct = data.map((product) => (
                { currencyValue: formatPrice(product.price), ...product }))
            setProducts(newProduct)

        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const filtering = products.filter(
                (product) => product.category_id === activeCategory)
            setFilteredProducts(filtering)
        }
    }, [products, activeCategory])


    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                    <br />
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>


            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryLinks
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        to={{
                            pathname: "/cardapio",
                            search: `?categ=${category.id}`
                        }}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}

                    </CategoryLinks>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <ContainerProducts key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    )
}