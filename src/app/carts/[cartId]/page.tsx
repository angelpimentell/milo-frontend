import Navbar from "@/app/components/main/Navbar";

export default function Page({ params }: { params: { cartId: string } }) {
    return (
        <>
            <Navbar />
            <h1>Cart {params.cartId}</h1>
        </>
    )
}