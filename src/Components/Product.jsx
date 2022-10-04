import Products from "../utils/Products";

const Product = ({
  id,
  name,
  price,
  available_amount,
  description,
  imageURL,
}) => {
  console.log(`Products are: ${JSON.stringify(Products)}`);
  return (
    <div>
      <div>
        <img src={imageURL} alt={name} />
      </div>
      <div>
        <h1>hello</h1>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <h4>{available_amount}</h4>
        <h4>$ {price}</h4>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

const adaptProduct = () => {};

export default Product;
