import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter"
import { getColors } from "../../utils/ReturnCardColor";
import { Main } from "./CartScreen.styled";

function CartScreen(props) {

    const {
        cart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props


    const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc, 0)

    return (
        <Main>
            <section>
                <h1> Valor total do carrinho: {priceFormatter.format(total)}</h1>
                <hr />
                {cart.map((product) => (

                    <ProductCard
                        cardColor={getColors(product.type[0])}
                        key={product.id}
                        product={product}
                        isOnCartScreen={true}
                        decreaseQuantityInCart={decreaseQuantityInCart}
                        increaseQuantityInCart={increaseQuantityInCart}
                        deleteFromCart={deleteFromCart}
                    />
                ))}

            </section>
        </Main>

    )
}

export default CartScreen
