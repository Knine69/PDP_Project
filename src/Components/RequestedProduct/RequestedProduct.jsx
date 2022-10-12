import "./RequestedProduct.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const RequestedProduct = ({
  id,
  name,
  price,
  available_amount,
  description,
  imageURL,
  requested,
  updateCatalogueAmount,
}) => {
  const [localProduct, setLocalProduct] = useState({
    id,
    name,
    price,
    available_amount,
    description,
    imageURL,
    requested,
  });

  const [showAlert, setShowAlert] = useState(false);

  const stepperChange = (e) => {
    e.preventDefault();
    if (
      e.target.valueAsNumber <= localProduct.available_amount &&
      e.target.valueAsNumber >= 0
    ) {
      setShowAlert(false);
      setLocalProduct({ ...localProduct, requested: e.target.valueAsNumber });
      updateCatalogueAmount(localProduct, e.target.valueAsNumber);
    } else {
      setShowAlert(true);
    }
  };
  return (
    <ul className="">
      <li className="rowCart">
        <div className="cartContainer">
          <div className="productImage">
            <img src={imageURL} className="requestedProdImage" alt="..."></img>
          </div>
          <div className="productBody">
            <h5 className="mt-0 mb-1">{name}</h5>
            <h6>{description}</h6>
            <div className="input-group ">
              <span className="input-group-text">$</span>
              <input
                type="number"
                className="form-control cartInput"
                aria-label="Dollar amount (with dot and two decimal places)"
                value={localProduct.requested}
                onChange={stepperChange}
              ></input>
            </div>
          </div>
        </div>
      </li>
      {showAlert && (
        <div className="alert alert-dark cartAlert" role="alert">
          Not anymore units to do operation!
        </div>
      )}
    </ul>
  );
};

export default RequestedProduct;
