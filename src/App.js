import React, { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import CartScreen from "./screens/Cart/CartScreen"
import ProductsScreen from "./screens/Products/ProductsScreen"

function App() {

    const [activeScreen, setActiveScreen] = useState("ProductsScreen")
    const [cart, setCart] = useState([])
    const [filterText, setFilterText] = useState("")
    const [orderByPrice, setOrderByPrice] = useState("")
    const [orderByName, setOrderByName] = useState("")
    const [selectSide, setSelectSide] = useState("")
    const [lowPrice, setLowPrice] = useState()
    const [highPrice, setHighPrice] = useState()
    const [filterByMinAndHighPrice, setFilterByMinAndHighPrice] = useState("")

    const goToProductsScreen = () => {
        setActiveScreen("ProductsScreen")
    }

    const goToCartScreen = () => {
        setActiveScreen("CartScreen")
    }

    const renderScreen = () => {
        switch (activeScreen) {
            case "ProductsScreen":
                return <ProductsScreen
                    addToCart={addToCart}

                    filterText={filterText}
                    setFilterText={setFilterText}

                    orderByName={orderByName}
                    setOrderByName={setOrderByName}

                    orderByPrice={orderByPrice}
                    setOrderByPrice={setOrderByPrice}

                    selectSide={selectSide}
                    setSelectSide={setSelectSide}

                    lowPrice={lowPrice}
                    setLowPrice={setLowPrice}

                    highPrice={highPrice}
                    setHighPrice={setHighPrice}

                    filterByMinAndHighPrice={filterByMinAndHighPrice}
                    setFilterByMinAndHighPrice={setFilterByMinAndHighPrice}

                />

            case "CartScreen":
                return <CartScreen
                    cart={cart}
                    decreaseQuantityInCart={decreaseQuantityInCart}
                    increaseQuantityInCart={increaseQuantityInCart}
                    deleteFromCart={deleteFromCart}

                />
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


    const onChangeFilterText = (e) => {
        setFilterText(e.target.value)
    }

    useEffect(() => {
        if (cart.length > 0) {
            const cartString = JSON.stringify(cart)
            localStorage.setItem("Carrinho", cartString)
        }
    }, [cart])

    useEffect(() => {
        const cartGet = localStorage.getItem("Carrinho")
        if (cartGet !== null) {
            const cartArray = JSON.parse(cartGet)
            setCart(cartArray)
        }
    }, [])

    return (
        <>
            <Header
                goToCartScreen={goToCartScreen}
                goToProductsScreen={goToProductsScreen}
                
                itemsInCart={cart.length}

                filterText={filterText}
                onChangeFilterText={onChangeFilterText}

                orderByName={orderByName}
                setOrderByName={setOrderByName}

                orderByPrice={orderByPrice}
                setOrderByPrice={setOrderByPrice}

                selectSide={selectSide}
                setSelectSide={setSelectSide}

                lowPrice={lowPrice}
                setLowPrice={setLowPrice}

                highPrice={highPrice}
                setHighPrice={setHighPrice}

                filterByMinAndHighPrice={filterByMinAndHighPrice}
                setFilterByMinAndHighPrice={setFilterByMinAndHighPrice}

            />

            {renderScreen()}
        </>)


}

export default App
