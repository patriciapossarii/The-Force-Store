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
        
     } = props

 /*
   {<Header
   buscaNome={buscaNome}
   setBuscaNome={setBuscaNome}
   
   ordernarNome={ordernarNome}
   setOrdernarNome={setOrdernarNome}
   
   ordernarValor={ordernarValor}
   setOrdernarValor={setOrdernarValor}
   
   selecionarTipo={selecionarTipo}
   setSelecionarTipo={setSelecionarTipo}
   />}
   */

    /************ INICIO MEU CODIGO ************
    {productsData
            /*==============BUSCAR NOME*/
    /************ INICIO MEU CODIGO ************
   .filter((products) => products.name.english.toLowerCase().includes(buscaNome))
/************ FIM MEU CODIGO ************
/*=============== ORDENAR POR NOME */

    /*==============BUSCAR NOME
   .sort((a, b) => {
       if (ordernarNome === "crescente") {
           return a.name.english < b.name.english ? -1 : 1
       }
       else if (ordernarNome === "decrescente") {
           return a.name.english < b.name.english ? 1 : -1
       }
   })


   /*=============== ORDENAR POR VALOR */
    /************ INICIO MEU CODIGO ************
    .sort((a, b) => {
        if (ordernarValor === "menor") {
            return a.price < b.price ? -1 : 1
        }
        else if (ordernarValor === "maior") {
            return a.price < b.price ? 1 : -1
        }
    })


    /*=============== SELECIONAR TIPO */
    /************ INICIO MEU CODIGO ************
            .filter((products) => {
                return selecionarTipo ? products.type.includes(selecionarTipo) : products
            })
    
            //*=============== */
    /*   .map((products) => {
         return <ProductsCards
           cardColor={getColors(products.type[0])}
           key={products.id}
           products={products}
         />})
         */

    /*}*/

    const filterProductsByText = () => {
        return products.filter(
            (product) => product.name.english.toLowerCase().includes(filterText.toLowerCase())
        )
    }

    
 

    return (

        <Main>
            <Background />
            <section >

                <h1>Produtos</h1>
                {
                filterProductsByText()
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
