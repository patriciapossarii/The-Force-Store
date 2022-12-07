import { HeaderContainer, Img, SearchContainer } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import productIcon from "../../assets/product.svg"
import cartIcon from "../../assets/cart.svg"
import logotipo from '../../assets/logo.png'


function Header(props) {
    const { goToCartScreen,
        goToProductsScreen,
        filterText,
        onChangeFilterText,
        orderByName,
        selectSide,
        orderByPrice,
        lowPrice,
        highPrice,
        itemsInCart,
          } = props


    const sideForceArray = [
        "Light",
        "Dark"];

    const onChangeOrderByName = (e) => {
        props.setOrderByName(e.target.value)
    }

    const onChangeOrderByPrice = (e) => {
        props.setOrderByPrice(e.target.value)
    }


    const onChangeSelectSide = (e) => {
        props.setSelectSide(e.target.value)
    }

    const onChangeLowPrice = (e) => {
        props.setLowPrice(e.target.value)
    }

    const onChangehighPrice = (e) => {
        props.setHighPrice(e.target.value)
    }

    return (
        <HeaderContainer>

            <Img src={logotipo} alt="Cart icon" />

            <div className="button-group">
                <button onClick={goToProductsScreen}>
               

                    <img src={productIcon} alt="Product icon" />
                </button>

                <button onClick={goToCartScreen} className="cart-btn">
                {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                    }
                    <img src={cartIcon} alt="Cart icon" />
                </button>
            </div>



            <SearchContainer>
                <a>
                    <input
                        type="text"
                        placeholder="Buscar por nome"
                        value={filterText}
                        onChange={onChangeFilterText} />
                    <img src={searchIcon} alt="Search icon" />
                </a>


                <select value={orderByName} onChange={onChangeOrderByName}>
                    <option value="">Ordenar Itens por Nome</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>


                <select value={orderByPrice} onChange={onChangeOrderByPrice}>
                    <option value="">Ordenar Preço</option>
                    <option value="menor">Crescente</option>
                    <option value="maior">Decrescente</option>
                </select>

                <a>
                    <input
                        type="number"
                        placeholder="Valor Mínimo"
                        min="0"
                        value={lowPrice}
                        onChange={onChangeLowPrice}
                    />

                    <input
                        type="number"
                        placeholder="Valor Máximo"
                        min="0"
                        value={highPrice}
                        onChange={onChangehighPrice}
                    />

                </a>


                <select
                    name="tipo"
                    id="tipo"
                    value={selectSide}
                    onChange={onChangeSelectSide} >

                    <option value="">Escoher um lado da Força</option>
                    {sideForceArray.map((type) => {
                        return (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        );
                    })}
                </select>

            </SearchContainer>
        </HeaderContainer>
    )
}

export default Header
