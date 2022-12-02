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
        lowPrice,
        highPrice,
       
    } = props

   let listraFiltrada = products

    {
        //FILTER BY TEXT
        if (filterText != null) {
            listraFiltrada= listraFiltrada.filter((products) => products.name.english.toLowerCase().includes(filterText))
        }

        //SELECT FORCE SIDE
        if (selectSide != null) {
            listraFiltrada= listraFiltrada.filter((products) => {
                return selectSide ? products.type.includes(selectSide) : products
            })
        }

        //FILTER MIN AND MAX PRICE
        if(lowPrice>0  && highPrice>0){
            listraFiltrada= listraFiltrada.filter((product) => product.price >= lowPrice && product.price <= highPrice )
            console.log("ambos",lowPrice,highPrice)
        }else if (lowPrice >0) {
            listraFiltrada= listraFiltrada.filter((product) => product.price >= lowPrice )
            console.log("low")
        } else if (highPrice >0) {
            listraFiltrada= listraFiltrada.filter((product) => product.price <= highPrice )
           console.log("hight")
        }
      

        //ORDER BY NAME
        if (orderByName != null) {
            listraFiltrada= listraFiltrada.sort((a, b) => {
                if (orderByName === "crescente") {
                    return a.name.english < b.name.english ? -1 : 1
                }
                else if (orderByName === "decrescente") {
                    return a.name.english < b.name.english ? 1 : -1
                }
            })
        }
        //ORDER BY PRICE
        if (orderByPrice != null) {
            listraFiltrada= listraFiltrada.sort((a, b) => {
                if (orderByPrice === "menor") {
                    return a.price < b.price ? -1 : 1
                }
                else if (orderByPrice === "maior") {
                    return a.price < b.price ? 1 : -1
                }
            })
        }

        return (

            <Main>
                <Background />
                <section >

                    <h1>Produtos</h1>
               
                               

                
                

                {listraFiltrada.map((product) => (
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
}
    export default ProductsScreen
