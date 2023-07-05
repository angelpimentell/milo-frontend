import Navbar from "@/app/components/main/Navbar";

export default function Page({ params }: { params: { productId: string } }) {
    return (
        <>
            <Navbar />
            <h1>Product {params.productId}</h1>
        </>
    )
}