import CartDropdown from "./CartDropdown";

export default function CartList() {
    const carts = [{
        name: "Cart 3403950",
        products: [
            {
                name: "CAMISA"
            }
        ]
    }]

    return (
        <div>
            {carts.map((cart) => (
                <CartDropdown cart={cart} />
            ))}
        </div>
    );
}