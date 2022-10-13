import Row from "react-bootstrap/Row";
import RequestedProduct from "../RequestedProduct/RequestedProduct";
import Summary from "../Summary/Summary";

const ShoppingCart = ({ cartProducts, updateAmount }) => {
  const updateCatalogueAmount = (product, amount) => {
    updateAmount(product, amount);
  };
  return (
    <div>
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
                updateCatalogueAmount={updateCatalogueAmount}
              />
            );
          })}
        </Row>
      </div>
      <div className="col-10">
        <Summary cartProducts={cartProducts}/>
      </div>
    </div>
  );
};

export default ShoppingCart;
