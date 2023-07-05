export default function Page({ params }: { params: { cartId: string } }) {
    return <h1>Product {params.cartId}</h1>
}