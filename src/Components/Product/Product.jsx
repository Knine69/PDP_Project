import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./product.css";
import { useState } from "react";

const Product = ({
  id,
  name,
  price,
  available_amount,
  description,
  imageURL,
  addToCart,
}) => {
  const [product, setProducts] = useState({
    id,
    name,
    price,
    available_amount,
    description,
    imageURL,
  });

  const addToCartCaller = (prodID) => {
    updateProductAmount();
    addToCart(prodID);
  };

  const updateProductAmount = () => {
    setProducts({ ...product, available_amount: product.available_amount - 1 });
    console.log(`Updated products: ${JSON.stringify(product)}`);
  };

  return (
    <Card className="productCard">
      <Card.Img src={product.imageURL}></Card.Img>
      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text>
          {description}: <strong>${product.price}</strong>
          <br />
          Available: {product.available_amount}
        </Card.Text>
      </Card.Body>
      <button className="cartButton" onClick={() => addToCartCaller({ id })}>
        Add To Cart
      </button>
    </Card>
  );
};

export default Product;
