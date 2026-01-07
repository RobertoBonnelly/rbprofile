export default function GetProducts() {
    const productList: {name: string, price: number, rating: number} = {name: "Basket ball", price: 10.99, rating: 4.5};

    const { name, price, rating } = productList;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    )
}