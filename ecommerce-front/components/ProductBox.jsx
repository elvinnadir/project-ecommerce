import { styled } from "styled-components"
import Button from "./Button";
import CartIcon from "./Icons/Cart";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ProductWrapper = styled.div`
    

`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 100px;
    }
    
`;

const Title = styled(Link)`
    font-weight:normal;
    margin: 0;
    font-size: .9rem;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
   display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
    font-weight: 500;
    font-size: 1.5rem;
`;

export default function ProductBox({ _id, images, title, description, price }) {
    const url = '/product/' + _id;
    const { addProduct } = useContext(CartContext)
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images?.[0]} alt="" />
                </div>
            </WhiteBox>

            <ProductInfoBox>
                <Title href={url}>
                    {title}
                </Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button onClick={() => addProduct(_id)} primary outline>
                        Add to cart
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}
