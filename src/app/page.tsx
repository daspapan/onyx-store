import ProductItem from "@/components/ProductItem";

export default function Home() {

  let product = {
    name: "string",
    description: "string",
    price: 0,
    image: "https://dummyimage.com/600x400/000/fff",
    content: undefined,
    id: "string",
    createdAt: "string",
    updatedAt: "string",
  }
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">

      <ProductItem product={product} isSignedIn={false} />

      <ProductItem product={product} isSignedIn={false} />

      <ProductItem product={product} isSignedIn={false} />

      <ProductItem product={product} isSignedIn={false} />

    </main>
  );
}
