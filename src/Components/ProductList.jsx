import Products from "../utils/Products";
import Product from "./Product/Product";
import Row from "react-bootstrap/Row";

const ProductList = () => {
  return (
    <div className="col-6">
      <Row xs={1} md={2}>
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
            />
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
