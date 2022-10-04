import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

const Product = ({
  id,
  name,
  price,
  available_amount,
  description,
  imageURL,
}) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={imageURL}></Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}: ${price}
        </Card.Text>
      </Card.Body>
      <button style={{ marginBottom: "1rem" }}>Add To Cart</button>
    </Card>
  );
};

const adaptProduct = () => {};

export default Product;
