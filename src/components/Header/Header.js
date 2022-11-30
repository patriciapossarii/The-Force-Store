import { HeaderContainer, Img, SearchContainer } from "./Header.styled"
import searchIcon from "../../assets/search.svg"
import productIcon from "../../assets/product.svg"
import cartIcon from "../../assets/cart.svg"
import logotipo from '../../assets/logo.png'


function Header(props) {
    const {goToCartScreen,
        goToProductsScreen,
        filterText,
        onChangeFilterText
    } = props
    

    const sideForceArray = [
        "Light",
        "Dark"];

    const onChangeNome = (e) => {
        props.setBuscaNome(e.target.value)}

    const onChangeOrdernarNome = (e) => {
        props.setOrdernarNome(e.target.value)}

    const onChangeOrdernarValor = (e) => {
        props.setOrdernarValor(e.target.value)}


    const onChangeSelecionarTipo = (e) => {
        props.setSelecionarTipo(e.target.value)}

    return (
        <HeaderContainer>
           
                <Img src={logotipo} alt="Cart icon" />

                <div className="button-group">
                    <button onClick={goToProductsScreen}>
                        <img src={productIcon} alt="Product icon" />
                    </button>

                    <button onClick={goToCartScreen} className="cart-btn">
                        <img src={cartIcon} alt="Cart icon" />
                    </button>
                </div>
           


            <SearchContainer>
                <a>
                    <input
                        type="text"
                        placeholder="Buscar por nome"
                        value={props.buscaNome}
                        onChange={onChangeFilterText} />
                    <img src={searchIcon} alt="Search icon" />
                </a>


                <select value={props.ordernarNome} onChange={onChangeOrdernarNome}>
                    <option value="">Ordenar Itens por Nome</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>


                <select value={props.ordernarValor} onChange={onChangeOrdernarValor}>
                    <option value="">Ordenar Preço</option>
                    <option value="menor">Crescente</option>
                    <option value="maior">Decrescente</option>
                </select>


                <select
                    name="tipo"
                    id="tipo"
                    value={props.selecionarTipo}
                    onChange={onChangeSelecionarTipo} >

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
