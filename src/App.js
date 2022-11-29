import { useState } from "react"
import Header from "./components/Header/Header"
import CartScreen from "./screens/Cart/CartScreen"
import ProductsScreen from "./screens/Products/ProductsScreen"

function App() {

    const [activeScreen, setActiveScreen] = useState("ProductsScreen")
    const [cart, setCart] = useState([])

    const goToProductsScreen = () => {
        setActiveScreen("ProductsScreen")
    }

    const goToCartScreen = () => {
        setActiveScreen("CartScreen")
    }


    const renderScreen = () => {
        switch (activeScreen) {
            case "ProductsScreen":
                return <ProductsScreen addToCart={addToCart} />
            case "CartScreen":
                return <CartScreen 
                cart={cart}
                decreaseQuantityInCart={decreaseQuantityInCart} 
                increaseQuantityInCart={increaseQuantityInCart}
                deleteFromCart={deleteFromCart}/>
            default:
                return <div> Tela Não Existe </div>
        }
    }


    const addToCart = (productToAdd) => {
        const newCart = [...cart]
        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToAdd.id)
        if (!productFound) {
            const newProduct = { ...productToAdd, quantity: 1 }
            newCart.push(newProduct)
        } else {
            productFound.quantity++
        }
        setCart(newCart)
    }

    const increaseQuantityInCart = (productToIncrease) => {
        const newCart = [...cart]
        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToIncrease.id)
        productFound.quantity++
        setCart(newCart)
    }


    const decreaseQuantityInCart = (productToDecrease) => {
        const newCart = [...cart]
        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToDecrease.id)
        productFound.quantity--
        setCart(newCart)
    }
    
    const deleteFromCart = (productToDelete) => {
        const newCart = [...cart]
        const indexFound = newCart.findIndex(
          (productInCart) => productInCart.id === productToDelete.id
        )
        newCart.splice(indexFound, 1)
        setCart(newCart)
      }

    return (
        <>
            <Header
                goToCartScreen={goToCartScreen}
                goToProductsScreen={goToProductsScreen}
                itemsInCart={cart.length} />

            {renderScreen()}
        </>)


}

export default App