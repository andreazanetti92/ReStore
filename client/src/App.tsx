import { useEffect, useState } from "react";

function App() {
  // Set the state
  // 1° parameter is the variable name (NOT DECLARED previously)
  // 2° is the func that will set a new product into the products array
  const [products, setProducts] = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 80.00},
  ]);

  useEffect(() => {
    fetch("http://localhost:5018/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // wrap a func around setProducts
  function addProduct(){
    // set to state a new product // ... is the spread operator that copy the previous array
    // setProducts([...products, {name: 'product3', price: 110.00}])
    setProducts(prevState => [...prevState,
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }

  return (
    <div>
      <h1>Hello Universe!</h1>
      <ul>
        {products.map( (product, i) => (
          <li key={i}>Name: {product.name} - Price: {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
