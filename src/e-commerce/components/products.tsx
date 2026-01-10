import type { Product } from "../types/products";
import '../../styles/E-Commerce.css'

export default function GetProducts() {
  const productList: Product[] = [
    { name: "Basket ball", price: 10.99, rating: 4.5 },
    { name: "Gamesir G7 Pro", price: 40.99, rating: 5.0 },
    { name: "Periodic Table Decor", price: 99.99, rating: 5.0 },
    { name: "Oxygen Tank", price: 249.99, rating: 4.7 },
  ];

  return <div className="products">{productList.map((product) => (
    <div className="item">
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  ))}</div>;
}
