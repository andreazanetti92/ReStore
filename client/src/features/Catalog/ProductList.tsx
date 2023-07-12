import { List } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../../app/models/Product";

interface Props{
    products: Product[]
}

export default function ProductList({products} : Props) {
    return (
        <>
            <List>
                {products.map( product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </List>
        </>
    )
}