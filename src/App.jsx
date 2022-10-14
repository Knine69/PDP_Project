import { useState } from "react";
import ProductList from "./Components/ProductList/ProductList";
import "bootstrap/dist/css/bootstrap.css";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import "./App.css";
import Products from "./utils/Products";

function App() {
  const [catalogueProducts, setCatalogueProducts] = useState(Products);
  const [amountOfProducts, setAmountOfProducts] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const updateCart = (product) => {
    setAmountOfProducts(amountOfProducts + 1);
    updateCatalogueProducts(product);

    const newCartList = cartProducts;
    if (newCartList.length > 0) {
      const filteredCart = newCartList.filter((prod) => prod.id === product.id);
      if (filteredCart.length > 0) {
        newCartList.map((prod) => {
          if (prod.id === product.id) {
            prod.requested += 1;
            setCartProducts(newCartList);
          }
        });
      } else if (filteredCart.length === 0) {
        product.requested = 1;
        setCartProducts([...newCartList, product]);
      }
    } else if (newCartList.length === 0) {
      product.requested = 1;
      cartProducts.push(product);
      setCartProducts(cartProducts);
    }
  };

  const updateCatalogueProducts = (product) => {
    const newCatalogueProduct = catalogueProducts;
    newCatalogueProduct.map((prod) => {
      if (prod.id === product.id) {
        prod.available_amount = prod.available_amount - 1;
      }
    });
    setCatalogueProducts(newCatalogueProduct);
  };

  const toggleShopping = () => {
    if (showShoppingCart) {
      console.log("Retrieved");
      const newCart = cartProducts.filter((prod) => prod.requested !== 0);
      setCartProducts(newCart);
    }
    setShowShoppingCart(!showShoppingCart);
  };

  const updateAmountInCatalogueProducts = (product, amount) => {
    const updateCartProduct = updateCartProductUtility(product, amount);
    // console.log(`Current cart: ${JSON.stringify(updateCartProduct)}`);
    setCartProducts(updateCartProduct);
  };

  const updateCartProductUtility = (product, amount) => {
    const newCartProduct = cartProducts;
    newCartProduct.map((prod) => {
      if (prod.id === product.id) {
        const previousAvailable = prod.available_amount - prod.requested;
        if (amount < previousAvailable) {
          if (amount === 0) {
            subsctractRequestedAndProducts(prod);
            updateUtiltyCatalogue(prod, "A");
          } else {
            if (prod.requested < amount) {
              addRequestedAndProducts(prod);
              updateUtiltyCatalogue(prod, "B");
            } else {
              validateRequestedGreaterThanAmount(prod, amount);
            }
          }
        } else if (amount > previousAvailable) {
          if (previousAvailable === 0) {
            setAmountOfProducts(amountOfProducts - 1);
            updateUtiltyCatalogue(prod, "A");
          } else {
            validateRequestedGreaterThanAmount(prod, amount);
          }
        } else {
          validateRequestedGreaterThanAmount(prod, amount);
        }

        prod.requested = amount;
      }
    });
    return newCartProduct;
  };

  const validateRequestedGreaterThanAmount = (prod, amount) => {
    if (prod.requested > amount) {
      subsctractRequestedAndProducts(prod);
      updateUtiltyCatalogue(prod, "A");
    } else {
      addRequestedAndProducts(prod);
      updateUtiltyCatalogue(prod, "B");
    }
  };

  const addRequestedAndProducts = (product) => {
    if (product.requested < product.available_amount) product.requested += 1;
    setAmountOfProducts(amountOfProducts + 1);
  };

  const subsctractRequestedAndProducts = (product) => {
    if (product.requested > 0) {
      product.requested -= 1;
      setAmountOfProducts(amountOfProducts - 1);
    }
  };

  const updateUtiltyCatalogue = (product, option) => {
    const newCatalogueProducts = catalogueProducts;
    newCatalogueProducts.map((prod) => {
      if (prod.id === product.id) {
        switch (option) {
          case "A":
            prod.available_amount += 1;
            break;
          case "B":
            prod.available_amount -= 1;
            break;
        }
      }
    });
    setCatalogueProducts(newCatalogueProducts);
  };

  const retrieveUpdatedCatalogue = () => {
    return (
      <div>
        <ProductList
          updateCartHandler={updateCart}
          catalogueProducts={catalogueProducts}
        />
      </div>
    );
  };

  const retrieveUpdatedCart = () => {
    return (
      <div>
        <ShoppingCart
          cartProducts={cartProducts}
          updateAmount={updateAmountInCatalogueProducts}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="row header">
        <div className="col-9 pt-5 pb-4 ms-4 title">
          <h2>Taller 1 - Programación Paralela y Definida</h2>
        </div>
        <div className="col pt-5 ms-5 appBody">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => toggleShopping()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
            <span className="ms-2">{amountOfProducts} Items</span>
          </button>
        </div>
      </div>
      <hr />
      {!showShoppingCart && retrieveUpdatedCatalogue()}
      {showShoppingCart && retrieveUpdatedCart()}
    </div>
  );
}

export default App;
