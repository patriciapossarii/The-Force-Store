import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    Flex-direction:column;
    justify-content: space-between;
    background-color:black;

    .button-group {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    button {
        background-color: black;
        border: none;
        width: 70px;
        height: 50px;
        margin: 0 4px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }

    .cart-btn {
        position: relative;
    }

    .cart-badge {
        position: absolute;
        top: 10%;
        right: 10%;
        border-radius: 50%;
        background-color: white;
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Img = styled.img`
   max-width:50%;
   max-height:35%; 
   margin:0;
   border-radius:50%
   background-color:black;
`
export const SearchContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:16px;
        `
