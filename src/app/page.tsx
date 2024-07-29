
import ProductItem from "@/components/ProductItem";
import { checkIsAuthenticated, cookieBasedClient } from "@/utils/amplify-utils";

export default async function Home() {

  let dummyProduct = {
    name: "Dummy Product",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 0,
    image: "https://dummyimage.com/600x400/000/fff",
    content: undefined,
    id: "string",
    createdAt: "string",
    updatedAt: "string",
  }

  const isSignedIn = await checkIsAuthenticated();
  const { data: products, errors } = await cookieBasedClient.models.Product.list({
    authMode: isSignedIn ? "userPool" : "iam",
  });

  console.log("Products", products);
  console.log("isSignedIn", isSignedIn);

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">

      <ProductItem product={dummyProduct} isSignedIn={false} />

      { products?.map((product)=>(
        <ProductItem 
          key={product.id}
          product={product}
          isSignedIn={isSignedIn}
        />
      ))}

    </main>
  );
}
