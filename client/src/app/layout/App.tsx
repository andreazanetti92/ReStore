import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  // Set the state
  // 1° parameter is the variable name (NOT DECLARED previously)
  // 2° is the func that will set a new product into the products array
  const [products, setProducts] = useState<Product[]>([]);

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
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'Some brand',
        description: 'Some description',
        pictureURL: 'https://picsum.photos/200',
      }])
  }

  return (
    <>
      <Typography variant="h1">Hello Universe! ReStore</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
