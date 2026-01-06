
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext({})

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])


    const putProductsInCart = (product) => {

        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        let newProducts = []

        if (cartIndex >= 0) {
            newProducts = cartProducts

            newProducts[cartIndex].quantity =
                newProducts[cartIndex].quantity + 1

            setCartProducts(newProducts)
        } else {
            product.quantity = 1;
            newProducts = [...cartProducts, product]
            setCartProducts(newProducts)
            updateLocalStorage(newProducts)

        }
    }

    const deleteProducts = (productId) => {
        const filterCart = cartProducts.filter((prd) => prd.id !== productId)
        setCartProducts(filterCart)
        updateLocalStorage(filterCart)
    }

    const increaseProduct = (productId) => {
        const mapedCart = cartProducts.map((prd) => {
            return prd.id === productId ?
                { ...prd, quantity: prd.quantity + 1 } : prd
        })
        setCartProducts(mapedCart)
        updateLocalStorage(mapedCart)
    }

    const decraseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)
        if (cartProducts[cartIndex].quantity > 1) {
            const mapedCart = cartProducts.map((prd) => {
                return prd.id === productId ?
                    { ...prd, quantity: prd.quantity - 1 } : prd
            })
            setCartProducts(mapedCart)
            updateLocalStorage(mapedCart)
        } else {
            deleteProducts(productId)
        }
    }

    const clearCart = () => {
        setCartProducts([])
        updateLocalStorage([])
    }




    const updateLocalStorage = (products) => {
        localStorage.setItem("productsCart", JSON.stringify(products))
    }

    useEffect(() => {
        const clientData = localStorage.getItem("productsCart")
        if (clientData) {
            setCartProducts(JSON.parse(clientData))
        }

    }, [])

    return (
        <CartContext.Provider value={{ cartProducts, putProductsInCart, increaseProduct, decraseProduct, deleteProducts, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("Tem que ser usado com um contexto...")
    }

    return context
}