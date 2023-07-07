export default function Page({ params }: { params: { cartId: string } }) {
    return (
        <>
            <h1>Cart {params.cartId}</h1>
        </>
    )
}