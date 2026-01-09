import type { Product } from "../types/products";

export default function GetProducts() {
    const productList: Product = {name: "Basket ball", price: 10.99, rating: 4.5};

    const { name, price, rating } = productList;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    )
}