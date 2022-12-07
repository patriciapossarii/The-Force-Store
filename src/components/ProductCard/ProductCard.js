import { priceFormatter } from "../../utils/priceFormatter"
import React from "react";
import {
    Container,
    ProductName,
    ProductType,
    TypesContainer,
    LogoCard,
    BuyButton,
    PriceProduct,
    ProductImg,
    QuantityCart
} from './ProductCard.styled'
import logocard from '../../assets/star.png'
import { getTypes } from '../../utils/ReturnProductsType'
import iconBuyProduct from "../../assets/cart.png"


function ProductCard(props) {

    const {
        cardColor,
        product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props




    return (
        <div>

            <Container color={cardColor}>
                <LogoCard src={logocard} alt="logocard" />

                <div>
                    <ProductName>{product.name.english}</ProductName>

                    <ProductImg src={`https://cdn-cosmos.bluesoft.com.br/products/${product.id}`} alt="" />

                    <PriceProduct>Valor unitario: {priceFormatter.format(product.price)}
                    </PriceProduct>

                    <QuantityCart>
                        {isOnCartScreen && <span> Quant :   </span>}
                        {isOnCartScreen && product.quantity > 1
                            && <button onClick={() => decreaseQuantityInCart(product)}> - </button>
                        }

                        {isOnCartScreen &&
                            <span> {product.quantity}</span>}

                        {isOnCartScreen
                            && <button onClick={() => increaseQuantityInCart(product)}> + </button>
                        }

                        {isOnCartScreen
                            && <button
                                className="cart-card-delete-btn"
                                onClick={() => deleteFromCart(product)}
                            >
                                x
                            </button>}
                    </QuantityCart>

                    <TypesContainer>
                        {product.type.map((type) => {
                            return <ProductType key={type} src={getTypes(type)} alt='' />
                        })}
                    </TypesContainer>

                    {isOnProductsScreen &&
                        <BuyButton onClick={() => addToCart(product)}><img src={iconBuyProduct}/></BuyButton>
                    }
                    

                </div>

            </Container>
        </div>
    )
}

export default ProductCard