import { useState } from "react";
import Header from "../../components/Header/Header"
import products from "../../product/productsData.json"
import { getColors } from "../../utils/ReturnCardColor";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Main } from "./ProductsScreen.styled";
import { Background } from "./ProductsScreen.styled";

function ProductsScreen(props) {


    const { addToCart,
        filterText,
        orderByName,
        orderByPrice,
        selectSide,
    } = props



    return (

        <Main>
            <Background />
            <section >

                <h1>Produtos</h1>
                {products

                    //ORDER BY NAME
                    .sort((a, b) => {
                        if (orderByName === "crescente") {
                            return a.name.english < b.name.english ? -1 : 1
                        }
                        else if (orderByName === "decrescente") {
                            return a.name.english < b.name.english ? 1 : -1
                        }
                    })

                    // ORDER BY PRICE
                    .sort((a, b) => {
                        if (orderByPrice === "menor") {
                            return a.price < b.price ? -1 : 1
                        }
                        else if (orderByPrice === "maior") {
                            return a.price < b.price ? 1 : -1
                        }
                    })

                    //SELECT FORCE SIDE
                    .filter((products) => {
                        return selectSide ? products.type.includes(selectSide) : products
                    })

                    //FILTER BY TEXT
                    .filter((products) => products.name.english.toLowerCase().includes(filterText))


                    .map((product) => (
                        <ProductCard
                            cardColor={getColors(product.type[0])}
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            isOnProductsScreen={true}
                        />
                    ))
                }

            </section>
        </Main>
    )
}

export default ProductsScreen
