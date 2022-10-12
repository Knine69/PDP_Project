import Product from "../Product/Product";
import Row from "react-bootstrap/Row";

const ProductList = ({ updateCartHandler, catalogueProducts }) => {
  const addToCartHandler = (product) => {
    updateCartHandler(product);
  };

  return (
    <div className="col-9">
      <Row xs={1} md={3}>
        {catalogueProducts.map((product, index) => {
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
