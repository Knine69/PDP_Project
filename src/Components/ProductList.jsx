import Products from "../utils/Products";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      {Products.map((product) => {
        return (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            available_amount={product.available_amount}
            description={product.description}
            imageURL={product.imageURL}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
