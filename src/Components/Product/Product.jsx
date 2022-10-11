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

  const addToCartCaller = () => {
    if (product.available_amount > 0) {
      setProducts({
        ...product,
        available_amount: product.available_amount - 1,
      });
      addToCart(product);
    } else {
      alert(`There are currently no more units of this product`);
    }
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
      <button className="cartButton" onClick={() => addToCartCaller()}>
        Add To Cart
      </button>
    </Card>
  );
};

export default Product;
