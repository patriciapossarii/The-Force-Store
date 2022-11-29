import styled from "styled-components"

export const Container = styled.div`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
 }

  padding: 1px;
  min-height: 400px;
  max-height: 440px;
  min-width: 200px;
  max-width: 220px;
  background:linear-gradient(to top, ${(props) => props.color}, black, black, black, black, black, black, black);
  border-radius: 12px;
  display:flex;
  flex-wrap: wrap;
  align-itemns: center;
  position: relative;
  margin: 20px;
  color: #ffffff;
 

`;


export const ProductName = styled.h1`
  position: absolute;
  top: 200px;
  padding:8px;
  font-size:14px;
  text-align:center;
  `;




export const LogoCard = styled.img`
  position: absolute;
  top: 200px;
  max-height: 440px;
  max-width: 150px;
  
`;
export const PriceProduct = styled.p`
  position: absolute;
  top: 300px;
  padding:8px;
  font-size:14px;

 
`;
export const QuantityCart = styled.p`
  position: absolute;
  top: 325px;
  font-size:15px;
  background-color:black;
  width:96%;
  margin:8px;

  button{
  background-color: transparent;
  border: none;
  padding: 0;
  color: #fff;
  height: 16px;
  cursor: pointer;
  transition: 0.2s linear;
  line-height: 24px;
  width:15px;
}

.cart-card-delete-btn{
  background-color:red;
  align-itens:center;
}

`
export const TypesContainer = styled.div`
  margin-bottom: 3px;
  
`;

export const ProductType = styled.img`
  padding: 4px 10px;
  width: 120px;
  height: 45px;
  border-radius: 20px 0px 0px 20px;
  cursor: pointer;
  position: absolute;
  bottom: 0.1px;
  left: -4px;
  color: #000;
`;

export const BuyButton = styled.button`
  padding: 4px 10px;
  width: 100px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 4px;
  right: 2px;
  z-index: 2;
  color: #000;
`;

export const ProductImg = styled.img`
width: 143px;
height: 143px;
position: absolute;
top: 30px;
left: 25px;
z-index: 2;
border-radius: 8px;
`

