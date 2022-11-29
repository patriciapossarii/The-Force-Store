import { useState } from "react";
import Header from "../../components/Header/Header"
import productsData from "../../product/productsData.json"
import { getColors } from "../../utils/ReturnCardColor";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Main } from "./ProductsScreen.styled";
import { Background } from "./ProductsScreen.styled";

function ProductsScreen(props) {
    const [buscaNome, setBuscaNome] = useState("")
    const [ordernarValor, setOrdernarValor] = useState("")
    const [ordernarNome, setOrdernarNome] = useState("")
    const [selecionarTipo, setSelecionarTipo] = useState("")

    const { addToCart } = props

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

    /*
   <Header
   buscaNome={buscaNome}
   setBuscaNome={setBuscaNome}
   
   ordernarNome={ordernarNome}
   setOrdernarNome={setOrdernarNome}
   
   ordernarValor={ordernarValor}
   setOrdernarValor={setOrdernarValor}
   
   selecionarTipo={selecionarTipo}
   setSelecionarTipo={setSelecionarTipo}
   />
    
   */

    return (

        <Main>
            <Background />
            <section>

                <h1>Produtos</h1>
                {productsData

                    /*=============== SELECIONAR O LADO DA FORÇA */

                    .filter((product) => {
                        return selecionarTipo ? product.type.includes(selecionarTipo) : product
                    })
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
