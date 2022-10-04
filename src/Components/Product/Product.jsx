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
}) => {
  return (
    <Card className="productCard">
      <Card.Img variant="top" src={imageURL}></Card.Img>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text>
          {description}: <strong>${price}</strong>
        </Card.Text>
      </Card.Body>
      <button className="cartButton">Add To Cart</button>
    </Card>
  );
};

export default Product;
