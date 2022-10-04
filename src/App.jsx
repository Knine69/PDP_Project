import { useState } from "react";
import ProductList from "./Components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
