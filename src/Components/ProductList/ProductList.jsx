import Products from "../../utils/Products";
import Product from "../Product/Product";
import Row from "react-bootstrap/Row";

const ProductList = ({ updateCartHandler }) => {

  const addToCartHandler = (productID) => {
    updateCartHandler(productID);
  };

  return (
    <div className="col-9">
      <Row xs={1} md={3}>
        {Products.map((product, index) => {
          return (
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              available_amount={product.available_amount}
              description={product.description}
              imageURL={product.imageURL}
              addToCart={addToCartHandler}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
