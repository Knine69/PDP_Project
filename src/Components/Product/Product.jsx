import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "./product.css";

const Product = ({
  id,
  name,
  price,
  available_amount,
  description,
  imageURL,
  addToCart,
}) => {
  const addToCartCaller = (prodID) => {
    addToCart(prodID);
  };

  return (
    <Card className="productCard">
      <Card.Img src={imageURL}></Card.Img>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text>
          {description}: <strong>${price}</strong>
          <br />
          Available: {available_amount}
        </Card.Text>
      </Card.Body>
      <button className="cartButton" onClick={addToCartCaller({ id })}>
        Add To Cart
      </button>
    </Card>
  );
};

export default Product;
