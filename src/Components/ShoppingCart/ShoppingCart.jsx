import Row from "react-bootstrap/Row";
import RequestedProduct from "../RequestedProduct/RequestedProduct";

const ShoppingCart = ({ cartProducts }) => {
  console.log(cartProducts);
  return (
    <div className="col-12">
      <Row xs={1} md={3}>
        {cartProducts.map((product, index) => {
          return (
            <RequestedProduct
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              available_amount={product.available_amount}
              description={product.description}
              imageURL={product.imageURL}
              requested={product.requested}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default ShoppingCart;
