import { useState } from "react";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductList>
        <Product />
      </ProductList>
    </div>
  );
}

export default App;
